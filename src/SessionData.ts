import { Context } from "grammy";


export interface SessionData {
  counter: 0;
}


export function getSessionKey(ctx: Context) {
  return ctx.from === undefined || ctx.chat === undefined ? undefined : `${ctx.from.id}/${ctx.chat.id}`;
}

export function initialSession(): SessionData {
  return { counter: 0 };
}
