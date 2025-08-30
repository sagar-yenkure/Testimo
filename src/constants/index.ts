import { Framework, PLAN } from "@/types";
import {
  Code,
  Crown,
  Inbox,
  Mail,
  Puzzle,
  Star,
  Users,
  Zap,
} from "lucide-react";
import {
  SiGoogle,
  SiYoutube,
  SiLinkedin,
  SiX,
  SiShopify,
  SiHubspot,
  SiStripe,
  SiNotion,
  SiFigma,
  SiVercel,
  SiLinear,
  SiZoom,
  SiAsana,
  SiTrello,
  SiGithub,
  SiFacebook,
  SiApple,
} from "react-icons/si";
import { TESTIMONIAL_LANGUAGE } from "../../prisma/generated/prisma";

export const AWS_KEYS = {
  region: process.env.AMAZON_REGION,
  accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
  secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
  bucket: process.env.AMAZON_BUCKET_NAME,
};

export const JWT_EXPIRY = 15 * 24 * 60 * 60; // 15 days

export const PUT_OBJECT_EXP = 20; // 20 seconds;

export const integrations = [
  {
    name: "Google Reviews",
    icon: SiGoogle,
    color: "from-blue-500 to-green-500",
  },
  { name: "YouTube", icon: SiYoutube, color: "from-red-500 to-red-600" },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    color: "from-blue-600 to-blue-700",
  },
  { name: "Twitter/X", icon: SiX, color: "from-gray-800 to-black" },
  {
    name: "Shopify",
    icon: SiShopify,
    color: "from-green-500 to-green-600",
  },
  {
    name: "HubSpot",
    icon: SiHubspot,
    color: "from-orange-500 to-red-500",
  },
];

export const LanguageOptions: {
  label: string;
  value: TESTIMONIAL_LANGUAGE;
  code: string;
}[] = [
    { label: "English", value: TESTIMONIAL_LANGUAGE.ENGLISH, code: "en" },
    { label: "German", value: TESTIMONIAL_LANGUAGE.GERMAN, code: "de" },
    { label: "Chinese", value: TESTIMONIAL_LANGUAGE.CHINESE, code: "zh" },
    { label: "Japanese", value: TESTIMONIAL_LANGUAGE.JAPANESE, code: "ja" },
    { label: "Korean", value: TESTIMONIAL_LANGUAGE.KOREAN, code: "ko" },
    { label: "Arabic", value: TESTIMONIAL_LANGUAGE.ARABIC, code: "ar" },
  ];

export const LanguageCodes: Record<
  TESTIMONIAL_LANGUAGE,
  "en" | "de" | "zh" | "ja" | "ko" | "ar"
> = {
  [TESTIMONIAL_LANGUAGE.ENGLISH]: "en",
  [TESTIMONIAL_LANGUAGE.GERMAN]: "de",
  [TESTIMONIAL_LANGUAGE.CHINESE]: "zh",
  [TESTIMONIAL_LANGUAGE.JAPANESE]: "ja",
  [TESTIMONIAL_LANGUAGE.KOREAN]: "ko",
  [TESTIMONIAL_LANGUAGE.ARABIC]: "ar",
};

export const companies = [
  { name: "Shopify", Icon: SiShopify },
  { name: "Stripe", Icon: SiStripe },
  { name: "Notion", Icon: SiNotion },
  { name: "Figma", Icon: SiFigma },
  { name: "Vercel", Icon: SiVercel },
  { name: "Linear", Icon: SiLinear },
  { name: "Zoom", Icon: SiZoom },
  { name: "Asana", Icon: SiAsana },
  { name: "Trello", Icon: SiTrello },
  { name: "GitHub", Icon: SiGithub },
];

export const testimonials = [
  {
    type: "video",
    quote:
      "Testimo completely transformed how we collect and display customer feedback. The setup was incredibly easy and our conversion rates have increased by 35%.",
    author: "Sarah Martinez",
    title: "Marketing Director",
    company: "TechFlow Solutions",
    avatar: "SM",
    rating: 5,
    featured: true,
  },
  {
    type: "text",
    quote:
      "The analytics dashboard gives us insights we never had before. We can see exactly which testimonials are driving the most conversions.",
    author: "David Kim",
    title: "Growth Manager",
    company: "StartupHub",
    avatar: "DK",
    rating: 5,
    featured: false,
  },
  {
    type: "text",
    quote:
      "Customer support is outstanding. They helped us customize the widget to match our brand perfectly. Highly recommended!",
    author: "Emily Chen",
    title: "Founder",
    company: "DesignCo",
    avatar: "EC",
    rating: 5,
    featured: false,
  },
  {
    type: "video",
    quote:
      "We've tried other testimonial tools before, but Testimo is by far the best. The auto-import feature saves us hours every week.",
    author: "Michael Rodriguez",
    title: "Product Manager",
    company: "InnovateX",
    avatar: "MR",
    rating: 5,
    featured: true,
  },
  {
    type: "text",
    quote:
      "The moderation system is perfect. We can review and approve testimonials quickly, and the spam protection works great.",
    author: "Jessica Taylor",
    title: "Content Manager",
    company: "ContentPro",
    avatar: "JT",
    rating: 5,
    featured: false,
  },
  {
    type: "text",
    quote:
      "Integration with our existing tools was seamless. The webhook support allows us to automate our entire workflow.",
    author: "Alex Johnson",
    title: "Tech Lead",
    company: "DevTools",
    avatar: "AJ",
    rating: 5,
    featured: false,
  },
];

