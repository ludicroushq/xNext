import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import ms from "ms";
import { google } from "@/config/auth";
import { db, schema } from "../db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
    usePlural: true,
  }),
  plugins: [nextCookies()],
  session: {
    expiresIn: ms("180d") / 1000,
    updateAge: ms("1d") / 1000,
  },
  socialProviders: {
    ...(google && { google }),
  },
});
