import { Bot, InlineKeyboard } from "grammy";
import { ombiClient } from "../ombiClient";
import { MyContext } from "../ombi_bot";


export function tvCommand(bot: Bot<MyContext>) {
  bot.command("tv", async (ctx) => {
    await ctx.message?.delete().catch(error => {
      console.error(error);
    });
    const [, tvDbId] = ctx.message?.text?.split(" ", 3) ?? [];
    if (tvDbId && parseInt(tvDbId, 10).toString() === tvDbId) {
      // const tvShow = await ombi.tv(tvDbId);
      const tvShow = (await ombiClient.api.v2SearchTvDetail(tvDbId, tvDbId)).data;

      const replyKeyboard = new InlineKeyboard();
      if ((!tvShow.requested || !tvShow.plexUrl) && tvShow.theMovieDbId) {
        // const request = await ombi.request("tv", tvShow.theTvDbId);
        const request = (
          await ombiClient.api.v2RequestsTvCreate({
            theMovieDbId: parseInt(tvShow.theMovieDbId, 10),
          })
        ).data;

        if (request.message)
          replyKeyboard.text(request.message).row();
        replyKeyboard.url("Track download progress", "https://radarr.karolis.host/activity/queue");
      }
      if (tvShow.imdbId) {
        replyKeyboard.url("IMDB", `https://www.imdb.com/title/${tvShow.imdbId}/`);
      }
      if (tvShow.plexUrl) {
        replyKeyboard.url("Watch on Plex", tvShow.plexUrl);
      }
      await ctx.replyWithPhoto(`https://image.tmdb.org/t/p/original${tvShow.images?.original}`, {
        caption: tvShow.title ?? "Missing tv show title",
        reply_markup: replyKeyboard,
      });
    } else {
      ctx.reply("Usage: `/tv tvDbId`", { parse_mode: "MarkdownV2" });
    }
  });
}
