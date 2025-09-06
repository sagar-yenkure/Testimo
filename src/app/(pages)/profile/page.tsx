import ProfileSection from "@/components/user-ui/ProfileSection";
import BillingSection from "@/components/user-ui/BillingSection";
import SecuritySection from "@/components/user-ui/SecuritySection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return redirect("/signin")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Tabs Section */}
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <ProfileSection />
        <BillingSection />
        <SecuritySection />
      </div>
    </div>
  );
}