export const stats = [
  { value: "4.9/5", label: "Average Rating", color: "text-blue-600" },
  { value: "10K+", label: "Happy Users", color: "text-purple-600" },
  { value: "500K+", label: "Testimonials", color: "text-green-600" },
  { value: "40%", label: "Avg. Conversion Lift", color: "text-orange-600" },
];

export const optionalFields = [
  {
    key: "collectUserMail",
    label: "Email",
    placeholder: "john.doe@example.com",
    translate: "form.email",
  },
  {
    key: "collectUserRole",
    label: "Designation",
    placeholder: "Product Manager",
    translate: "form.designation",
  },
  {
    key: "collectUserCompany",
    label: "Company",
    placeholder: "TechCorp Inc.",
    translate: "form.company",
  },
  {
    key: "collectUserSocialLink",
    label: "Social Link",
    placeholder: "https://linkedin.com/in/johndoe",
    translate: "form.socialLink",
  },
] as const;

export const sidebarItems = [
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "embed", label: "Embed Widgets", icon: Code },
  { id: "integrations", label: "Integrations", icon: Puzzle },
  // { id: "pages", label: "Pages", icon: Globe },
  // { id: "analytics", label: "Analytics", icon: BarChart3 },
  // { id: "settings", label: "Space Settings", icon: Settings },
];

export const profileFields = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  {
    id: "email",
    label: "Email Address",
    icon: Mail,
  },
];

export const providers = [
  { name: "Apple", icon: SiApple },
  { name: "Google", icon: SiGoogle },
  { name: "Facebook", icon: SiFacebook },
];

export const plans = [
  {
    name: "Basic",
    type: PLAN.BASIC,
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Users,
    popular: false,
    features: {
      textTestimonials: 15,
      videoTestimonials: 5,
      collections: 1,
      watermark: true,
      customBranding: false,
      analytics: false,
    },
  },
  {
    name: "Pro",
    type: PLAN.PRO,
    description: "For growing businesses",
    monthlyPrice: 19,
    yearlyPrice: 289,
    icon: Star,
    popular: true,
    features: {
      textTestimonials: "Unlimited",
      videoTestimonials: "5 in total ",
      collections: 5,
      watermark: false,
      customBranding: true,
      analytics: true,
    },
  },
  {
    name: "Premium",
    type: PLAN.PREMIUM,
    description: "For established companies",
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: Crown,
    popular: false,
    features: {
      textTestimonials: "Unlimited",
      videoTestimonials: "15 in total",
      collections: 15,
      watermark: false,
      customBranding: true,
      analytics: true,
    },
  },
  {
    name: "Ultimate",
    type: PLAN.ULTIMATE,
    description: "For enterprise scale",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: Zap,
    popular: false,
    features: {
      textTestimonials: "Unlimited",
      videoTestimonials: "Unlimited",
      collections: "Unlimited",
      watermark: false,
      customBranding: true,
      analytics: true,
      integrations: ["All Platforms", "Custom Integrations"],
    },
  },
];

export const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all paid plans come with a 14-day free trial. No credit card required.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Your data is safely stored for 30 days after cancellation, giving you time to export or reactivate.",
  },
  {
    question: "Do you offer enterprise plans?",
    answer:
      "Yes, we offer custom enterprise solutions. Contact our sales team for more information.",
  },
];

export const frameworks: Framework[] = [
  {
    id: "react",
    name: "React",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    status: "ready",
  },
  {
    id: "nextjs",
    name: "Next.js",
    color: "bg-gray-800",
    textColor: "text-gray-800",
    status: "ready",
  },
  {
    id: "remix",
    name: "Remix",
    color: "bg-blue-600",
    textColor: "text-blue-700",
    status: "ready",
  },

  {
    id: "angular",
    name: "Angular",
    color: "bg-red-600",
    textColor: "text-red-600",
    status: "coming-soon",
  },
  {
    id: "vue",
    name: "Vue.js",
    color: "bg-green-500",
    textColor: "text-green-600",
    status: "coming-soon",
  },
];

export const themes = [
  { id: "light", name: "Light", description: "Clean and minimal" },
  { id: "dark", name: "Dark", description: "Modern dark theme" },
  // { id: "minimal", name: "Minimal", description: "Ultra-clean design" },
  // { id: "brand", name: "Brand", description: "Your brand colors" },
];

export const ConfigurationOptions = [
  {
    prop: "collectionId",
    type: "string",
    default: "required",
    description: "Your unique testimonials collection identifier",
  },
  {
    prop: "title",
    type: "string",
    default: '"Testimonials"',
    description: "Section heading text",
  },
  {
    prop: "theme",
    type: "'light' | 'dark' | 'minimal' | 'brand'",
    default: "'light'",
    description: "Visual theme variant",
  },
  {
    prop: "variant",
    type: "'grid' | 'carousel' | 'masonry'",
    default: "'masonry'",
    description: "Variant style for testimonials display",
  },
  {
    prop: "maxItems",
    type: "number",
    default: "6",
    description: "Maximum number of testimonials to show",
  },
];
