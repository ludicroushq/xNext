"use server";
import { createFormAction } from "@orpc/react";
import { onSuccess } from "@orpc/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { routes } from "@/server/routes";

export const signOutAction = createFormAction(routes.auth.signOut, {
  interceptors: [
    // biome-ignore lint/suspicious/useAwait: server action
    onSuccess(async () => {
      revalidatePath("/", "layout");
      redirect("/");
    }),
  ],
});
