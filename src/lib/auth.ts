import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import ms from "ms";
import { headers } from "next/headers";
import { cache } from "react";
import { google } from "@/config/auth";
import { db, schema } from "../db";

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: false,
      useNumberId: true,
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
    usePlural: true,
  }),
  plugins: [nextCookies()],
  session: {
    // biome-ignore lint/style/noMagicNumbers: milliseconds to seconds
    expiresIn: ms("180d") / 1000,
    // biome-ignore lint/style/noMagicNumbers: milliseconds to seconds
    updateAge: ms("1d") / 1000,
  },
  socialProviders: {
    ...(google && { google }),
  },
});

export const getSession = cache(async () =>
  auth.api.getSession({
    headers: await headers(),
  })
);
