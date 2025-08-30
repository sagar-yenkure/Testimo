"use client";

import { TRPCProvider } from "@/trpc/client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={15 * 60}>
      <TRPCProvider>
        <Toaster />
        {children}
      </TRPCProvider>
    </SessionProvider>
  );
}
