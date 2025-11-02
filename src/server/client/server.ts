import "server-only";
import { createRouterClient } from "@orpc/server";
import { router } from "../routes";

globalThis.$orpcClient = createRouterClient(router, {});
