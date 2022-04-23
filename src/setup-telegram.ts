import { readFileSync } from "fs";
import { Telegraf } from "telegraf";
import { config } from "./config";
import { dowloadVideo, downloadSong } from "./dowloadVideo";
import { findUrls } from "./findUrls";
import { Service } from "./interfaces/common.interface";

export async function setupTelegram({ service: bot }: Service<Telegraf>) {
  bot.on("text", async (ctx) => {
    const message = ctx.message;
    const messageText = message.text;
    const command = messageText.toLowerCase().split(" ")[0] ?? "/unknown";
    const isDlCommand = ["/dl", "/mp3"].includes(command);

    if (isDlCommand) {
      const username = ctx.message.from.first_name ?? ctx.message.from.username;
      const videoUrls = findUrls(messageText);
      if (videoUrls.length > 0) {
        for await (const videoUrl of videoUrls) {
          try {
            if (command === "/dl") {
              await ctx.replyWithChatAction("record_video");
              const videoPath = await dowloadVideo(videoUrl);
              const source = readFileSync(videoPath);
              await ctx.replyWithChatAction("upload_video");
              await ctx.replyWithVideo({ source }, { reply_to_message_id: ctx.message.message_id });
            } else {
              await ctx.replyWithChatAction("record_voice");
              const songPath = await downloadSong(videoUrl);
              const source = readFileSync(songPath);
              await ctx.replyWithChatAction("upload_voice");
              ctx.replyWithAudio({ source }, { reply_to_message_id: ctx.message.message_id });
            }
          } catch (err) {
            const failureReason =
              typeof err === "string" ? err : JSON.stringify(err);
            const debugChatId = config.get("debugChatId");
            if (debugChatId) {
              await ctx.telegram.sendMessage(
                debugChatId,
                `Video failed to download: ${failureReason}`,
                { disable_notification: true, disable_web_page_preview: true }
              );
            }
            await ctx.reply(`${ctx.message.text}\n\nWritten by ${username}`);
          }
        }
      } else {
        await ctx.reply("Bruv no URL was found", {
          reply_to_message_id: ctx.message.message_id,
        });
      }
    }
  });
}
