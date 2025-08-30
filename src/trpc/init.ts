import { initTRPC } from "@trpc/server";

import superjson from "superjson";
import { Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    // Log here for debugging
    console.error(`[tRPC error] Path: ${error?.stack ?? "<no-stack>"}`, {
      code: error.code,
      message: error.message,
      // cause: error.cause,
    });

    // Transform internal errors into generic messages for the client
    if (error.code === "INTERNAL_SERVER_ERROR") {
      return {
        ...shape,
        message: "Something went wrong. Please try again later.",
      };
    }
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
