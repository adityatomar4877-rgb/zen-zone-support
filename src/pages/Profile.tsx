import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Profile settings will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
