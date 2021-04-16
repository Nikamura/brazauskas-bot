import { PrismaClient } from "@prisma/client";
import { Logger } from "pino";

export type Service<T> = WithDb<WithLogger<{ service: T }>>;

export type WithDb<T> = T & { db: PrismaClient };

export type WithLogger<T> = T & { logger: Logger };
