import {
  collectionSchemaWithLogoString,
  getSignedUrlSchema,
  IdSchema,
} from "@/zod/collection.zod";
import { createTRPCRouter, publicProcedure } from "../init";
import collectionProcedure from "../procedures/collection.procedure";
import collectionService from "../services/collection.service";

const collectionRouter = createTRPCRouter({
  create: publicProcedure
    .input(collectionSchemaWithLogoString)
    .mutation(({ ctx, input }) =>
      collectionProcedure.createCollection(ctx, input)
    ),

  presSignedUrl: publicProcedure
    .input(getSignedUrlSchema)
    .mutation(({ ctx, input }) =>
      collectionProcedure.createPreSignedUrl(ctx, input)
    ),

  Collections: publicProcedure.query(({ ctx }) =>
    collectionProcedure.getCollections(ctx)
  ),

  collectionForSubmission: publicProcedure
    .input(IdSchema)
    .query(({ input }) => collectionService.getCollectionForSubmission(input)),
});
export default collectionRouter;
