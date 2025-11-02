import { ORPCError } from "@orpc/server";
import { withUserOs } from "@/server";

export const getSession = withUserOs.handler(({ context }) => {
  const { user, session } = context;

  if (!user) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return {
    session,
    user,
  };
});
