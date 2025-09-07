import {
  presSignedUrlData,
  collectionSchemaWithLogoStringData,
  IdData,
} from "@/zod/collection.zod";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { apiError, apiResponse } from "@/utils/apiResponse";
import { s3 } from "@/lib/aws";
import { PUT_OBJECT_EXP } from "@/constants";
import collectionService from "../services/collection.service";
import { Context } from "../context";
import awsKeyGenerator from "@/utils/awsKeyGenerator";
import { revalidatePath } from "next/cache";
import config from "@/config";
import { ratelimit } from "../middleware/rateLimitor";
import { getClientIP } from "@/utils/getClientIP";

const collectionProcedure = {
  createPreSignedUrl: async (ctx: Context, input: presSignedUrlData) => {
    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) {
      return apiError(
        "TOO_MANY_REQUESTS",
        "Too many registration attempts. Please try again later."
      );
    }
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
    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) {
      return apiError(
        "TOO_MANY_REQUESTS",
        "Too many registration attempts. Please try again later."
      );
    }

    const newCollection = await collectionService.createCollection(ctx, {
      ...input,
      logo: awsKeyGenerator(input.logo),
    });
    revalidatePath("/dashboard");
    return apiResponse(newCollection, "New Collection Created");
  },

  getCollections: async (ctx: Context) => {
    if (!ctx.user) return apiResponse([], "User not logged in", false);

    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) return apiResponse([], "Too many attempts. Please try again later.", false)

    const collections = await collectionService.getUserCollections(
      ctx.user?.id || ""
    );
    return apiResponse(collections);
  },
};

export default collectionProcedure;
