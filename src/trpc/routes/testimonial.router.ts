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
    .mutation(({ input }) => testimonialProcedure.createTestimonial(input)),

  getTestimonial: publicProcedure
    .use(isLogged)
    .input(IdSchema)
    .query(({ input, ctx }) =>
      testimonialProcedure.getTestimonials(input, ctx)
    ),

  delete: publicProcedure
    .use(isLogged)
    .input(IdSchema)
    .mutation(({ input }) => testimonialProcedure.deleteTestimonial(input)),

  update: publicProcedure
    .use(isLogged)
    .input(updateStatusSchema)
    .mutation(({ input }) =>
      testimonialProcedure.updateTestimonialStatus(input)
    ),
});

export default testimonialRouter;
