import { ORPCError, os } from "@orpc/server";
import { cookies, headers } from "next/headers";
import { getSession } from "@/lib/auth";

const base = os.use(async ({ next }) =>
  next({
    context: {
      cookies: await cookies(),
      headers: await headers(),
      ...(await getSession()),
    },
  })
);

export const withoutUserOs = base.use(({ context, next }) => {
  const { user, session } = context;

  if (user || session) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({
    context: {
      ...context,
      session,
      user,
    },
  });
});

export const withUserOs = base.use(({ context, next }) => {
  const { user, session } = context;

  if (!(user && session)) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({
    context: {
      ...context,
      session,
      user,
    },
  });
});
