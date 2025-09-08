import config from "@/config";
import { JWT_EXPIRY } from "@/constants";
import jwt from "jsonwebtoken";

if (!config.JWT_SECRET)
  throw new Error("JWT_SECRET is not defined in environment variables");

export function generateToken(user: {
  id: string;
  email: string;
  username: string;
  plan: string;
}) {
  return jwt.sign({ user }, config.JWT_SECRET as string, {
    expiresIn: JWT_EXPIRY,
  });
}
