import dotenv from "dotenv";

import { Bot, Context, GrammyError, HttpError, session, SessionFlavor } from "grammy";
import { run, sequentialize } from "@grammyjs/runner";
import { DetaAdapter } from "@grammyjs/storage-deta";
import { hydrate, HydrateFlavor } from "@grammyjs/hydrate";

import { movieCommand } from "./commands/movie.command";
import { tvCommand } from "./commands/tv.command";
import { helpCommand } from "./commands/help.command";
import { movieInlineQuery } from "./inline_queries/movie.inline-query";
import { tvInlineQuery } from "./inline_queries/tv.inline-query";
import { SessionData, getSessionKey, initialSession } from "./SessionData";

export type MyContext = HydrateFlavor<Context> & SessionFlavor<SessionData>;

async function main() {
  dotenv.config();
  const bot: Bot<MyContext> = new Bot<MyContext>(process.env.CONTENT_TELEGRAM_BOT_TOKEN!);
  bot.use(sequentialize(getSessionKey));
  bot.use(
    session({
      getSessionKey,
      initial: initialSession,
      storage: new DetaAdapter<SessionData>({
        baseName: "brazauskas_bot_session",
        projectKey: process.env.DETA_PROJECT_KEY!,
      }),
    }),
  );

  bot.use(hydrate());

  helpCommand(bot);

  movieCommand(bot);

  tvCommand(bot);

  movieInlineQuery(bot);

  tvInlineQuery(bot);

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
