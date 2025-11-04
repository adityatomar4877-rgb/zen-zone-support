import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const CounsellorSchedule = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-purple to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <Calendar className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">My Schedule</h1>
            <p className="text-white/90">Manage your availability and schedule</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Schedule Management</CardTitle>
          <CardDescription>Set your availability and manage time slots</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Schedule management coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounsellorSchedule;