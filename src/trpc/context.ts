import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
  const session = await getServerSession(authOptions);
  if (!session) return { user: null };
  return { user: session.user };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
