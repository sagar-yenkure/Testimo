import {
  collectionSchemaWithLogoString,
  getSignedUrlSchema,
  IdSchema,
} from "@/zod/collection.zod";
import { createTRPCRouter, publicProcedure } from "../init";
import collectionProcedure from "../procedures/collection.procedure";
import collectionService from "../services/collection.service";
import { isLogged } from "../middleware/isLogged";
import { rateLimiter } from "../middleware/rateLimiter";

const collectionRouter = createTRPCRouter({
  create: publicProcedure
    .use(rateLimiter)
    .use(isLogged)
    .input(collectionSchemaWithLogoString)
    .mutation(({ ctx, input }) =>
      collectionProcedure.createCollection(ctx, input)
    ),

  presSignedUrl: publicProcedure
    .use(rateLimiter)
    .use(isLogged)
    .input(getSignedUrlSchema)
    .mutation(({ ctx, input }) =>
      collectionProcedure.createPreSignedUrl(ctx, input)
    ),

  Collections: publicProcedure
    .use(rateLimiter)
    .use(isLogged)
    .query(({ ctx }) =>
      collectionProcedure.getCollections(ctx)
    ),

  collectionForSubmission: publicProcedure
    .use(rateLimiter)
    .input(IdSchema)
    .query(({ input }) => collectionService.getCollectionForSubmission(input)),
});
export default collectionRouter;
