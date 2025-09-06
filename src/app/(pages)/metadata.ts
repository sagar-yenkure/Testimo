import type { Metadata } from "next";

const metadata: Metadata = {
    title: {
        default: "Testimo – Collect, Manage & Showcase Testimonials",
        template: "%s | – Collect, Manage & Showcase Testimonials", // page titles become "PageName | Testimo"
    },
    description:
        "Testimo helps you collect, organize, and showcase testimonials easily. Boost your brand’s credibility with a beautiful and modern testimonial manager.",
    keywords: [
        "testimonials",
        "SaaS",
        "feedback",
        "reviews",
        "customer stories",
        "social proof",
    ],
    authors: [{ name: "Sagar Yenkure" }],
    openGraph: {
        title: "Testimo – Collect, Manage & Showcase Testimonials",
        description:
            "Collect and showcase testimonials effortlessly with Testimo. Boost your brand with authentic customer stories.",
        url: "https://testimo-love.vercel.app",
        siteName: "Testimo",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Testimo – Showcase Testimonials",
            },
        ],
        locale: "en_US",
        type: "website",
        countryName: "India",
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_HOST,
    },
    twitter: {
        card: "summary_large_image",
        title: "Testimo – Collect, Manage & Showcase Testimonials",
        description:
            "Collect and showcase testimonials effortlessly with Testimo. Boost your brand with authentic customer stories.",
        images: ["/opengraph-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default metadata;