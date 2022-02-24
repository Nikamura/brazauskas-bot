import { Bot } from "grammy";
import { InlineQueryResultArticle } from "@grammyjs/types";
import { ombiClient } from "../ombiClient";
import { MyContext } from "../ombi_bot";


export function movieInlineQuery(bot: Bot<MyContext>) {
  bot.inlineQuery(/movie (.*)/, async (ctx) => {
    const movieTitle = ctx.inlineQuery.query.replace("movie ", "");
    // const movies = await ombi.search(movieTitle, { movies: true, tvShows: false });
    const movies = (
      await ombiClient.api.v2SearchMultiCreate(movieTitle, {
        movies: true,
        tvShows: false,
        music: false,
        people: false,
      })
    ).data;
    if (movies.length === 0) {
      await ctx.answerInlineQuery([]);
    } else {
      await ctx.answerInlineQuery(
        movies.map(
          (movie: any) => <InlineQueryResultArticle>{
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
          }
        ),
        {
          cache_time: 24 * 3600,
        }
      );
    }
  });
}
