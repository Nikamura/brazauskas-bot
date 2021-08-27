import { Logger } from "pino";

export type Service<T> = WithLogger<{ service: T }>;

export type WithLogger<T> = T & { logger: Logger };
