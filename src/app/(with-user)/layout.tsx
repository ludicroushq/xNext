import { redirect } from "next/navigation";
import { type PropsWithChildren, Suspense } from "react";
import { client } from "@/server/client";

async function WithUser({ children }: PropsWithChildren) {
  const session = await client.auth.getSession();

  if (!session?.user) {
    return redirect("/get-started");
  }

  return children;
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <WithUser>{children}</WithUser>
    </Suspense>
  );
}
