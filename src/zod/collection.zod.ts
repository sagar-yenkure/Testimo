import z from "zod";
import {
  TESTIMONIAL_LANGUAGE,
  TESTIMONIAL_THEME,
} from "../../prisma/generated/prisma";

export const collectionSchema = z.object({
  name: z.string().min(1, "Collection name is required"),
  logo: z.instanceof(File, { message: "Logo must be a file" }).optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  collectStars: z.boolean().optional(),
  collectUserMail: z.boolean().optional(),
  collectUserRole: z.boolean().optional(),
  collectUserCompany: z.boolean().optional(),
  collectUserSocialLink: z.boolean().optional(),
  language: z.enum(TESTIMONIAL_LANGUAGE),
  theme: z.enum(TESTIMONIAL_THEME).optional(),
});

export const collectionSchemaWithLogoString = collectionSchema.extend({
  logo: z.string(),
});

export const getSignedUrlSchema = z.object({
  key: z.string().min(1, "key name is required"),
  type: z.string().min(1, "type name is required"),
});

export const IdSchema = z.object({
  id: z.string("collection Id is required"),
});

export type IdData = z.infer<typeof IdSchema>;
export type CollectionFormData = z.infer<typeof collectionSchema>;
export type presSignedUrlData = z.infer<typeof getSignedUrlSchema>;
export type collectionSchemaWithLogoStringData = z.infer<
  typeof collectionSchemaWithLogoString
>;
