import { createTRPCRouter } from "./init";
import authRouter from "./routes/auth.router";
import collectionRouter from "./routes/collection.router";
import testimonialRouter from "./routes/testimonial.router";

// Main tRPC router
export const trpcRouter = createTRPCRouter({
  auth: authRouter,
  collection: collectionRouter,
  testimonial: testimonialRouter,
});

export type TRPCRouter = typeof trpcRouter;
