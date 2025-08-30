"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  Star,
  Video,
  MessageSquare,
  RotateCcw,
  Building,
  CheckCircle,
} from "lucide-react";
import { TESTIMONIALS_TYPE } from "@/types";
import { trpc } from "@/trpc/client";
import { TestimonialFormData, testimonialSchema } from "@/zod/testimonial.zod";
import toast from "react-hot-toast";
import { Collection } from "../../../prisma/generated/prisma";

export default function TestimonialForm({
  collection,
}: {
  collection: Collection;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testimonialType, setTestimonialType] = useState<TESTIMONIALS_TYPE>(
    TESTIMONIALS_TYPE.TEXT
  );
  const [selectedStars, setSelectedStars] = useState(0);
  console.log(collection);

  // Video recording state
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");

  const { mutate: createPresignedUrl, isPending: createPresignedUrlPending } =
    trpc.collection.presSignedUrl.useMutation();

  const { mutate: addTestimonial, isPending: addTestimonialPending } =
    trpc.testimonial.create.useMutation({
      onSuccess: (res) => {
        toast.success(res.message);
        setIsSubmitted(true);
      },
      onError: (err) => toast.error(err.message),
    });

  // Form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TestimonialFormData>({
    resolver: async (values, context, options) => {
      return zodResolver(
        testimonialSchema.superRefine((data, ctx) => {
          if (collection?.collectStars) {
            if (data.stars === undefined || data.stars < 1) {
              ctx.addIssue({
                code: "custom",
                path: ["stars"],
                message: "Please provide a star rating.",
              });
            }
          }

          if (data.type === TESTIMONIALS_TYPE.VIDEO && !videoBlob) {
            ctx.addIssue({
              code: "custom",
              message: "Video is required for video testimonials",
              path: ["video"],
            });
          }
          if (collection?.collectUserMail && !data.email) {
            ctx.addIssue({
              code: "custom",
              path: ["email"],
              message: "Please provide email address",
            });
          }
          if (collection?.collectUserRole && !data.role) {
            ctx.addIssue({
              code: "custom",
              path: ["role"],
              message: "Please provide designation",
            });
          }
          if (collection?.collectUserCompany && !data.company) {
            ctx.addIssue({
              code: "custom",
              path: ["company"],
              message: "Please provide company name",
            });
          }
          if (collection?.collectUserSocialLink && !data.socialLink) {
            ctx.addIssue({
              code: "custom",
              path: ["socialLink"],
              message: "Please provide social media link",
            });
          }
        })
      )(values, context, options);
    },
    defaultValues: {
      collectionId: collection.id,
      giverImage: undefined,
      video: undefined,
      type: TESTIMONIALS_TYPE.TEXT,
      stars: 0,
      isUserConsent: false,
    },
  });

  /** Video recording helpers */
  const startVideoRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: true,
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;

      const chunks: BlobPart[] = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) =>
        e.data.size > 0 && chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setVideoBlob(blob);
        setVideoPreviewUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      intervalRef.current = setInterval(
        () => setRecordingTime((t) => t + 1),
        1000
      );
    } catch {
      toast.error("Unable to access camera. Please check permissions.");
    }
  };

  const stopVideoRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const resetVideoRecording = () => {
    setVideoBlob(null);
    setVideoPreviewUrl("");
    setRecordingTime(0);
    streamRef.current?.getTracks().forEach((track) => track.stop());
  };

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;

  /** File upload helper */
  const uploadFile = async (key: string, file: File | Blob) =>
    new Promise<void>((resolve) => {
      createPresignedUrl(
        { key, type: file.type },
        {
          onSuccess: async (res) => {
            await fetch(res.data, { method: "PUT", body: file });
            resolve();
          },
        }
      );
    });

  console.log(errors);

  /** Submit handler */
  const onSubmit = async (data: TestimonialFormData) => {
    if (testimonialType === TESTIMONIALS_TYPE.VIDEO && !videoBlob) {
      toast.error("Please record a video testimonial");
      return;
    }

    const imageKey = `collection/${collection.slug}/${uuidv4()}.${data.giverImage?.type?.split("/")[1] || ""
      }`;
    const videoKey = `collection/${collection.slug}/${uuidv4()}.${videoBlob?.type?.split("/")[1] || ""
      }`;

    await uploadFile(imageKey, data?.giverImage as File);
    if (testimonialType === TESTIMONIALS_TYPE.VIDEO && videoBlob)
      await uploadFile(videoKey, videoBlob);

    addTestimonial({
      ...data,
      giverImage: imageKey,
      video: testimonialType === TESTIMONIALS_TYPE.VIDEO ? videoKey : "",
    });
  };

  if (isSubmitted)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <Card className="text-center p-10 rounded-2xl border shadow-md">
          <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p>Your testimonial has been submitted successfully.</p>
        </Card>
      </div>
    );

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 flex justify-center">
      <Card className="border shadow-md rounded-2xl bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 w-full md:w-1/2 p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 dark:bg-gray-800 flex items-center justify-center">
            {collection.logo ? (
              <Image
                src={collection.logo.trim()}
                alt={collection.title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <Building className="w-8 h-8 text-blue-600 dark:text-gray-300" />
            )}
          </div>
          <h1 className="text-2xl font-bold mb-2">{collection.title}</h1>
          {collection.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {collection.description}
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Stars */}
          {collection.collectStars && (
            <div className="flex flex-col items-center justify-center">
              <Label className="text-sm font-medium mb-2 block text-center text-gray-700 dark:text-gray-300">
                How would you rate your experience?
              </Label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => {
                      setSelectedStars(star);
                      setValue("stars", star);
                    }}
                  >
                    <Star
                      className={`w-8 h-8 cursor-pointer transition-colors ${star <= selectedStars ? "bg-yellow-400" : "bg-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>
              {errors.stars && (
                <p className="text-red-500 text-sm">{errors.stars.message}</p>
              )}
            </div>
          )}
          {/* Testimonial Type */}
          <div className="grid grid-cols-2 gap-3">
            {[TESTIMONIALS_TYPE.TEXT, TESTIMONIALS_TYPE.VIDEO].map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => {
                  setTestimonialType(type);
                  setValue("type", type);
                  if (type === TESTIMONIALS_TYPE.TEXT) resetVideoRecording();
                }}
                className={`p-4 border-2 rounded-xl transition-colors ${testimonialType === type
                    ? "border-blue-400 bg-blue-50 dark:border-gray-500 dark:bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 dark:bg-gray-800"
                  }`}
              >
                {type === TESTIMONIALS_TYPE.TEXT ? (
                  <MessageSquare className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-gray-200" />
                ) : (
                  <Video className="w-6 h-6 mx-auto mb-2 text-gray-600 dark:text-gray-300" />
                )}
                <span
                  className={`text-sm font-medium ${type === TESTIMONIALS_TYPE.TEXT
                      ? "text-blue-700 dark:text-gray-200"
                      : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {type === TESTIMONIALS_TYPE.TEXT ? "Text" : "Video"}
                </span>
              </button>
            ))}
          </div>
          {/* Textarea */}
          {testimonialType === TESTIMONIALS_TYPE.TEXT && (
            <div className="flex flex-col gap-2">
              <Label className="text-sm mb-2">Your testimonial *</Label>
              <Textarea
                {...register("content")}
                placeholder="Share your experience..."
                className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
              />
              {errors.content && (
                <p className="text-red-500 text-sm">{errors.content.message}</p>
              )}
            </div>
          )}

          {/* Video */}
          {testimonialType === TESTIMONIALS_TYPE.VIDEO && (
            <div className="text-center">
              {!videoPreviewUrl ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className={`mx-auto my-2 rounded-2xl ${isRecording ? "block" : "hidden"
                      }`}
                  />
                  {errors.video && (
                    <p className="text-red-500 text-sm">
                      {errors.video.message}
                    </p>
                  )}
                  {!isRecording && (
                    <p className="py-4">
                      Click start to record your testimonial video
                    </p>
                  )}
                  <Button
                    type="button"
                    className="py-4"
                    onClick={
                      isRecording ? stopVideoRecording : startVideoRecording
                    }
                  >
                    {isRecording
                      ? `Stop Recording (${formatTime(recordingTime)})`
                      : "Start Recording"}
                  </Button>
                </>
              ) : (
                <>
                  <video
                    src={videoPreviewUrl}
                    controls
                    className="mx-auto mb-4 rounded-2xl"
                  />
                  <Button variant="secondary" onClick={resetVideoRecording}>
                    <RotateCcw className="w-4 h-4 mr-2" /> Record Again
                  </Button>
                </>
              )}
            </div>
          )}

          {/* Name & Profile Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* name */}
            <div>
              <Label>Your Name</Label>
              <Input
                {...register("giverName")}
                placeholder="John Doe"
                className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
              />
              {errors.giverName && (
                <p className="text-red-500 text-sm">
                  {errors.giverName.message}
                </p>
              )}
            </div>
            {/* //profile Image */}
            <div>
              <Label>Profile Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files?.[0] &&
                  setValue("giverImage", e.target.files[0])
                }
                className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
              />
              {errors.giverImage && (
                <p className="text-red-500 text-sm">
                  {errors.giverImage.message}
                </p>
              )}
            </div>
            {/* email */}
            {collection.collectUserMail && (
              <div>
                <Label>Your Email</Label>
                <Input
                  {...register("email")}
                  placeholder="John@email.com"
                  className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            )}
            {/* role */}
            {collection.collectUserMail && (
              <div>
                <Label>Your Designation</Label>
                <Input
                  {...register("role")}
                  placeholder="Project Manager"
                  className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                />
                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}
              </div>
            )}
            {/* company */}
            {collection.collectUserCompany && (
              <div>
                <Label>Your company</Label>
                <Input
                  {...register("company")}
                  placeholder="Startup Inc."
                  className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">
                    {errors.company.message}
                  </p>
                )}
              </div>
            )}
            {/* socialLink */}
            {collection.collectUserSocialLink && (
              <div>
                <Label>Your social Link</Label>
                <Input
                  {...register("socialLink")}
                  placeholder="https://x.com/john_doe"
                  className="mt-1 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                />
                {errors.socialLink && (
                  <p className="text-red-500 text-sm">
                    {errors.socialLink.message}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Consent */}
          <div className="bg-gray-50 border rounded-md p-4">
            <div className="flex gap-3 items-start">
              <Checkbox
                checked={watch("isUserConsent")}
                onCheckedChange={(checked) =>
                  setValue("isUserConsent", Boolean(checked))
                }
              />
              <div>
                <Label>I consent to the use of my testimonial</Label>
                <p className="text-sm text-gray-600">
                  By checking this box, you allow us to publish and share your
                  testimonial.
                </p>
              </div>
            </div>
            {errors.isUserConsent && (
              <p className="text-red-500 text-sm">
                {errors.isUserConsent.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={createPresignedUrlPending || addTestimonialPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {createPresignedUrlPending || addTestimonialPending
              ? "Submitting..."
              : "Submit Testimonial"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
