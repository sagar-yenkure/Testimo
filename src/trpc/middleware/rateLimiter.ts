import { TRPCError } from "@trpc/server";
import { middleware } from "../init";
import { redis } from "@/lib/redis";
import { RATE_LIMIT, WINDOW_SECONDS } from "@/constants";

export const rateLimiter = middleware(async ({ ctx, next, path }) => {
    const ip =
        ctx.req?.headers?.get?.("x-forwarded-for")?.toString() || "unknown";

    const key = `rate:${ip}:${path}`;

    const current = await redis.incr(key);
    if (current === 1)
        await redis.expire(key, WINDOW_SECONDS);

    if (current > RATE_LIMIT) {
        throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: `Rate limit exceeded. Max ${RATE_LIMIT} requests per ${WINDOW_SECONDS} seconds.`,
        });
    }

    return next();
});
