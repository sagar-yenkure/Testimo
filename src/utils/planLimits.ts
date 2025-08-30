import { PLAN } from "../../prisma/generated/prisma";

export type PlanLimitType = {
  textTestimonials: number | "Unlimited";
  videoTestimonials: number | "Unlimited";
  collections: number | "Unlimited";
  watermark: boolean;
};

export const planLimits: Record<PLAN, PlanLimitType> = {
  BASIC: {
    textTestimonials: 15,
    videoTestimonials: 5,
    collections: 1,
    watermark: true,
  },
  PRO: {
    textTestimonials: "Unlimited",
    videoTestimonials: 5,
    collections: 5,
    watermark: false,
  },
  PREMIUM: {
    textTestimonials: "Unlimited",
    videoTestimonials: 15,
    collections: 15,
    watermark: false,
  },
  ULTIMATE: {
    textTestimonials: "Unlimited",
    videoTestimonials: "Unlimited",
    collections: "Unlimited",
    watermark: false,
  },
};
