import { Logger } from "pino";
import { Telegraf } from "telegraf";
import { config } from "./config";
import { logger as defaultLogger } from "./logger";
import { setupTelegram } from "./setup-telegram";

type ClosableConnection = (reason?: string) => Promise<void>;

interface IClosableServer<TServer> {
  server: TServer;
  logger?: Logger;
  close: ClosableConnection;
}

async function startBot(): Promise<IClosableServer<Telegraf>> {
  const logger = defaultLogger.child({ app: "bot" });
  const bot = new Telegraf(config.get("telegramBotToken")!);
  await setupTelegram({ service: bot, logger });
  await bot.launch();
  return { server: bot, close: async (reason) => bot.stop(reason), logger };
}

async function exitGracefully(
  signal: string,
  ...closableConnections: ClosableConnection[]
) {
  defaultLogger.debug("%s signal received.", signal);
  for await (const conn of closableConnections) {
    await conn(signal);
  }
  process.exit(0);
}

async function run(): Promise<void> {
  const { close: stopBot } = await startBot();

  (["SIGINT", "SIGTERM"] as const).forEach((signal) => {
    process.once(signal, async () => await exitGracefully(signal, stopBot));
  });
}

run();
