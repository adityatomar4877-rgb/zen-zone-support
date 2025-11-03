import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PeerSupport = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Peer Support</h1>
        <p className="text-muted-foreground">Connect with peers for emotional support</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Peer support features will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PeerSupport;
