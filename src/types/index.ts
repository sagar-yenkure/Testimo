export type SidebarType = "inbox" | "embed" | "integrations";

export type TESTIMONIAL_STATUS =
  | "NORMAL"
  | "HIGHLIGHTED"
  | "LIKED"
  | "SPAM"
  | "ARCHIVED";

export type THEME_TYPE = "LIGHT" | "DARK";
export type FRAMEWORK_TYPE = "REACTJS" | "NEXTJS" | "REMIX";

export enum PLAN {
  BASIC = "BASIC",
  PRO = "PRO",
  PREMIUM = "PREMIUM",
  ULTIMATE = "ULTIMATE",
}

export enum TESTIMONIALS_TYPE {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
}

export type TESTIMONIAL_LANGUAGE =
  | "ENGLISH"
  | "GERMAN"
  | "CHINESE"
  | "JAPANESE"
  | "KOREAN"
  | "ARABIC";

export type TESTIMONIAL_THEME = "LIGHT" | "DARK";

export type ProviderType = "Google" | "Apple" | "Facebook";

export type InboxTabType =
  | "all"
  | "video"
  | "text"
  | "liked"
  | "archived"
  | "spam"
  | "isHighlighted";
export interface Framework {
  id: string;
  name: string;
  color: string;
  textColor: string;
  status: "ready" | "coming-soon";
}
