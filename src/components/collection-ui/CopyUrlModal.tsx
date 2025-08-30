"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface CopyUrlModalProps {
  successModalOpen: boolean;
  setSuccessModalOpen: (open: boolean) => void;
  collectionUrl: string;
}

export default function CopyUrlModal({
  successModalOpen,
  setSuccessModalOpen,
  collectionUrl,
}: CopyUrlModalProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(collectionUrl);
    setCopied(true);
    toast.success("Link Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
      <DialogContent className="md:w-[30rem] mx-auto bg-white m-2 text-black">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Collection Created 🎉
          </DialogTitle>
          <p className="text-gray-500 text-sm">
            Share this link with your customers.
          </p>
        </DialogHeader>

        <div className="flex items-center gap-2 mt-2 p-2 bg-gray-100 rounded-lg">
          <span className="flex-1 truncate text-sm text-gray-800">
            {collectionUrl}
          </span>
          <Button
            onClick={handleCopy}
            className={`flex hover:cursor-pointer items-center gap-2 transition-all ${
              copied ? "bg-green-600 hover:bg-green-700" : ""
            }`}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
