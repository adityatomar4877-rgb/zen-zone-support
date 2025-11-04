import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const AdminReports = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-green to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <FileText className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-white/90">Generate and view system reports</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>System Reports</CardTitle>
          <CardDescription>Generate custom reports and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Reports system coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReports;