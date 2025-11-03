import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  BookOpen,
  Clock,
  Star,
  Flower2,
  CheckCircle2,
  Smile
} from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
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
        <div className="lg:col-span-2 space-y-6">
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
          <Card>
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
              <Button className="w-full mt-4" variant="outline" onClick={() => navigate('/mood-garden')}>
                Log Today's Mood
              </Button>
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

export default StudentDashboard;