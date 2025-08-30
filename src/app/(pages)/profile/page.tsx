import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, CreditCard, Shield } from "lucide-react";
import ProfileSection from "@/components/user-ui/ProfileSection";
import BillingSection from "@/components/user-ui/BillingSection";
import SecuritySection from "@/components/user-ui/SecuritySection";

export default function ProfilePage() {
  const profileTabs = [
    {
      value: "profile",
      label: "Profile",
      icon: <User className="w-4 h-4" />,
      content: <ProfileSection />,
    },
    {
      value: "billing",
      label: "Billing",
      icon: <CreditCard className="w-4 h-4" />,
      content: <BillingSection />,
    },
    {
      value: "security",
      label: "Security",
      icon: <Shield className="w-4 h-4" />,
      content: <SecuritySection />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Tabs Section */}
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200 rounded-lg h-full p-1">
            {profileTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {tab.icon}
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {profileTabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="space-y-6"
            >
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
