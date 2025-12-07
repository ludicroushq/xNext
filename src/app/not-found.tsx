import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./_shadcn/components/ui/button";
import { H1, Lead } from "./_shadcn/components/ui/typography";

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-4">
      <H1>Not Found</H1>
      <Lead>Could not find requested resource</Lead>
      <Button asChild>
        <Link href="/">
          Return Home <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
