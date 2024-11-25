import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
    ts: true,
    noStyle: true,
  }),
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
