// runs webserver and bot

import { PrismaClient } from "@prisma/client";
import fastify, { FastifyInstance } from "fastify";
import { Logger } from "pino";
import { Telegraf } from "telegraf";
import { config } from "./config";
import { logger as defaultLogger } from "./logger";
import { setupTelegram } from "./setup-telegram";
import { setupWeb } from "./setup-web";

type ClosableConnection = (reason?: string) => Promise<void>;

interface IClosableServer<TServer> {
  server: TServer;
  logger?: Logger;
  close: ClosableConnection;
}

async function startDatabase(): Promise<IClosableServer<PrismaClient>> {
  const logger = defaultLogger.child({ app: "db" });
  const prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
      {
        emit: "stdout",
        level: "error",
      },
      {
        emit: "stdout",
        level: "warn",
      },
    ],
  });
  prisma.$on("query", (e) => {
    logger.info("[%s] Query: %s", e.duration + "ms", e.query);
  });
  await prisma.$connect();
  return {
    server: prisma,
    close: async () => await prisma.$disconnect(),
    logger,
  };
}

async function startWeb(
  prismaClient: PrismaClient
): Promise<IClosableServer<FastifyInstance>> {
  const logger = defaultLogger.child({ app: "web" });
  const app = fastify({
    logger,
  });

  const port = config.get("port");
  await setupWeb({ service: app, db: prismaClient, logger });

  await app.listen({ port });

  return { server: app, close: async () => await app.close(), logger };
}

async function startBot(
  prismaClient: PrismaClient
): Promise<IClosableServer<Telegraf>> {
  const logger = defaultLogger.child({ app: "bot" });
  const bot = new Telegraf(config.get("telegramBotToken")!);
  await setupTelegram({ service: bot, db: prismaClient, logger });
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
  const { server: prismaClient, close: stopDatabase } = await startDatabase();
  const { close: stopWeb } = await startWeb(prismaClient);
  const { close: stopBot } = await startBot(prismaClient);

  (["SIGINT", "SIGTERM"] as const).forEach((signal) => {
    process.once(
      signal,
      async () => await exitGracefully(signal, stopBot, stopWeb, stopDatabase)
    );
  });
}

run();
