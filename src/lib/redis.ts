import config from "@/config";
import Redis from "ioredis";

if (!config.REDIS_URL) throw new Error("REDIS_URL is not defined in environment variables");

export const redis = new Redis(config.REDIS_URL);