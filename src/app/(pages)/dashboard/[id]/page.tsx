
import SidebarClient from "@/components/dashboard-ui/SidebarClient";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface CollectionDetailPageProps {
  params: Promise<{ id: string }>;
}

const CollectionDetailPage = async ({ params }: CollectionDetailPageProps) => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/signin")

  const { id: collectionId } = await params;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex max-w-7xl mx-auto">
        <SidebarClient collectionId={collectionId} />
      </div>
    </div>
  );
};

export default CollectionDetailPage;
