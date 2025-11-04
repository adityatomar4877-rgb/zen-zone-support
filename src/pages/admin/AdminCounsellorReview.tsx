import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

const AdminCounsellorReview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-green to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <UserCheck className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Counsellor Review</h1>
            <p className="text-white/90">Review and approve counsellor applications</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Counsellor Applications</CardTitle>
          <CardDescription>Review pending counsellor applications</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Counsellor review system coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCounsellorReview;