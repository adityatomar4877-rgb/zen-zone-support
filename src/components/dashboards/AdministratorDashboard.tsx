import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, UserCheck, Activity, Clock, BarChart3, Settings } from "lucide-react";

const AdministratorDashboard = () => {
  const systemStats = {
    totalStudents: 1247,
    totalCounsellors: 15,
    activeSessions: 28,
    avgResponseTime: '2.3h',
  };

  const campusMoodData = [
    { department: 'Computer Science', happy: 45, stressed: 25, anxious: 15, calm: 10, motivated: 5 },
    { department: 'Engineering', happy: 35, stressed: 35, anxious: 15, calm: 10, motivated: 5 },
    { department: 'Business', happy: 40, stressed: 30, anxious: 10, calm: 15, motivated: 5 },
    { department: 'Arts & Humanities', happy: 50, stressed: 20, anxious: 10, calm: 15, motivated: 5 },
  ];

  const systemAlerts = [
    { id: 1, type: 'warning', message: 'High stress levels reported in Engineering department', time: '1 hour ago' },
    { id: 2, type: 'info', message: '3 new counsellor applications pending review', time: '3 hours ago' },
    { id: 3, type: 'success', message: 'System backup completed successfully', time: '6 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-green to-garden-blue rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Administrator Dashboard</h1>
        <p className="text-white/90">Monitor and manage the platform</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-garden-blue to-garden-blue/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Students</p>
                <p className="text-3xl font-bold">{systemStats.totalStudents}</p>
              </div>
              <Users className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-garden-purple to-garden-purple/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Counsellors</p>
                <p className="text-3xl font-bold">{systemStats.totalCounsellors}</p>
              </div>
              <UserCheck className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success to-success/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Sessions</p>
                <p className="text-3xl font-bold">{systemStats.activeSessions}</p>
              </div>
              <Activity className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning to-warning/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Avg Response</p>
                <p className="text-3xl font-bold">{systemStats.avgResponseTime}</p>
              </div>
              <Clock className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campus Pulse - Anonymous Data */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Campus Pulse - Anonymous Mood Trends
              </CardTitle>
              <CardDescription>Real-time anonymous mental health insights across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {campusMoodData.map((dept, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold">{dept.department}</p>
                      <Badge variant="outline">{dept.happy + dept.stressed + dept.anxious + dept.calm + dept.motivated} responses</Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">😊 Happy</span>
                          <span className="font-medium">{dept.happy}%</span>
                        </div>
                        <Progress value={dept.happy} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">😰 Stressed</span>
                          <span className="font-medium">{dept.stressed}%</span>
                        </div>
                        <Progress value={dept.stressed} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">😟 Anxious</span>
                          <span className="font-medium">{dept.anxious}%</span>
                        </div>
                        <Progress value={dept.anxious} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">System Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border ${
                  alert.type === 'warning' ? 'bg-warning/10 border-warning/20' :
                  alert.type === 'info' ? 'bg-info/10 border-info/20' :
                  'bg-success/10 border-success/20'
                }`}>
                  <div className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${
                      alert.type === 'warning' ? 'bg-warning' :
                      alert.type === 'info' ? 'bg-info' :
                      'bg-success'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Admin Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <UserCheck className="w-4 h-4 mr-2" />
                Review Counsellors
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Reports
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                System Settings
              </Button>
            </CardContent>
          </Card>

          {/* Platform Health */}
          <Card className="bg-gradient-to-br from-success to-success/80 text-white border-0">
            <CardHeader>
              <CardTitle className="text-lg">Platform Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Server Status</span>
                  <Badge className="bg-white text-success">Operational</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Database</span>
                  <Badge className="bg-white text-success">Healthy</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">API Response</span>
                  <span className="text-sm font-semibold">98ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Uptime</span>
                  <span className="text-sm font-semibold">99.8%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdministratorDashboard;
