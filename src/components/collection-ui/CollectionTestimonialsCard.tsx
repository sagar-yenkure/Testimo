"use client";
import React, { useState, memo } from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  Heart,
  Star,
  Building2,
  Play,
  Sparkles,
  Archive,
  AlertTriangle,
} from "lucide-react";
import TestimonialActions from "./TestimonialActions";
import VideoModal from "./VideoModal";
import { TESTIMONIAL_STATUS } from "@/types";
import Image from "next/image";
import { Testimonial } from "../../../prisma/generated/prisma";

// Define TypeScript interface for props
interface TestimonialCardProps {
  testimonial: Testimonial;
}

// Status configuration with accessible colors
const statusConfig: Record<
  TESTIMONIAL_STATUS,
  { color: string; bgColor: string; icon: React.ReactNode }
> = {
  NORMAL: {
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    icon: null,
  },
  HIGHLIGHTED: {
    color: "text-amber-800",
    bgColor: "bg-amber-50",
    icon: <Sparkles className="w-4 h-4 mr-1" />,
  },
  LIKED: {
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    icon: <Heart className="w-4 h-4 mr-1 fill-current" />,
  },
  SPAM: {
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    icon: <AlertTriangle className="w-4 h-4 mr-1" />,
  },
  ARCHIVED: {
    color: "text-gray-500",
    bgColor: "bg-gray-50",
    icon: <Archive className="w-4 h-4 mr-1" />,
  },
};

// Avatar component for reusability
const Avatar = ({ src, alt }: { src?: string; alt: string }) => (
  <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-gray-200 shadow-sm">
    {src ? (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="48px"
        className="object-cover"
        priority={false}
      />
    ) : (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
        {alt.charAt(0).toUpperCase()}
      </div>
    )}
  </div>
);

// Rating component for reusability
const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
          }`}
        aria-hidden="true"
      />
    ))}
    <span className="sr-only">{rating} out of 5 stars</span>
  </div>
);

const CollectionTestimonialsCard = ({ testimonial }: TestimonialCardProps) => {
  const status = testimonial.status as TESTIMONIAL_STATUS;
  const config = statusConfig[status];
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <Card className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 to-white/50 pointer-events-none" />

        <div className="relative p-6">
          {/* Header Section */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              {/* Avatar */}
              <Avatar
                src={testimonial.giverImage ?? ""}
                alt={testimonial.giverName || "Anonymous"}
              />

              {/* Name + Status */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3
                    className="font-semibold text-lg text-gray-900 truncate"
                    title={testimonial.giverName}
                  >
                    {testimonial.giverName || "Anonymous"}
                  </h3>
                  {status !== "NORMAL" && (
                    <Badge
                      className={`text-xs px-2.5 py-1 rounded-full font-medium shadow-sm ${config.bgColor} ${config.color}`}
                      aria-label={`Status: ${status}`}
                    >
                      {config.icon}
                      {status}
                    </Badge>
                  )}
                </div>

                {/* Rating + Date */}
                <div className="flex items-center gap-3">
                  <RatingStars rating={testimonial.stars ?? 0} />
                  <span className="text-sm text-gray-500">
                    {new Date(testimonial.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {testimonial.type === "VIDEO" && testimonial.videoUrl && (
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="p-2 rounded-full hover:cursor-pointer bg-gray-100 hover:bg-blue-100 transition-colors"
                  aria-label={`Play video testimonial by ${testimonial.giverName}`}
                  title="Play Video"
                >
                  <Play className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </button>
              )}
              <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                <TestimonialActions testimonialId={testimonial.id} />
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm text-gray-700">
            {testimonial.email && (
              <span className="flex items-center">
                <span className="font-medium">Email:</span>&nbsp;
                <span className="truncate">{testimonial.email}</span>
              </span>
            )}
            {testimonial.company && (
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span className="truncate">{testimonial.company}</span>
              </span>
            )}
            {testimonial.role && (
              <span className="flex items-center">
                <span className="font-medium">Role:</span>&nbsp;
                <span className="truncate">{testimonial.role}</span>
              </span>
            )}
            {testimonial.socialLink && (
              <a
                href={testimonial.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
                title={testimonial.socialLink}
              >
                {testimonial.socialLink}
              </a>
            )}
          </div>

          {/* Testimonial Content */}
          <blockquote className="relative">
            <p className="text-gray-700 break-words text-base">
              {testimonial.content}
              {testimonial?.type === "VIDEO" &&
                "click on  play button to play video"}
            </p>
          </blockquote>
        </div>
      </Card>

      {/* Video Modal */}
      {testimonial.type === "VIDEO" && testimonial.videoUrl && (
        <VideoModal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          videoUrl={testimonial.videoUrl}
          testimonialName={testimonial.giverName || "Anonymous"}
        />
      )}
    </>
  );
};

export default memo(CollectionTestimonialsCard);
