"use client";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/app/_shadcn/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function Google() {
  return (
    <Button
      className="w-full"
      onClick={() => {
        authClient.signIn.social({
          callbackURL: "/app",
          provider: "google",
        });
      }}
      size="lg"
      type="button"
      variant="outline"
    >
      <Icon icon="logos:google-icon" />
      Login with Google
    </Button>
  );
}
