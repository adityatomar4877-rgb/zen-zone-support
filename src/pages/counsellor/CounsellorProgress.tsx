import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const CounsellorProgress = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-purple to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Client Progress</h1>
            <p className="text-white/90">Track and monitor client progress</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Progress Tracking</CardTitle>
          <CardDescription>View client progress and outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Progress tracking coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounsellorProgress;