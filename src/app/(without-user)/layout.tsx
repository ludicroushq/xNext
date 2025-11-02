import { redirect } from "next/navigation";
import { type PropsWithChildren, Suspense } from "react";
import { client } from "@/server/client";

export async function WithoutUser({ children }: PropsWithChildren) {
  const session = await client.auth.getSession();

  if (session?.user) {
    return redirect("/app");
  }

  return children;
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <WithoutUser>{children}</WithoutUser>
    </Suspense>
  );
}
