import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_shadcn/components/ui/card";
import { Separator } from "@/app/_shadcn/components/ui/separator";
import { google } from "@/config/auth";
import { Google } from "./_components/form/google";

export default function Page() {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
        </CardHeader>
        <Separator />
        <CardFooter>{google && <Google />}</CardFooter>
      </Card>
    </div>
  );
}
