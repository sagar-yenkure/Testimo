import { z } from "zod";
import { TESTIMONIALS_TYPE } from "@/types";
import { TESTIMONIAL_STATUS } from "../../prisma/generated/prisma";

// Base schema
export const testimonialSchema = z
  .object({
    collectionId: z.string().min(1, "Collection ID is required"),

    giverName: z
      .string()
      .min(1, "Please enter the giver's name — it cannot be empty."),

    giverImage: z.instanceof(File, {
      message: "Please upload a valid image file.",
    }),

    content: z.string().optional(),

    type: z.nativeEnum(TESTIMONIALS_TYPE, {
      message: "Please select a valid testimonial type.",
    }),

    video: z
      .instanceof(File, { message: "Please upload a valid video file." })
      .optional(),

    stars: z.number().optional(),
    email: z.string().optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    socialLink: z.string().optional(),

    isUserConsent: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms to submit.",
    }),
  })
  .superRefine((data, ctx) => {
    // content required if type is TEXT
    if (data.type === TESTIMONIALS_TYPE.TEXT && !data.content) {
      ctx.addIssue({
        code: "custom",
        message: "Content is required for text testimonials",
        path: ["content"],
      });
    }
  });

export const testimonialSchemaWithString = testimonialSchema.extend({
  giverImage: z.string(),
  video: z.string().optional(),
});

export const updateStatusSchema = z.object({
  id: z.string(),
  status: z.enum(TESTIMONIAL_STATUS),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;
export type TestimonialWithStringFormData = z.infer<
  typeof testimonialSchemaWithString
>;
export type TestimonialStatusUpdateData = z.infer<typeof updateStatusSchema>;
