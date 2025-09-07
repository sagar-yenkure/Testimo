import {
  testimonialSchemaWithString,
  updateStatusSchema,
} from "@/zod/testimonial.zod";
import { createTRPCRouter, publicProcedure } from "../init";
import testimonialProcedure from "../procedures/testimonial.procedure";
import { IdSchema } from "@/zod/collection.zod";
import { isLogged } from "../middleware/isLogged";

const testimonialRouter = createTRPCRouter({
  create: publicProcedure
    .use(isLogged)
    .input(testimonialSchemaWithString)
    .mutation(({ input, ctx }) => testimonialProcedure.createTestimonial(input, ctx)),

  getTestimonial: publicProcedure
    .use(isLogged)
    .input(IdSchema)
    .query(({ input, ctx }) =>
      testimonialProcedure.getTestimonials(input, ctx)
    ),

  delete: publicProcedure
    .use(isLogged)
    .input(IdSchema)
    .mutation(({ input, ctx }) => testimonialProcedure.deleteTestimonial(input, ctx)),

  update: publicProcedure
    .use(isLogged)
    .input(updateStatusSchema)
    .mutation(({ input, ctx }) =>
      testimonialProcedure.updateTestimonialStatus(input, ctx)
    ),
});

export default testimonialRouter;
