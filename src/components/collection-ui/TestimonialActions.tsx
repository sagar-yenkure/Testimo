"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Heart,
  Star as StarIcon,
  Archive,
  Trash2,
  AlertTriangle,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TESTIMONIAL_STATUS } from "@/types";
import { trpc } from "@/trpc/client";
import toast from "react-hot-toast";

interface TestimonialActionsProps {
  testimonialId: string;
}

const TestimonialActions: React.FC<TestimonialActionsProps> = ({
  testimonialId,
}) => {
  const { mutate } = trpc.testimonial.update.useMutation({
    onSuccess: (res) => toast.success(res.message),
    onError: (err) => toast.error(err.message),
  });
  const utils = trpc.useUtils();

  const handleDelete = () => {};

  const handleStatusUpdate = (action: TESTIMONIAL_STATUS) => {
    mutate(
      { id: testimonialId, status: action },
      { onSuccess: () => utils.testimonial.getTestimonial.invalidate() }
    );
  };

  return (
    <div className="flex items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full"
            title="More Options"
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem onClick={() => handleStatusUpdate("LIKED")}>
            <Heart className="w-4 h-4 mr-2 text-red-400" /> LIKE
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleStatusUpdate("HIGHLIGHTED")}>
            <StarIcon className="w-4 h-4 mr-2 text-yellow-400" /> Highlight
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleStatusUpdate("ARCHIVED")}>
            <Archive className="w-4 h-4 mr-2 text-gray-600" /> Archive
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleStatusUpdate("SPAM")}>
            <AlertTriangle className="w-4 h-4 mr-2 text-red-500" /> Spam
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDelete}>
            <Trash2 className="w-4 h-4 mr-2 text-red-600" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TestimonialActions;
