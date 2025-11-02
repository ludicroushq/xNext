import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";
import { getSession } from "@/lib/auth";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getSession();

  if (session?.user) {
    return redirect("/app");
  }

  return children;
}
