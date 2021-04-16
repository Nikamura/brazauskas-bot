import dotenv from "dotenv";

dotenv.config();

import convict from "convict";

export const config = convict({
  appName: {
    default: "brazauskas-bot",
    format: "String",
    env: "BRAZAUSKAS_APP_NAME",
  },
  port: {
    default: 3000,
    format: "int",
    env: "BRAZAUSKAS_WEB_PORT",
  },
  telegramBotToken: {
    doc: "Telegram bot token",
    format: "String",
    default: null,
    env: "BRAZAUSKAS_TELEGRAM_BOT_TOKEN",
  },
});

config.validate({ allowed: "strict" });
