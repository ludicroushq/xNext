import { createX } from "@xframework/x";
import { ConfigAdapter } from "@xframework/config";
import { T3EnvAdapter } from "@xframework/t3-oss__env";
import { c } from "./config";
import { env } from "./env/client";

export const x = createX()
  .syncAdapter("env", () => new T3EnvAdapter({ env }))
  .syncAdapter("config", () => new ConfigAdapter({ config: c }))
  .build();
