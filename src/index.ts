import { exec } from "child_process";
import { readFileSync } from "fs";
import { Telegraf } from "telegraf";

function findUrls(message: string): string[] {
  if (!message) return [];
  const parts = message.split(" ");
  console.log(parts);
  return parts.filter((potentialUrl) => {
    try {
      return new URL(potentialUrl).toString() === potentialUrl;
    } catch (e) {
      console.error(e);
      return false;
    }
  });
}

function dowloadVideo(videoUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * Math.floor(1000000));

    exec(
      `youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' --output='tmp/${random}.mp4' ${videoUrl}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          reject(`stderr: ${stderr}`);
          return;
        }
        console.info(stdout);
        resolve(`./tmp/${random}.mp4`);
      }
    );
  });
}
function addCommands(bot: Telegraf): void {
  bot.command("/dl", (ctx) => {
    const videoUrls = findUrls(ctx.update.message.text);
    videoUrls.forEach((videoUrl) => {
      dowloadVideo(videoUrl)
        .then((videoPath) => {
          ctx.replyWithVideo({
            source: readFileSync(videoPath),
          });
        })
        .catch((reason) => {
          console.error(`FAILED VIDEO DOWNLOAD ${videoUrl}: ${reason}`);
        });
    });

    if (videoUrls.length > 0) {
      ctx.deleteMessage();
    }
  });
}

function run(): void {
  console.info("Starting CN- bot!");
  const bot = new Telegraf(process.env.BOT_TOKEN ?? "");

  addCommands(bot);

  bot.on("text", (ctx) => {
    if (ctx.message.text.includes("👁") || ctx.message.text.includes("dl")) {
      if ("reply_to_message" in ctx.message) {
        const parentText = (<any>ctx.message.reply_to_message).text;
        const parentMessageId = (<any>ctx.message.reply_to_message).message_id;
        const videoUrls = findUrls(parentText);
        videoUrls.forEach((videoUrl) => {
          const caption = `Video download was requested by ${ctx.message.from.username}.`;
          dowloadVideo(videoUrl)
            .then((videoPath) => {
              ctx.replyWithVideo(
                {
                  source: readFileSync(videoPath),
                },
                {
                  caption,
                  reply_to_message_id: parentMessageId,
                }
              );
            })
            .catch((reason) => {
              console.error(`FAILED VIDEO DOWNLOAD ${videoUrl}: ${reason}`);
            });
        });
        if (videoUrls.length > 0) {
          ctx.deleteMessage();
        }
      }
    }
  });

  bot.launch();

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}

run();
