import dotenv from "dotenv";

import { Bot, Context, GrammyError, HttpError, InlineKeyboard, session, SessionFlavor } from "grammy";
import { run, sequentialize } from "@grammyjs/runner";
import { DetaAdapter } from "@grammyjs/storage-deta";
import { OmbiClient } from "./ombi_api";
import { InlineQueryResultArticle } from "@grammyjs/types";
import { hydrate, HydrateFlavor } from "@grammyjs/hydrate";

interface SessionData {
  counter: 0;
}

type MyContext = HydrateFlavor<Context> & SessionFlavor<SessionData>;

function getSessionKey(ctx: Context) {
  return ctx.from === undefined || ctx.chat === undefined ? undefined : `${ctx.from.id}/${ctx.chat.id}`;
}
function initial(): SessionData {
  return { counter: 0 };
}

async function main() {
  dotenv.config();
  const ombi = new OmbiClient();
  const bot = new Bot<MyContext>(process.env.CONTENT_TELEGRAM_BOT_TOKEN!);
  bot.use(sequentialize(getSessionKey));
  bot.use(
    session({
      getSessionKey,
      initial,
      storage: new DetaAdapter<SessionData>({
        baseName: "brazauskas_bot_session",
        projectKey: process.env.DETA_PROJECT_KEY!,
      }),
    }),
  );

  bot.use(hydrate());

  bot.command("help", async ctx => {
    ctx.reply(
      `
Usage:
    \`@contentcn_bot movie Movie Title\`
    \`@contentcn_bot tv TV Show\`

Tag the bot, specify type and search away\\.
      `.trim(),
      { parse_mode: "MarkdownV2" },
    );
  });

  bot.command("movie", async ctx => {
    await ctx.message?.delete().catch(error => {
      console.error(error);
    });
    const [, theMovieDbId] = ctx.message?.text?.split(" ", 3) ?? [];
    if (theMovieDbId && parseInt(theMovieDbId, 10).toString() === theMovieDbId) {
      const movie = await ombi.movie(theMovieDbId);
      const replyKeyboard = new InlineKeyboard();
      if (!movie.requested || !movie.plexUrl) {
        const request = await ombi.request("movie", theMovieDbId);
        replyKeyboard.text(request.message).row();
        replyKeyboard.url("Track download progress", "https://radarr.karolis.host/activity/queue");
      }
      if (movie.imdbId) {
        replyKeyboard.url("IMDB", `https://www.imdb.com/title/${movie.imdbId}/`);
      }
      if (movie.plexUrl) {
        replyKeyboard.url("Watch on Plex", movie.plexUrl);
      }
      await ctx.replyWithPhoto(`https://image.tmdb.org/t/p/original${movie.posterPath}`, {
        caption: movie.title,
        reply_markup: replyKeyboard,
      });
    } else {
      ctx.reply("Usage: `/movie theMovieDbId`", { parse_mode: "MarkdownV2" });
    }
  });

  bot.command("tv", async ctx => {
    await ctx.message?.delete().catch(error => {
      console.error(error);
    });
    const [, tvDbId] = ctx.message?.text?.split(" ", 3) ?? [];
    if (tvDbId && parseInt(tvDbId, 10).toString() === tvDbId) {
      const tvShow = await ombi.tv(tvDbId);
      const replyKeyboard = new InlineKeyboard();
      if (!tvShow.requested || !tvShow.plexUrl) {
        const request = await ombi.request("tv", tvShow.theTvDbId);
        replyKeyboard.text(request.message).row();
        replyKeyboard.url("Track download progress", "https://radarr.karolis.host/activity/queue");
      }
      if (tvShow.imdbId) {
        replyKeyboard.url("IMDB", `https://www.imdb.com/title/${tvShow.imdbId}/`);
      }
      if (tvShow.plexUrl) {
        replyKeyboard.url("Watch on Plex", tvShow.plexUrl);
      }
      await ctx.replyWithPhoto(`https://image.tmdb.org/t/p/original${tvShow.images.original}`, {
        caption: tvShow.title,
        reply_markup: replyKeyboard,
      });
    } else {
      ctx.reply("Usage: `/tv tvDbId`", { parse_mode: "MarkdownV2" });
    }
  });

  bot.inlineQuery(/movie (.*)/, async ctx => {
    const movieTitle = ctx.inlineQuery.query.replace("movie ", "");
    const movies = await ombi.search(movieTitle, { movies: true, tvShows: false });
    if (movies.length === 0) {
      await ctx.answerInlineQuery([]);
    } else {
      await ctx.answerInlineQuery(
        movies.map(
          (movie: any) =>
            <InlineQueryResultArticle>{
              type: "article",
              id: `movie-${movie.id}`,
              title: movie.title,
              input_message_content: {
                message_text: `/movie ${movie.id} ${movie.title}`,
              },
              url: `https://www.themoviedb.org/movie/${movie.id}`,
              description: movie.overview,
              thumb_url: `https://image.tmdb.org/t/p/w130_and_h195_bestv2${movie.poster}`,
              thumb_width: 130,
              thumb_height: 195,
            },
        ),
        {
          cache_time: 24 * 3600,
        },
      );
    }
  });

  bot.inlineQuery(/tv (.*)/, async ctx => {
    const tvTitle = ctx.inlineQuery.query.replace("tv ", "");
    const tvs = await ombi.search(tvTitle, { movies: false, tvShows: true });
    if (tvs.length === 0) {
      await ctx.answerInlineQuery([]);
    } else {
      await ctx.answerInlineQuery(
        tvs.map(
          (tv: any) =>
            <InlineQueryResultArticle>{
              type: "article",
              id: `tv-${tv.id}`,
              title: tv.title,
              input_message_content: {
                message_text: `/tv ${tv.id} ${tv.title}`,
              },
              url: `https://www.thetvdb.org/tv/${tv.id}`,
              description: tv.overview,
              thumb_url: `https://image.tmdb.org/t/p/w130_and_h195_bestv2${tv.poster}`,
              thumb_width: 130,
              thumb_height: 195,
            },
        ),
        {
          cache_time: 24 * 3600,
        },
      );
    }
  });

  bot.catch(err => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else {
      console.error("Unknown error:", e);
    }
  });

  run(bot);
}

main();
