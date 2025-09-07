import { apiError, apiResponse } from "@/utils/apiResponse";
import { IdData } from "@/zod/collection.zod";
import {
  TestimonialStatusUpdateData,
  TestimonialWithStringFormData,
} from "@/zod/testimonial.zod";
import testimonialService from "../services/testimonial.service";
import { Context } from "../context";
import { ratelimit } from "../middleware/rateLimitor";
import { getClientIP } from "@/utils/getClientIP";

const testimonialProcedure = {
  createTestimonial: async (input: TestimonialWithStringFormData, ctx: Context) => {
    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) {
      return apiError(
        "TOO_MANY_REQUESTS",
        "Too many registration attempts. Please try again later."
      );
    }

    const testimonial = await testimonialService.create(input);
    return apiResponse(testimonial, "Testimonial submitted successfully");
  },

  getTestimonials: async (input: IdData, ctx: Context) => {
    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) {
      return apiError(
        "TOO_MANY_REQUESTS",
        "Too many registration attempts. Please try again later."
      );
    }

    const testimonials = await testimonialService.getByCollectionId(
      input,
      ctx.user?.id || ""
    );
    return apiResponse(testimonials);
  },

  updateTestimonialStatus: async (input: TestimonialStatusUpdateData, ctx: Context) => {
    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) {
      return apiError(
        "TOO_MANY_REQUESTS",
        "Too many registration attempts. Please try again later."
      );
    }

    const testimonial = await testimonialService.getTestimonialById(input.id);

    if (!testimonial)
      return apiError(
        "NOT_FOUND",
        "Cannot update Testimonial status, testimonial not found"
      );

    const updatedTestimonial = await testimonialService.updateStatus(input);
    return apiResponse(updatedTestimonial);
  },

  deleteTestimonial: async (input: IdData, ctx: Context) => { },
};

export default testimonialProcedure;
