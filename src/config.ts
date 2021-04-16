import dotenv from "dotenv";
dotenv.config();

import convict from "convict";

export const config = convict({
  appName: {
    default: "brazauskas-bot",
    format: "String",
    env: "BRAZAUSKAS_APP_NAME",
  },
  dryRun: {
    default: false,
    format: "Boolean",
    env: "BRAZAUSKAS_DRY_RUN",
  },
  telegramBotToken: {
    doc: "Telegram bot token",
    format: "String",
    default: null,
    env: "BRAZAUSKAS_TELEGRAM_BOT_TOKEN",
  },
});

config.validate({ allowed: "strict" });
