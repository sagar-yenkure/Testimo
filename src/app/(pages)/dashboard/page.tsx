import { Metadata } from "next";
import OverviewStats from "@/components/dashboard-ui/OverviewStats";
import CurrentPlan from "@/components/CurrentPlan";
import CollectionsGrid from "@/components/dashboard-ui/CollectionsGrid";
import { trpc } from "@/trpc/server";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_HOST}/dashboard`
  },
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) return redirect("/signin")

  let collections: any = { data: [] };

  try {
    collections = await trpc.collection.Collections();
  } catch (error) {
    console.error("Failed to fetch collections:", error);
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OverviewStats collections={collections.data} />
        <CurrentPlan />
        <CollectionsGrid collections={collections.data} />
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <Suspense fallback={"loading"}>
      <Dashboard />
    </Suspense>
  );
};

export default DashboardPage;
