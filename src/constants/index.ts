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
  SiFacebook,
  SiApple,
} from "react-icons/si";
import { TESTIMONIAL_LANGUAGE } from "../../prisma/generated/prisma";
import { DATA_TYPE, TESTIMONIALS_TYPE } from "testimo-react";

export const RATE_LIMIT = 10; // max requests limit 
export const WINDOW_SECONDS = 60; // time window in seconds

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

export const mockTestimonials: DATA_TYPE[] = [
  {
    content:
      "This product completely transformed our workflow. The team adoption was seamless and the results were immediate. Highly recommend to any growing business.",
    giverName: "Sarah Chen",
    giverImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 5,
    email: "sarah@techcorp.com",
    role: "Product Manager",
    company: "TechCorp Solutions",
    socialLink: "https://linkedin.com/in/sarahchen",
  },
  {
    content:
      "Amazing experience from start to finish. The customer service team went above and beyond to ensure our success.",
    giverName: "Michael Rodriguez",
    giverImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 5,
    email: "m.rodriguez@innovate.com",
    role: "CEO",
    company: "Innovate Labs",
    socialLink: "https://twitter.com/mrodriguez",
  },
  {
    content:
      "Simple, powerful, and exactly what we needed. The interface is intuitive and the features are robust.",
    giverName: "David Kim",
    giverImage:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 4,
    email: "david.kim@startupx.com",
    role: "Founder",
    company: "StartupX",
  },
  {
    content:
      "Outstanding support and an even better product. Our productivity increased by 40% in just two months.",
    giverName: "Lisa Wang",
    giverImage:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 5,
    email: "lisa@growthco.com",
    role: "Operations Manager",
    company: "GrowthCo",
    socialLink: "https://twitter.com/lisawang",
  },
  {
    content:
      "Game-changing solution for our team. The automation features alone saved us 20 hours per week.",
    giverName: "James Miller",
    giverImage:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 5,
    role: "CTO",
    company: "TechVision",
  },
  {
    content:
      "Exceptional quality and reliability. We've been using this for over a year with zero issues.",
    giverName: "Rachel Green",
    giverImage:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "VIDEO" as TESTIMONIALS_TYPE,
    videoUrl: "https://example.com/testimonial-video-2",
    stars: 5,
    email: "rachel@enterprise.com",
    role: "Head of Product",
    company: "Enterprise Solutions",
    socialLink: "https://linkedin.com/in/rachelgreen",
  },
  {
    content:
      "The best investment we made this year. Streamlined our processes and improved team collaboration significantly.",
    giverName: "Alex Johnson",
    giverImage:
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 5,
    role: "Project Manager",
    company: "Creative Studios",
  },
  {
    content:
      "Incredible value for money. The features keep getting better with each update.",
    giverName: "Maria Garcia",
    giverImage:
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 4,
    email: "maria@designhub.com",
    role: "Design Lead",
    company: "DesignHub",
    socialLink: "https://dribbble.com/mariagarcia",
  },
  {
    content:
      "User-friendly interface with powerful capabilities. Perfect balance of simplicity and functionality.",
    giverName: "Thomas Brown",
    giverImage:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
    type: "TEXT" as TESTIMONIALS_TYPE,
    stars: 5,
    role: "Senior Developer",
    company: "CodeCraft",
  },
];
