import { client } from "@/server/client";
import { NavbarClient } from "./index.client";

export async function Navbar() {
  const session = await client.auth.getSession();

  return (
    <div className="border-b border-b-base-300">
      <div className="container mx-auto">
        <NavbarClient user={session?.user} />
      </div>
    </div>
  );
}
