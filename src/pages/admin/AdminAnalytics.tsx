import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const AdminAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-green to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Platform Analytics</h1>
            <p className="text-white/90">View platform usage and statistics</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
          <CardDescription>Comprehensive platform analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
