import { prisma } from "@/lib/prisma";
import {
  collectionSchemaWithLogoStringData,
  IdData,
} from "@/zod/collection.zod";
import { Context } from "../context";

const collectionService = {
  createCollection: async (
    ctx: Context,
    input: collectionSchemaWithLogoStringData
  ) => {
    return await prisma.collection.create({
      data: { ...input, slug: input.name, userId: ctx.user?.id || "" },
    });
  },

  getUserCollections: async (userId: string) => {
    return await prisma.collection.findMany({
      where: {
        userId,
      },
      include: {
        testimonials: true,
      },
    });
  },

  getByCollectionId: async (input: IdData) => {
    return await prisma.collection.findFirst({
      where: {
        id: input.id,
      },
      include: {
        testimonials: true,
      },
    });
  },

  getCollectionForSubmission: async (input: IdData) => {
    return await prisma.collection.findUnique({
      where: {
        id: input.id,
      },
      omit: {
        userId: true,
      }
    });
  },
};
export default collectionService;