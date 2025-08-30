// app/[slug]/page.tsx
import React from "react";
import TestimonialForm from "@/components/dashboard-ui/TestimonialForm";
import { trpc } from "@/trpc/server";
import type { Metadata } from "next";
import Link from "next/link";

const getCollection = async (slug: string) =>
  await trpc.collection.collectionForSubmission({ id: slug });

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollection(slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
      description: "The requested testimonial collection does not exist.",
    };
  }

  return {
    title: `${collection.title} - Share Your Testimonial`,
    description: collection.description || "Submit your testimonial easily.",
    openGraph: {
      title: collection.title,
      description: collection.description || "Submit your testimonial.",
      images: collection.logo
        ? [{ url: collection.logo, alt: collection.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: collection.title,
      description: collection.description || "Submit your testimonial.",
      images: collection.logo ? [collection.logo] : [],
    },
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const collection = await getCollection(slug);

  if (!collection) return <div>Collection not found.</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <TestimonialForm collection={collection} />

      {/* Branding footer */}
      <footer className="mt-6 text-sm text-gray-500">
        Powered by{" "}
        <Link
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          Testimonial Hub
        </Link>
      </footer>
    </div>
  );
};

export default Page;
