import { Bot, InlineKeyboard } from "grammy";
import { ombiClient } from "../ombiClient";
import { MyContext } from "../ombi_bot";


export function movieCommand(bot: Bot<MyContext>) {
  bot.command("movie", async (ctx) => {
    await ctx.message?.delete().catch(error => {
      console.error(error);
    });
    const [, theMovieDbId] = ctx.message?.text?.split(" ", 3) ?? [];
    if (theMovieDbId && parseInt(theMovieDbId, 10).toString() === theMovieDbId) {
      const movie = (await ombiClient.api.v2SearchMovieDetail(parseInt(theMovieDbId, 10))).data;
      const replyKeyboard = new InlineKeyboard();
      if (!movie.requested || !movie.plexUrl) {
        const request = (await ombiClient.api.v1RequestMovieCreate({ theMovieDbId: parseInt(theMovieDbId, 10) })).data;
        //  await ombi.request("movie", theMovieDbId);
        if (request.message)
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
        caption: movie.title ?? "Missing movie title",
        reply_markup: replyKeyboard,
      });
    } else {
      ctx.reply("Usage: `/movie theMovieDbId`", { parse_mode: "MarkdownV2" });
    }
  });
}
