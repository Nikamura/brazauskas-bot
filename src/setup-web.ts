import { FastifyInstance } from "fastify";
import { Service } from "./interfaces/common.interface";

export async function setupWeb({ service: web, db }: Service<FastifyInstance>) {
  web.get("/", async () => {
    return {
      posts: await db.download.findMany({
        orderBy: { id: "desc" },
        include: { message: { include: { replyToMessage: true } } },
      }),
    };
  });
}
