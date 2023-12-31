"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/Button";

export function SignInButton({ className }: { className: string }) {
  async function handleGoogleLoging() {
    signIn("google", { callbackUrl: "/generate" });
  }

  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
      <Button
        type="button"
        variant="text"
        className={className}
        onClick={() => {
          handleGoogleLoging();
        }}
      >
        Login
      </Button>
    </div>
  );
}
