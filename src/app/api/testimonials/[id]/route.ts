import { prisma } from "@/lib/prisma";
import { ratelimit } from "@/trpc/middleware/rateLimitor";
import { getClientIP } from "@/utils/getClientIP";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


// this fuunction is to call in testim-react NPM package to fetch highlighted testimonials by collectionId
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { message: "Bad Request" },
        { status: 400, headers: corsHeaders }
      );
    }

    const { success } = await ratelimit.limit(getClientIP(req));
    if (!success)
      return NextResponse.json(
        {
          message: "Too many attempts. Please try again later."
        },
        { status: 429, headers: corsHeaders }
      );


    const testimonials = await prisma.testimonial.findMany({
      where: {
        collectionId: id,
        isUserConsent: true,
        status: "HIGHLIGHTED",
      },
      select: {
        id: true,
        giverName: true,
        content: true,
        isUserConsent: true,
        giverImage: true,
        videoUrl: true,
        stars: true,
        type: true,
      },
    });

    return NextResponse.json(testimonials || [], {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.log("testimonial error --> ", err)
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
