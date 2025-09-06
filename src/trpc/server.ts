import "server-only";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import { makeQueryClient } from "./query-client";
import { createCallerFactory } from "./init";
import { trpcRouter } from "./router";
import { createTRPCContext } from "./context";

export const getQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(trpcRouter)(() => createTRPCContext({ req: undefined as unknown as Request }));
export const { trpc, HydrateClient } = createHydrationHelpers<
  typeof trpcRouter
>(caller, getQueryClient);
