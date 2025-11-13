import { drizzle } from "drizzle-orm/libsql";
import { env } from "@/config/env/server";
import { relations } from "@/db/relations";

// biome-ignore lint/performance/noNamespaceImport: drizzle
import * as schema from "@/db/schema";

// biome-ignore lint/performance/noBarrelFile: schema
export * as schema from "@/db/schema";

export const db = drizzle({
  casing: "snake_case",
  connection: {
    authToken: env.DATABASE_AUTH_TOKEN,
    url: env.DATABASE_URL,
  },
  relations,
  schema,
});
