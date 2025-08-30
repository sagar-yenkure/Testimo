import { prisma } from "@/lib/prisma";
import awsKeyGenerator from "@/utils/awsKeyGenerator";
import { IdData } from "@/zod/collection.zod";
import {
  TestimonialStatusUpdateData,
  TestimonialWithStringFormData,
} from "@/zod/testimonial.zod";

const testimonialService = {
  create: async (input: TestimonialWithStringFormData) => {
    const { video, ...rest } = input;
    return await prisma.testimonial.create({
      data: {
        ...rest,
        videoUrl: video && awsKeyGenerator(video),
        giverImage: awsKeyGenerator(input?.giverImage),
      },
    });
  },

  getByCollectionId: async (input: IdData, userId: string) => {
    return await prisma.collection.findFirst({
      where: {
        id: input.id,
        userId: userId,
      },
      include: {
        testimonials: true,
      },
    });
  },

  getTestimonialById: async (id: string) => {
    return await prisma.testimonial.findUnique({
      where: {
        id,
      },
    });
  },

  updateStatus: async (input: TestimonialStatusUpdateData) => {
    return await prisma.testimonial.update({
      where: {
        id: input.id,
      },
      data: {
        status: input.status,
      },
    });
  },
};

export default testimonialService;
