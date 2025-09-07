import { RATE_LIMIT, WINDOW_SECONDS } from "@/constants";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";


export const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(RATE_LIMIT, WINDOW_SECONDS),
    prefix: "@upstash/ratelimit",
    analytics: true,
});
