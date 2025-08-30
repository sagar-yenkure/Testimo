"use client";

import { Card } from "@/components/ui/card";
import { Star, Eye, MessageSquare, Video, Building } from "lucide-react";
import Image from "next/image";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CollectionFormData } from "@/zod/collection.zod";
import { getTranslation } from "@/lib/translations";
import { LanguageCodes, optionalFields } from "@/constants";
import { Checkbox } from "../ui/checkbox";

const PreviewCard = ({ formData }: { formData: CollectionFormData }) => {
  const { theme, language } = formData;
  const logoPreview = formData.logo ? URL.createObjectURL(formData.logo) : "";

  return (
    <div
      className={`${theme === "DARK" ? "dark" : ""} md:w-1/2 min-h-screen p-4
        bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800`}
    >
      <Card className="border shadow-md rounded-2xl bg-white border-gray-200 text-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
        {/* Header */}
        <div className="flex items-center space-x-2 m-4">
          <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <h3 className="text-lg font-semibold">
            {getTranslation(LanguageCodes[language], "header.preview")}
          </h3>
        </div>

        <div className="p-6">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden bg-blue-100 dark:bg-gray-800">
              {formData.logo ? (
                <Image
                  src={logoPreview}
                  alt="Logo"
                  height={64}
                  width={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Building className="w-8 h-8 text-blue-600 dark:text-gray-300" />
              )}
            </div>

            <h1 className="text-2xl font-bold mb-2">
              {formData.title ||
                getTranslation(LanguageCodes[language], "form.testimonial")}
            </h1>
            {formData.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formData.description}
              </p>
            )}
          </div>

          {/* Rating */}
          {formData.collectStars && (
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block text-center text-gray-700 dark:text-gray-300">
                {getTranslation(LanguageCodes[language], "rating.question")}
              </Label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-8 h-8 cursor-pointer transition-colors bg-gray-300 hover:bg-yellow-400 dark:text-gray-600"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Testimonial Type */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block text-center text-gray-700 dark:text-gray-300">
              {getTranslation(
                LanguageCodes[language],
                "testimonialType.question"
              )}
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="p-4 border-2 rounded-xl transition-colors border-blue-200 bg-blue-50 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500"
              >
                <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-gray-200" />
                <span className="text-sm font-medium text-blue-700 dark:text-gray-200">
                  {getTranslation(
                    LanguageCodes[language],
                    "testimonialType.text"
                  )}
                </span>
              </button>
              <button
                type="button"
                className="p-4 border-2 rounded-xl transition-colors border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500"
              >
                <Video className="w-6 h-6 mx-auto mb-2 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {getTranslation(
                    LanguageCodes[language],
                    "testimonialType.video"
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Disabled Form Preview */}
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {getTranslation(LanguageCodes[language], "form.testimonial")}
              </Label>
              <Textarea
                placeholder="Share your experience..."
                className="mt-1 min-h-[100px] resize-none dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                disabled
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {getTranslation(LanguageCodes[language], "form.name")}
                </Label>
                <Input
                  placeholder="John Doe"
                  className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                  disabled
                />
              </div>
              <div>
                <Label>Profile Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                  disabled
                />
              </div>

              {optionalFields.map(
                (field) =>
                  formData[field.key] && (
                    <div key={field.key}>
                      <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {typeof field.label === "string"
                          ? getTranslation(
                              LanguageCodes[language],
                              field.translate
                            ) + "*"
                          : (field as { label: string }).label}
                      </Label>
                      <Input
                        placeholder={field.placeholder}
                        className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                        disabled
                      />
                    </div>
                  )
              )}
            </div>
            <div className="bg-gray-50 border rounded-md p-4">
              <div className="flex gap-3">
                <Checkbox disabled />
                <div>
                  <Label>I consent to the use of my testimonial</Label>
                  <p className="text-sm text-gray-600">
                    By checking this box, you give permission to publish and
                    share your testimonial.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled
            >
              {getTranslation(LanguageCodes[language], "form.submit")}
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t text-center border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500">
              {getTranslation(LanguageCodes[language], "footer.watermark")}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PreviewCard;
