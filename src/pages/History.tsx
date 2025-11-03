import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MessageSquare, Flower2, TrendingUp, Download, Filter } from "lucide-react";

const History = () => {
  const [filter, setFilter] = useState('all');

  const activityHistory = [
    {
      id: 1,
      type: 'mood',
      title: 'Logged Mood',
      description: 'Feeling Happy 😊',
      date: '2024-11-04',
      time: '09:30 AM',
      points: 10,
      category: 'Mood Garden'
    },
    {
      id: 2,
      type: 'activity',
      title: 'Completed Morning Meditation',
      description: '10-minute mindfulness session',
      date: '2024-11-04',
      time: '08:00 AM',
      points: 25,
      category: 'Wellness Activities'
    },
    {
      id: 3,
      type: 'session',
      title: 'Counseling Session',
      description: 'Session with Dr. Priya Sharma',
      date: '2024-11-03',
      time: '02:00 PM',
      points: 0,
      category: 'Professional Support'
    },
    {
      id: 4,
      type: 'chat',
      title: 'AI Support Chat',
      description: 'Discussed exam anxiety',
      date: '2024-11-03',
      time: '10:15 AM',
      points: 5,
      category: 'AI Support'
    },
    {
      id: 5,
      type: 'activity',
      title: 'Completed Quick Walk',
      description: '15-minute outdoor walk',
      date: '2024-11-02',
      time: '05:30 PM',
      points: 30,
      category: 'Wellness Activities'
    },
    {
      id: 6,
      type: 'mood',
      title: 'Logged Mood',
      description: 'Feeling Stressed 😰',
      date: '2024-11-02',
      time: '03:00 PM',
      points: 10,
      category: 'Mood Garden'
    },
    {
      id: 7,
      type: 'activity',
      title: 'Completed Breathing Exercise',
      description: '4-7-8 breathing technique',
      date: '2024-11-02',
      time: '02:45 PM',
      points: 20,
      category: 'Wellness Activities'
    },
    {
      id: 8,
      type: 'study',
      title: 'Study Buddy Session',
      description: 'Calculus study group',
      date: '2024-11-01',
      time: '04:00 PM',
      points: 15,
      category: 'Study Buddy'
    },
    {
      id: 9,
      type: 'resource',
      title: 'Accessed Resource',
      description: 'Managing Academic Stress article',
      date: '2024-11-01',
      time: '11:20 AM',
      points: 5,
      category: 'Resources'
    },
    {
      id: 10,
      type: 'activity',
      title: 'Completed Evening Wind Down',
      description: '20-minute relaxation routine',
      date: '2024-10-31',
      time: '09:00 PM',
      points: 30,
      category: 'Wellness Activities'
    }
  ];

  const moodTrends = [
    { week: 'Week 1', happy: 60, stressed: 20, anxious: 10, calm: 10 },
    { week: 'Week 2', happy: 70, stressed: 15, anxious: 5, calm: 10 },
    { week: 'Week 3', happy: 55, stressed: 30, anxious: 10, calm: 5 },
    { week: 'Week 4', happy: 75, stressed: 10, anxious: 5, calm: 10 },
  ];

  const sessionHistory = [
    {
      id: 1,
      counsellor: 'Dr. Priya Sharma',
      date: '2024-11-03',
      time: '02:00 PM',
      duration: '50 min',
      type: 'Anxiety Support',
      status: 'completed',
      notes: 'Discussed coping strategies for exam stress'
    },
    {
      id: 2,
      counsellor: 'Dr. Raj Patel',
      date: '2024-10-27',
      time: '03:30 PM',
      duration: '45 min',
      type: 'Initial Consultation',
      status: 'completed',
      notes: 'First session - identified stress triggers'
    },
    {
      id: 3,
      counsellor: 'Dr. Anjali Desai',
      date: '2024-10-20',
      time: '11:00 AM',
      duration: '50 min',
      type: 'Academic Stress',
      status: 'completed',
      notes: 'Time management techniques discussed'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'mood': return '😊';
      case 'activity': return '✨';
      case 'session': return '👨‍⚕️';
      case 'chat': return '💬';
      case 'study': return '📚';
      case 'resource': return '📖';
      default: return '•';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'mood': return 'bg-garden-purple/10 border-garden-purple/30';
      case 'activity': return 'bg-garden-green/10 border-garden-green/30';
      case 'session': return 'bg-garden-blue/10 border-garden-blue/30';
      case 'chat': return 'bg-garden-pink/10 border-garden-pink/30';
      case 'study': return 'bg-warning/10 border-warning/30';
      case 'resource': return 'bg-info/10 border-info/30';
      default: return 'bg-muted border-border';
    }
  };

  const filteredHistory = filter === 'all' 
    ? activityHistory 
    : activityHistory.filter(item => item.type === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Activity History</h1>
          <p className="text-muted-foreground">Track your wellness journey and progress</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      <Tabs defaultValue="activities" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="activities">All Activities</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="trends">Mood Trends</TabsTrigger>
        </TabsList>

        {/* Activities Tab */}
        <TabsContent value="activities" className="mt-6 space-y-6">
          {/* Filter Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={filter === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button
                  size="sm"
                  variant={filter === 'mood' ? 'default' : 'outline'}
                  onClick={() => setFilter('mood')}
                >
                  😊 Moods
                </Button>
                <Button
                  size="sm"
                  variant={filter === 'activity' ? 'default' : 'outline'}
                  onClick={() => setFilter('activity')}
                >
                  ✨ Activities
                </Button>
                <Button
                  size="sm"
                  variant={filter === 'session' ? 'default' : 'outline'}
                  onClick={() => setFilter('session')}
                >
                  👨‍⚕️ Sessions
                </Button>
                <Button
                  size="sm"
                  variant={filter === 'chat' ? 'default' : 'outline'}
                  onClick={() => setFilter('chat')}
                >
                  💬 AI Chats
                </Button>
                <Button
                  size="sm"
                  variant={filter === 'study' ? 'default' : 'outline'}
                  onClick={() => setFilter('study')}
                >
                  📚 Study
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <Card key={item.id} className={`border-l-4 ${getActivityColor(item.type)}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 flex-1">
                      <div className="text-3xl">{getActivityIcon(item.type)}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {item.points > 0 && (
                      <Badge className="bg-success/20 text-success border-success">
                        +{item.points} XP
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Sessions Tab */}
        <TabsContent value="sessions" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Session History</CardTitle>
              <CardDescription>Your professional counseling sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessionHistory.map((session) => (
                <Card key={session.id} className="border-l-4 border-l-garden-blue">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{session.counsellor}</h3>
                        <Badge variant="outline" className="mt-1">{session.type}</Badge>
                      </div>
                      <Badge className="bg-success text-white capitalize">
                        {session.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="text-sm font-medium">{session.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Time</p>
                        <p className="text-sm font-medium">{session.time}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium">{session.duration}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Session Notes</p>
                      <p className="text-sm">{session.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Mood Trends (Last 4 Weeks)
              </CardTitle>
              <CardDescription>Track how your mood has changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {moodTrends.map((week, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{week.week}</h3>
                      <Badge variant="outline">100% tracked</Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>😊 Happy</span>
                          <span className="font-medium">{week.happy}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-garden-green rounded-full transition-all"
                            style={{ width: `${week.happy}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>😰 Stressed</span>
                          <span className="font-medium">{week.stressed}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-warning rounded-full transition-all"
                            style={{ width: `${week.stressed}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>😟 Anxious</span>
                          <span className="font-medium">{week.anxious}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-destructive rounded-full transition-all"
                            style={{ width: `${week.anxious}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>😌 Calm</span>
                          <span className="font-medium">{week.calm}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-garden-blue rounded-full transition-all"
                            style={{ width: `${week.calm}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-sm font-medium text-success">✓ Positive Trend</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your happiness increased by 15% this month
                  </p>
                </div>
                <div className="p-3 bg-info/10 rounded-lg border border-info/20">
                  <p className="text-sm font-medium text-info">📊 Most Common</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    You felt happy 65% of the time
                  </p>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <p className="text-sm font-medium text-warning">⚠️ Watch Out</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Stress peaked during Week 3
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm">
                  🧘 Try more mindfulness activities
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  📅 Schedule regular check-ins
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  💪 Continue your current routine
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default History;
