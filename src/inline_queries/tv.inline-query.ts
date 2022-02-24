import { Bot } from "grammy";
import { InlineQueryResultArticle } from "@grammyjs/types";
import { ombiClient } from "../ombiClient";
import { MyContext } from "../ombi_bot";


export function tvInlineQuery(bot: Bot<MyContext>) {
  bot.inlineQuery(/tv (.*)/, async (ctx) => {
    const tvTitle = ctx.inlineQuery.query.replace("tv ", "");
    const tvs = (
      await ombiClient.api.v2SearchMultiCreate(tvTitle, {
        movies: false,
        tvShows: true,
        music: false,
        people: false,
      })
    ).data;
    if (tvs.length === 0) {
      await ctx.answerInlineQuery([]);
    } else {
      await ctx.answerInlineQuery(
        tvs.map(
          (tv: any) => <InlineQueryResultArticle>{
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
          }
        ),
        {
          cache_time: 24 * 3600,
        }
      );
    }
  });
}
