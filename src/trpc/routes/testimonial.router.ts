import {
  testimonialSchemaWithString,
  updateStatusSchema,
} from "@/zod/testimonial.zod";
import { createTRPCRouter, publicProcedure } from "../init";
import testimonialProcedure from "../procedures/testimonial.procedure";
import { IdSchema } from "@/zod/collection.zod";

const testimonialRouter = createTRPCRouter({
  create: publicProcedure
    .input(testimonialSchemaWithString)
    .mutation(({ input }) => testimonialProcedure.createTestimonial(input)),

  getTestimonial: publicProcedure
    .input(IdSchema)
    .query(({ input, ctx }) =>
      testimonialProcedure.getTestimonials(input, ctx)
    ),

  delete: publicProcedure
    .input(IdSchema)
    .mutation(({ input }) => testimonialProcedure.deleteTestimonial(input)),

  update: publicProcedure
    .input(updateStatusSchema)
    .mutation(({ input }) =>
      testimonialProcedure.updateTestimonialStatus(input)
    ),
});

export default testimonialRouter;
