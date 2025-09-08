import config from "@/config";
import { ratelimit } from "@/trpc/middleware/rateLimitor";
import authService from "@/trpc/services/auth.service";
import { generateToken } from "@/utils/generateToken";
import { getClientIP } from "@/utils/getClientIP";
import { NextResponse } from "next/server";

if (!config?.CHROME_EXT_ORIGIN)
  throw new Error("CHROME_EXT_ORIGIN is not defined in environment variables");

const corsHeaders = {
  "Access-Control-Allow-Origin": `chrome-extension://${config.CHROME_EXT_ORIGIN}`,
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const { success } = await ratelimit.limit(getClientIP(req));
    if (!success)
      return NextResponse.json(
        {
          message: "Too many attempts. Please try again later.",
        },
        { status: 429, headers: corsHeaders }
      );

    const user = await authService.isUserExist(email);

    if (!user)
      return NextResponse.json(
        {
          message: "Invalid Credentials, Try Again",
        },
        { status: 429, headers: corsHeaders }
      );

    const isSame = authService.comparePassword(password, user?.password || "");

    if (!isSame)
      return NextResponse.json(
        {
          message: "Invalid Credentials, Try Again",
        },
        { status: 429, headers: corsHeaders }
      );

    const token = generateToken({
      id: user.id,
      email: user.email,
      plan: user.plan,
      username: user.name,
    });

    return NextResponse.json({ token }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Error occurred during login:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
