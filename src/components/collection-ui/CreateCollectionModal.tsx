"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PreviewCard from "./PreviewCard";
import { CollectionFormData, collectionSchema } from "@/zod/collection.zod";
import { trpc } from "@/trpc/client";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import CopyUrlModal from "./CopyUrlModal";
import { TESTIMONIAL_LANGUAGE, TESTIMONIAL_THEME } from "@/types";
import { LanguageOptions } from "@/constants";

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateCollectionModal({
  isOpen,
  onClose,
}: CreateCollectionModalProps) {
  const { mutate: uploadLogo, isPending: uploadLogoPending } =
    trpc.collection.presSignedUrl.useMutation({
      onError: (err) => console.log(err.message),
    });

  const { mutate: createCollection, isPending: createCollectionPending } =
    trpc.collection.create.useMutation({
      onError: (err) => toast.error(err.message),
    });

  const [previewData, setPreviewData] = useState<CollectionFormData>({
    name: "",
    logo: undefined,
    title: "",
    description: "",
    collectStars: true,
    collectUserCompany: false,
    collectUserMail: false,
    collectUserRole: false,
    collectUserSocialLink: false,
    language: "ENGLISH",
    theme: "LIGHT",
  });

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [collectionUrl, setCollectionUrl] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CollectionFormData>({
    resolver: async (values, context, options) => {
      let logoFile = values.logo;
      if (logoFile instanceof FileList)
        logoFile = logoFile.length > 0 ? logoFile[0] : undefined;
      return zodResolver(collectionSchema)(
        { ...values, logo: logoFile },
        context,
        options
      );
    },
    defaultValues: {
      name: "",
      logo: undefined,
      title: "",
      description: "",
      collectStars: true,
      collectUserCompany: false,
      collectUserMail: false,
      collectUserRole: false,
      collectUserSocialLink: false,
      language: "ENGLISH",
      theme: "LIGHT",
    },
  });

  const name = watch("name");
  const logo = watch("logo");
  const title = watch("title");
  const description = watch("description");
  const collectStars = watch("collectStars");
  const collectUserCompany = watch("collectUserCompany");
  const collectUserMail = watch("collectUserMail");
  const collectUserRole = watch("collectUserRole");
  const collectUserSocialLink = watch("collectUserSocialLink");
  const language = watch("language");
  const theme = watch("theme");

  const switchOptions = [
    {
      label: "Collect Star Ratings",
      description: "Ask customers to rate their experience",
      name: "collectStars",
      checked: collectStars,
    },
    {
      label: "Collect Company",
      description: "Include company name field",
      name: "collectUserCompany",
      checked: collectUserCompany,
    },
    {
      label: "Collect Email",
      description: "Include email address field",
      name: "collectUserMail",
      checked: collectUserMail,
    },
    {
      label: "Collect User Role",
      description: "Include job title or role field",
      name: "collectUserRole",
      checked: collectUserRole,
    },
    {
      label: "Collect Social Link",
      description: "Include social media link field",
      name: "collectUserSocialLink",
      checked: collectUserSocialLink,
    },
  ];

  type SwitchOptions =
    | "collectStars"
    | "collectUserMail"
    | "collectUserRole"
    | "collectUserCompany"
    | "collectUserSocialLink";

  useEffect(() => {
    let logoFile = logo;
    if (logoFile instanceof FileList)
      logoFile = logoFile.length > 0 ? logoFile[0] : undefined;
    setPreviewData({
      name,
      logo: logoFile,
      title,
      description,
      collectStars,
      collectUserCompany,
      collectUserMail,
      collectUserRole,
      collectUserSocialLink,
      language,
      theme,
    });
  }, [
    name,
    logo,
    title,
    description,
    collectStars,
    collectUserCompany,
    collectUserMail,
    collectUserRole,
    collectUserSocialLink,
    language,
    theme,
  ]);

  const onSubmit = async (data: CollectionFormData) => {
    if (!data.logo) return;
    const logoKey = `collection/${uuidv4()}`;

    uploadLogo(
      { key: logoKey, type: data.logo?.type },
      {
        onSuccess: async (res) => {
          await fetch(res.data, { method: "put", body: data.logo });
          createCollection(
            {
              name: data.name,
              title: data.title,
              collectStars: data.collectStars,
              collectUserCompany: data.collectUserCompany,
              collectUserMail: data.collectUserMail,
              collectUserRole: data.collectUserRole,
              collectUserSocialLink: data.collectUserSocialLink,
              description: data.description,
              language: data.language,
              theme: data.theme,
              logo: logoKey,
            },
            {
              onSuccess: (res) => {
                const url = `${process.env.NEXT_PUBLIC_HOST}/t/${res.data.id}`;
                reset();
                onClose();
                setSuccessModalOpen(true);
                setCollectionUrl(url);
              },
            }
          );
        },
      }
    );
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-h-[90vh] md:max-h-[35rem] p-0 overflow-y-auto">
          <div className="flex flex-col md:flex-row w-full">
            <PreviewCard formData={previewData} />

            <div className="bg-white p-6 w-full md:w-1/2">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-semibold text-gray-900">
                  Create New Collection
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-2">
                  Customize your testimonial collection form and settings.
                </p>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 text-gray-900"
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Collection Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g., Product Launch Testimonials"
                    className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Logo */}
                <div className="space-y-2">
                  <Label htmlFor="logo" className="text-sm font-medium">
                    Logo
                  </Label>
                  <Input
                    type="file"
                    id="logo"
                    accept="image/*"
                    className="rounded-md border-gray-300"
                    {...register("logo")}
                  />
                  {errors.logo && (
                    <p className="text-xs text-red-500">
                      {errors.logo.message}
                    </p>
                  )}
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">
                    Form Title *
                  </Label>
                  <Input
                    id="title"
                    placeholder="Share Your Experience"
                    className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="text-xs text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="We'd love to hear about your experience..."
                    className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    {...register("description")}
                  />
                </div>

                {/* Switches Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Data Collection Options
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {switchOptions.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors w-full sm:w-[calc(50%-0.5rem)]"
                      >
                        <div className="space-y-1">
                          <Label
                            htmlFor={item.name}
                            className="text-sm font-medium cursor-pointer"
                          >
                            {item.label}
                          </Label>
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        <Switch
                          id={item.name}
                          checked={item.checked}
                          onCheckedChange={(val) =>
                            setValue(item.name as SwitchOptions, val)
                          }
                          className="data-[state=checked]:bg-blue-400 transform transition-transform hover:scale-110 focus:ring-2 focus:ring-blue-500"
                          aria-label={`Toggle ${item.label}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {/* Language */}
                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-sm font-medium">
                      Language
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("language", value as TESTIMONIAL_LANGUAGE)
                      }
                      defaultValue={language}
                    >
                      <SelectTrigger className="rounded-md hover:cursor-pointer border-gray-300 focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        {LanguageOptions.map(({ value, label }) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Theme */}
                  <div className="space-y-2">
                    <Label htmlFor="theme" className="text-sm font-medium">
                      Theme
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("theme", value as TESTIMONIAL_THEME)
                      }
                      defaultValue={theme}
                    >
                      <SelectTrigger className="rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                      <SelectContent>
                        {["LIGHT", "DARK", "SYSTEM"].map((theme) => (
                          <SelectItem key={theme} value={theme}>
                            {theme.charAt(0) + theme.slice(1).toLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-3 pt-6 border-t">
                  <Button
                    type="submit"
                    disabled={uploadLogoPending || createCollectionPending}
                    className="rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {uploadLogoPending || createCollectionPending
                      ? "Creating..."
                      : "Create Collection"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <CopyUrlModal
        successModalOpen={successModalOpen}
        setSuccessModalOpen={setSuccessModalOpen}
        collectionUrl={collectionUrl}
      />
    </>
  );
}
