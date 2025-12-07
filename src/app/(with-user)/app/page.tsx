import { H1 } from "@/app/_shadcn/components/ui/typography";
import { orpcClient } from "@/server/client";

export default async function Page() {
  const { user } = await orpcClient.auth.getUser();

  return (
    <div className="container mx-auto my-8">
      <H1>Hello {user.name}!</H1>
    </div>
  );
}
