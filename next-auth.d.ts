// /types/next-auth.d.ts or /lib/next-auth.d.ts
import "next-auth";
import { DefaultSession } from "next-auth";

// Augmenting the NextAuth types
declare module "next-auth" {
  interface User {
    id: string;
    plan: string;
    name: string;
    image?: string;
    email: string;
    authProviderId?: string;
  }

  interface Session {
    user: {
      id: string;
      plan: string;
      name: string;
      image?: string;
      email: string;
      authProviderId?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    plan: string;
    name: string;
    image?: string;
    email: string;
    authProviderId?: string;
  }
}
