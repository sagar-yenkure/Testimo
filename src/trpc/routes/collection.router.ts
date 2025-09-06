import {
  collectionSchemaWithLogoString,
  getSignedUrlSchema,
  IdSchema,
} from "@/zod/collection.zod";
import { createTRPCRouter, publicProcedure } from "../init";
import collectionProcedure from "../procedures/collection.procedure";
import collectionService from "../services/collection.service";
import { isLogged } from "../middleware/isLogged";

const collectionRouter = createTRPCRouter({
  create: publicProcedure
    .use(isLogged)
    .input(collectionSchemaWithLogoString)
    .mutation(({ ctx, input }) =>
      collectionProcedure.createCollection(ctx, input)
    ),

  presSignedUrl: publicProcedure
    .use(isLogged)
    .input(getSignedUrlSchema)
    .mutation(({ ctx, input }) =>
      collectionProcedure.createPreSignedUrl(ctx, input)
    ),

  Collections: publicProcedure
    .use(isLogged)
    .query(({ ctx }) =>
      collectionProcedure.getCollections(ctx)
    ),

  collectionForSubmission: publicProcedure
    .input(IdSchema)
    .query(({ input }) => collectionService.getCollectionForSubmission(input)),
});
export default collectionRouter;
