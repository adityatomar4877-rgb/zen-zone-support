import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, AlertCircle, Users, UserCheck, BookOpen } from "lucide-react";

const CounsellorDashboard = () => {
  const stats = {
    activeClients: 24,
    todaySessions: 5,
    pendingRequests: 8,
    avgRating: 4.8,
  };

  const todaySessions = [
    { time: '10:00 AM', client: 'Student #1247', type: 'Initial Consultation', status: 'scheduled' },
    { time: '11:30 AM', client: 'Student #2156', type: 'Follow-up', status: 'in-progress' },
    { time: '2:00 PM', client: 'Student #1893', type: 'Anxiety Support', status: 'scheduled' },
    { time: '3:30 PM', client: 'Student #2401', type: 'Academic Stress', status: 'scheduled' },
    { time: '5:00 PM', client: 'Student #1654', type: 'General Counseling', status: 'scheduled' },
  ];

  const recentRequests = [
    { id: 1, student: 'Student #3021', concern: 'Exam Anxiety', urgency: 'high', date: '2 hours ago' },
    { id: 2, student: 'Student #2847', concern: 'Sleep Issues', urgency: 'medium', date: '5 hours ago' },
    { id: 3, student: 'Student #1923', concern: 'Relationship Stress', urgency: 'low', date: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-purple to-garden-blue rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Counsellor Dashboard</h1>
        <p className="text-white/90">Manage your sessions and support your clients</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-info to-info/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Clients</p>
                <p className="text-3xl font-bold">{stats.activeClients}</p>
              </div>
              <Users className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning to-warning/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Today's Sessions</p>
                <p className="text-3xl font-bold">{stats.todaySessions}</p>
              </div>
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-destructive to-destructive/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pending Requests</p>
                <p className="text-3xl font-bold">{stats.pendingRequests}</p>
              </div>
              <AlertCircle className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success to-success/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Average Rating</p>
                <p className="text-3xl font-bold">{stats.avgRating}</p>
              </div>
              <Star className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaySessions.map((session, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[80px]">
                        <p className="text-sm font-semibold">{session.time}</p>
                      </div>
                      <div>
                        <p className="font-semibold">{session.client}</p>
                        <p className="text-sm text-muted-foreground">{session.type}</p>
                      </div>
                    </div>
                    <Badge variant={session.status === 'in-progress' ? 'default' : 'secondary'}>
                      {session.status === 'in-progress' ? 'In Progress' : 'Scheduled'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Client Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Notes</CardTitle>
              <CardDescription>Add notes for your sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full h-32 p-3 rounded-md bg-background border border-border text-foreground resize-none"
                placeholder="Type your session notes here..."
              />
              <Button className="w-full mt-3">Save Notes</Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentRequests.map((request) => (
                <div key={request.id} className={`p-3 rounded-lg border-l-4 ${
                  request.urgency === 'high' ? 'border-destructive bg-destructive/10' :
                  request.urgency === 'medium' ? 'border-warning bg-warning/10' :
                  'border-info bg-info/10'
                }`}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-semibold text-sm">{request.student}</p>
                    <Badge variant="outline" className="text-xs">
                      {request.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{request.concern}</p>
                  <p className="text-xs text-muted-foreground mt-1">{request.date}</p>
                  <Button size="sm" className="w-full mt-2">Review Request</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Manage Schedule
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <UserCheck className="w-4 h-4 mr-2" />
                View All Clients
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Resource Library
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CounsellorDashboard;