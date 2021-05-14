import { FastifyInstance } from "fastify";
import fastifyStatic from "fastify-static";
import path from "path";
import { Service } from "./interfaces/common.interface";

export async function setupWeb({ service: web, db }: Service<FastifyInstance>) {
  web.register(fastifyStatic, {
    root: path.resolve("./tmp/"),
    prefix: "/tmp/",
  });

  web.get("/", async () => {
    return {
      downloads: "/downloads",
      messages: "/messages",
      files: "/files",
    };
  });

  web.get("/downloads", async () => {
    return {
      downloads: await db.download.findMany({
        orderBy: { id: "desc" },
        include: { message: { include: { replyToMessage: true } } },
        take: 100,
      }),
    };
  });

  web.get("/files", async () => {
    return {
      files: await db.download.findMany({
        orderBy: { id: "desc" },
        include: { message: { include: { replyToMessage: true } } },
        take: 100,
      }),
    };
  });

  web.get<{
    Querystring: {
      excludeSupergroup?: boolean;
    };
  }>(
    "/messages",
    {
      schema: {
        querystring: {
          excludeSupergroup: { type: "boolean" },
        },
      },
    },
    async ({ query }) => {
      const excludeSupergroup = query.excludeSupergroup ?? false;
      return {
        messages: await db.message.findMany({
          orderBy: { id: "desc" },
          where: {
            chatType: {
              [excludeSupergroup ? "not" : "equals"]: "supergroup",
            },
          },
          include: { downloads: true },
          take: 100,
        }),
      };
    }
  );
}
