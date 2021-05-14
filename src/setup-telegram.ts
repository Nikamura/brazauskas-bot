import { readFileSync } from "fs";
import { Telegraf } from "telegraf";
import { config } from "./config";
import { dowloadVideo } from "./dowloadVideo";
import { findUrls } from "./findUrls";
import { Service } from "./interfaces/common.interface";

export async function setupTelegram({ service: bot, db }: Service<Telegraf>) {
  bot.on("text", async (ctx) => {
    const replyToMessageId =
      "reply_to_message" in ctx.message
        ? (
            await db.message.findFirst({
              where: {
                messageId: ctx.message.reply_to_message?.message_id,
                chatId: ctx.message.reply_to_message?.chat.id.toString(),
              },
            })
          )?.id
        : null;

    const message = await db.message.create({
      data: {
        messageId: ctx.message.message_id,
        text: ctx.message.text,
        date: new Date(ctx.message.date * 1000),
        chatId: ctx.message.chat.id.toString(),
        chatType: ctx.message.chat.type,
        chatTitle: "title" in ctx.message.chat ? ctx.message.chat.title : null,
        fromId: ctx.message.from.id,
        fromIsBot: ctx.message.from.is_bot,
        fromFirstName: ctx.message.from.first_name,
        fromUsername: ctx.message.from.username,
        fromLanguageCode: ctx.message.from.language_code,
        replyToMessageId,
      },
    });

    const messageText = message.text;
    const isDlCommand = messageText.toLowerCase().startsWith("/dl ");
    if (isDlCommand) {
      const videoUrls = findUrls(messageText);
      if (videoUrls.length > 0) {
        for await (const videoUrl of videoUrls) {
          try {
            await ctx.deleteMessage();
            const videoPath = await dowloadVideo(videoUrl);
            await db.download.create({
              data: {
                url: videoUrl,
                status: "downloaded",
                fileName: videoPath,
                messageId: message.id,
              },
            });
            await ctx.replyWithVideo(
              { source: readFileSync(videoPath) },
              {
                caption: `${videoUrl} was requested by ${ctx.message.from.username}.`,
              }
            );
          } catch (err) {
            const failureReason =
              typeof err === "string" ? err : JSON.stringify(err);
            await db.download.create({
              data: {
                url: videoUrl,
                status: "failed",
                failureReason: failureReason,
                messageId: message.id,
              },
            });
            const debugChatId = config.get("debugChatId");
            if (debugChatId) {
              await ctx.telegram.sendMessage(
                debugChatId,
                `Video failed to download: ${failureReason}`,
                { disable_notification: true, disable_web_page_preview: true }
              );
            }
            await ctx.reply(
              `${ctx.message.text}\n\nWritten by ${ctx.message.from.username}`
            );
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
