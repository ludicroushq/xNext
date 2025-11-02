import { client } from "@/server/client";

export default async function Page() {
  const { user } = await client.auth.getUser();

  return <div className="container mx-auto my-8">Hello {user.name}!</div>;
}
