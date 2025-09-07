import {
  presSignedUrlData,
  collectionSchemaWithLogoStringData,
  IdData,
} from "@/zod/collection.zod";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { apiResponse } from "@/utils/apiResponse";
import { s3 } from "@/lib/aws";
import { PUT_OBJECT_EXP } from "@/constants";
import collectionService from "../services/collection.service";
import { Context } from "../context";
import awsKeyGenerator from "@/utils/awsKeyGenerator";
import { revalidatePath } from "next/cache";
import config from "@/config";

const collectionProcedure = {
  createPreSignedUrl: async (ctx: Context, input: presSignedUrlData) => {
    const command = new PutObjectCommand({
      Bucket: config.AWS_KEYS.bucket,
      ContentType: input.type,
      Key: input.key,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: PUT_OBJECT_EXP });
    return apiResponse(url);
  },

  createCollection: async (
    ctx: Context,
    input: collectionSchemaWithLogoStringData
  ) => {
    const newCollection = await collectionService.createCollection(ctx, {
      ...input,
      logo: awsKeyGenerator(input.logo),
    });
    revalidatePath("/dashboard");
    return apiResponse(newCollection, "New Collection Created");
  },

  getCollections: async (ctx: Context) => {
    if (!ctx.user) return apiResponse([], "User not logged in", false);

    const collections = await collectionService.getUserCollections(
      ctx.user?.id || ""
    );
    return apiResponse(collections);
  },

  getCollectionForSubmission: async (collectionId: IdData) => {
    const collection = await collectionService.getCollectionForSubmission(
      collectionId
    );
    return apiResponse(collection);
  },
};

export default collectionProcedure;
