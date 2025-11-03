import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const History = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">History</h1>
        <p className="text-muted-foreground">View your activity history</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your history will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
