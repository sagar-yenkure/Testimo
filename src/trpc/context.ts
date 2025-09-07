import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { cache } from "react";

export const createTRPCContext = cache(async ({ req }: { req: Request; }) => {
  const session = await getServerSession(authOptions);
  if (!session) return { user: null, req };
  return { user: session.user, req };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
