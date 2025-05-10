import { createX } from "@xframework/x";
import { ConfigAdapter } from "@xframework/config";
import { c } from "./config";

export const x = createX()
  .syncAdapter("config", () => new ConfigAdapter({ config: c }))
  .build();
