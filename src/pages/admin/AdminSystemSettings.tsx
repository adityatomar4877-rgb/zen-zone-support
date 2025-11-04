import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

const AdminSystemSettings = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-green to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <Settings className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">System Settings</h1>
            <p className="text-white/90">Configure platform settings</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Platform Configuration</CardTitle>
          <CardDescription>Manage system-wide settings</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">System settings coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSystemSettings;