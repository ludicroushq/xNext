import neostandard, { resolveIgnoresFromGitignore } from "neostandard";

export default neostandard({
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
  noStyle: true,
});