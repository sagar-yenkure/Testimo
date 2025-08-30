import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const BillingSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <Badge className="bg-green-100 text-green-800">Pro Plan</Badge>

        <CardDescription>Manage your billing settings</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 text-sm">Billing content goes here...</p>
      </CardContent>
    </Card>
  );
};

export default BillingSection;
