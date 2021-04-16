import { FastifyInstance } from "fastify";
import { Service } from "./interfaces/common.interface";

export async function setupWeb({ service: web, db }: Service<FastifyInstance>) {
  web.get("/", async () => {
    return {
      downloads: "/downloads",
      messages: "/messages",
    };
  });

  web.get("/downloads", async () => {
    return {
      posts: await db.download.findMany({
        orderBy: { id: "desc" },
        include: { message: { include: { replyToMessage: true } } },
        take: 100,
      }),
    };
  });

  web.get("/messages", async () => {
    return {
      posts: await db.message.findMany({
        orderBy: { id: "desc" },
        where: { chatType: { equals: "supergroup" } },
        include: { downloads: true },
        take: 100,
      }),
    };
  });
}
