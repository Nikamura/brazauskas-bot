import { Bot } from "grammy";
import { MyContext } from "../ombi_bot";


export function helpCommand(bot: Bot<MyContext>) {
  bot.command("help", async (ctx) => {
    ctx.reply(
      `
Usage:
    \`@contentcn_bot movie Movie Title\`
    \`@contentcn_bot tv TV Show\`

Tag the bot, specify type and search away\\.
      `.trim(),
      { parse_mode: "MarkdownV2" }
    );
  });
}
