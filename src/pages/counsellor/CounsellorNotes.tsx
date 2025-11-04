import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

const CounsellorNotes = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-purple to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <ClipboardList className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Session Notes</h1>
            <p className="text-white/90">Document and review session notes</p>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Session Notes</CardTitle>
          <CardDescription>Access and manage your session documentation</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Session notes management coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounsellorNotes;