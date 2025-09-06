import { TRPCError } from "@trpc/server";
import { middleware } from "../init";

export const isLogged = middleware(({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "You must be logged in to access this resource",
        });
    }

    return next({
        ctx: {
            ...ctx,
            user: ctx.user,
        },
    });
});