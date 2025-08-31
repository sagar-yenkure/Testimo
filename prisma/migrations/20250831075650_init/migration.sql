-- CreateEnum
CREATE TYPE "public"."PLAN" AS ENUM ('BASIC', 'PRO', 'PREMIUM', 'ULTIMATE');

-- CreateEnum
CREATE TYPE "public"."TESTIMONIALS_TYPE" AS ENUM ('TEXT', 'VIDEO');

-- CreateEnum
CREATE TYPE "public"."TESTIMONIAL_STATUS" AS ENUM ('NORMAL', 'HIGHLIGHTED', 'LIKED', 'SPAM', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "public"."TESTIMONIAL_LANGUAGE" AS ENUM ('ENGLISH', 'GERMAN', 'CHINESE', 'JAPANESE', 'KOREAN', 'ARABIC');

-- CreateEnum
CREATE TYPE "public"."TESTIMONIAL_THEME" AS ENUM ('LIGHT', 'DARK');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "plan" "public"."PLAN" NOT NULL DEFAULT 'BASIC',
    "authProviderId" TEXT,
    "authProvider" TEXT,
    "image" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "collectStars" BOOLEAN NOT NULL DEFAULT true,
    "collectUserMail" BOOLEAN NOT NULL DEFAULT false,
    "collectUserRole" BOOLEAN NOT NULL DEFAULT false,
    "collectUserCompany" BOOLEAN NOT NULL DEFAULT false,
    "collectUserSocialLink" BOOLEAN NOT NULL DEFAULT false,
    "language" "public"."TESTIMONIAL_LANGUAGE" NOT NULL DEFAULT 'ENGLISH',
    "theme" "public"."TESTIMONIAL_THEME" NOT NULL DEFAULT 'LIGHT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Testimonial" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "giverName" TEXT NOT NULL,
    "giverImage" TEXT,
    "type" "public"."TESTIMONIALS_TYPE" NOT NULL,
    "videoUrl" TEXT,
    "stars" INTEGER,
    "email" TEXT,
    "role" TEXT,
    "company" TEXT,
    "socialLink" TEXT,
    "isUserConsent" BOOLEAN NOT NULL,
    "status" "public"."TESTIMONIAL_STATUS" NOT NULL DEFAULT 'NORMAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "collectionId" TEXT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_slug_key" ON "public"."Collection"("slug");

-- AddForeignKey
ALTER TABLE "public"."Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Testimonial" ADD CONSTRAINT "Testimonial_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "public"."Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
