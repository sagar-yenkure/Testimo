import OverviewStats from "@/components/dashboard-ui/OverviewStats";
import CurrentPlan from "@/components/CurrentPlan";
import CollectionsGrid from "@/components/dashboard-ui/CollectionsGrid";
import { trpc } from "@/trpc/server";
import { Suspense } from "react";

const Dashboard = async () => {
  const collections = await trpc.collection.Collections();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
