"use client";

import type { VariantProps } from "cva";
import { signIn } from "next-auth/react";

import { Button, buttonVariants } from "@/components/ui/Button";

export function SignUpButton({
  type,
  children,
}: {
  type: VariantProps<typeof buttonVariants>["variant"];
  children: React.ReactNode;
}) {
  async function handleGoogleLogin() {
    signIn("google", { callbackUrl: "/billing" });
  }

  return (
    <Button
      type="button"
      variant={type}
      className="w-[256px]"
      onClick={() => {
        handleGoogleLogin();
      }}
    >
      {children}
    </Button>
  );
}
