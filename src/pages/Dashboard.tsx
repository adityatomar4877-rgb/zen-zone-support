import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Heart, 
  BookOpen,
  Activity,
  Clock,
  Star,
  Award,
  Flower2,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  UserCheck,
  Settings,
  Smile
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRole = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        
        if (profile) {
          setUserRole(profile.role);
        }
      }
      setLoading(false);
    };

    getUserRole();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-garden-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (userRole === 'student') {
    return <StudentDashboard navigate={navigate} />;
  } else if (userRole === 'counsellor') {
    return <CounsellorDashboard navigate={navigate} />;
  } else if (userRole === 'administrator') {
    return <AdministratorDashboard navigate={navigate} />;
  }

  return null;
};

// Student Dashboard Component
const StudentDashboard = ({ navigate }: { navigate: any }) => {
  const [completedActivities, setCompletedActivities] = useState<number[]>([]);

  const todayActivities = [
    { id: 1, name: '10-Minute Meditation', category: 'mindfulness', points: 10, duration: '10 min', emoji: '🧘' },
    { id: 2, name: 'Gratitude Journal', category: 'mindfulness', points: 15, duration: '5 min', emoji: '📝' },
    { id: 3, name: 'Quick Walk', category: 'exercise', points: 20, duration: '15 min', emoji: '🚶' },
    { id: 4, name: 'Deep Breathing', category: 'therapy', points: 10, duration: '5 min', emoji: '🌬️' },
    { id: 5, name: 'Connect with Friend', category: 'social', points: 25, duration: '20 min', emoji: '💬' },
  ];

  const stats = {
    weeklyPoints: 245,
    currentStreak: 7,
    completedToday: completedActivities.length,
    gardenLevel: 2,
    upcomingSessions: 2,
  };

  const handleCompleteActivity = (activityId: number) => {
    if (!completedActivities.includes(activityId)) {
      setCompletedActivities([...completedActivities, activityId]);
    }
  };

  const recentMoods = [
    { date: 'Today', mood: 'Happy', emoji: '😊', intensity: 80 },
    { date: 'Yesterday', mood: 'Calm', emoji: '😌', intensity: 70 },
    { date: '2 days ago', mood: 'Motivated', emoji: '💪', intensity: 90 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-garden-blue to-garden-purple rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
        <p className="text-white/90">Keep up your amazing progress on your wellness journey</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-success to-success/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Weekly Points</p>
                <p className="text-3xl font-bold">{stats.weeklyPoints}</p>
              </div>
              <Star className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning to-warning/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Current Streak</p>
                <p className="text-3xl font-bold">{stats.currentStreak}</p>
                <p className="text-xs opacity-90">days</p>
              </div>
              <TrendingUp className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info to-info/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Upcoming Sessions</p>
                <p className="text-3xl font-bold">{stats.upcomingSessions}</p>
              </div>
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-garden-pink to-garden-pink/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Garden Level</p>
                <p className="text-3xl font-bold">{stats.gardenLevel}</p>
              </div>
              <Flower2 className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Activities */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Today's Wellness Activities
              </CardTitle>
              <CardDescription>Complete activities to earn points and grow your mood garden</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayActivities.map((activity) => (
                <div
                  key={activity.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                    completedActivities.includes(activity.id)
                      ? 'bg-success/10 border-success'
                      : 'bg-card border-border hover:border-garden-blue'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activity.emoji}</span>
                    <div>
                      <p className="font-semibold text-foreground">{activity.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{activity.duration}</span>
                        <span>•</span>
                        <span className="text-garden-green font-medium">+{activity.points} points</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleCompleteActivity(activity.id)}
                    disabled={completedActivities.includes(activity.id)}
                    className={completedActivities.includes(activity.id) ? 'bg-success' : ''}
                  >
                    {completedActivities.includes(activity.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Done
                      </>
                    ) : (
                      'Start'
                    )}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Mood Tracking */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smile className="w-5 h-5 text-garden-purple" />
                Your Mood Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentMoods.map((entry, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{entry.emoji}</span>
                      <div>
                        <p className="font-medium text-foreground">{entry.mood}</p>
                        <p className="text-sm text-muted-foreground">{entry.date}</p>
                      </div>
                    </div>
                    <Progress value={entry.intensity} className="w-24" />
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">Log Today's Mood</Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/ai-support')}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat with AI Support
              </Button>
              <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/book-session')}>
                <Calendar className="w-4 h-4 mr-2" />
                Book a Session
              </Button>
              <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/study-buddy')}>
                <Users className="w-4 h-4 mr-2" />
                Find Study Buddy
              </Button>
              <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/resources')}>
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Resources
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-info/10 border border-info/20">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-info mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Counseling Session</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                    <p className="text-xs text-muted-foreground">Dr. Priya Sharma</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Study Group</p>
                    <p className="text-xs text-muted-foreground">Friday, 4:00 PM</p>
                    <p className="text-xs text-muted-foreground">Calculus Problem Solving</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wellness Score */}
          <Card className="bg-gradient-to-br from-garden-purple to-garden-blue text-white border-0">
            <CardHeader>
              <CardTitle className="text-lg">Wellness Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">82</div>
                <p className="text-sm opacity-90 mb-4">Great progress this week! 🎉</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="opacity-90">Physical</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Mental</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Social</span>
                    <span className="font-semibold">84%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Counsellor Dashboard Component
const CounsellorDashboard = ({ navigate }: { navigate: any }) => {
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
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Counsellor Dashboard</h1>
        <p className="text-muted-foreground">Manage your sessions and support your clients</p>
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
        <div className="lg:col-span-2">
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
                      <div className="text-center">
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
          <Card className="mt-6">
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
              <Button className="w-full justify-start" variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Administrator Dashboard Component
const AdministratorDashboard = ({ navigate }: { navigate: any }) => {
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
    { department: 'Arts', happy: 50, stressed: 20, anxious: 10, calm: 15, motivated: 5 },
  ];

  const systemAlerts = [
    { id: 1, type: 'warning', message: 'High stress levels reported in Engineering department', time: '1 hour ago' },
    { id: 2, type: 'info', message: '3 new counsellor applications pending review', time: '3 hours ago' },
    { id: 3, type: 'success', message: 'System backup completed successfully', time: '6 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Administrator Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage the platform</p>
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
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">😊 Happy</span>
                        <span className="font-medium">{dept.happy}%</span>
                      </div>
                      <Progress value={dept.happy} className="h-2" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">😰 Stressed</span>
                        <span className="font-medium">{dept.stressed}%</span>
                      </div>
                      <Progress value={dept.stressed} className="h-2" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">😟 Anxious</span>
                        <span className="font-medium">{dept.anxious}%</span>
                      </div>
                      <Progress value={dept.anxious} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>System Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="usage">
                <TabsList className="w-full">
                  <TabsTrigger value="usage" className="flex-1">Usage</TabsTrigger>
                  <TabsTrigger value="engagement" className="flex-1">Engagement</TabsTrigger>
                  <TabsTrigger value="support" className="flex-1">Support</TabsTrigger>
                </TabsList>
                <TabsContent value="usage" className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Session Bookings</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <Progress value={65} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Resource Access</span>
                        <span className="font-medium">82%</span>
                      </div>
                      <Progress value={82} />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="engagement" className="mt-4">
                  <p className="text-sm text-muted-foreground">Daily active users: 847</p>
                  <p className="text-sm text-muted-foreground">Average session time: 12 minutes</p>
                </TabsContent>
                <TabsContent value="support" className="mt-4">
                  <p className="text-sm text-muted-foreground">Support tickets: 23 open</p>
                  <p className="text-sm text-muted-foreground">Average resolution time: 4.2 hours</p>
                </TabsContent>
              </Tabs>
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
                <div key={alert.id} className={`p-3 rounded-lg ${
                  alert.type === 'warning' ? 'bg-warning/10 border border-warning/20' :
                  alert.type === 'info' ? 'bg-info/10 border border-info/20' :
                  'bg-success/10 border border-success/20'
                }`}>
                  <div className="flex items-start gap-2">
                    <AlertCircle className={`w-4 h-4 mt-0.5 ${
                      alert.type === 'warning' ? 'text-warning' :
                      alert.type === 'info' ? 'text-info' :
                      'text-success'
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

export default Dashboard;
                        
