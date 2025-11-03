import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { Users, MessageSquare, TrendingDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😰", label: "Stressed" },
  { emoji: "😟", label: "Anxious" },
  { emoji: "😌", label: "Calm" },
  { emoji: "💪", label: "Motivated" },
];

const departments = [
  {
    name: "Computer Science",
    moods: { Happy: 45, Stressed: 25, Anxious: 15, Calm: 10, Motivated: 5 },
  },
  {
    name: "Business",
    moods: { Happy: 40, Stressed: 30, Anxious: 10, Calm: 15, Motivated: 5 },
  },
  {
    name: "Engineering",
    moods: { Happy: 35, Stressed: 35, Anxious: 15, Calm: 10, Motivated: 5 },
  },
  {
    name: "Arts & Humanities",
    moods: { Happy: 50, Stressed: 20, Anxious: 10, Calm: 15, Motivated: 5 },
  },
];

const CampusPulse = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState("today");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Campus Pulse</h1>
        <p className="text-muted-foreground">
          Anonymous real-time insights into campus mental health trends and community mood.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Active Students"
          value="1,247"
          icon={<Users className="w-6 h-6" />}
          variant="info"
        />
        <StatCard
          title="Today's Responses"
          value="324"
          icon={<MessageSquare className="w-6 h-6" />}
          variant="success"
        />
        <StatCard
          title="Stress Trend"
          value="Decreasing"
          subtitle="Top Mood: 😊 Happy"
          icon={<TrendingDown className="w-6 h-6" />}
          variant="warning"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How are you feeling right now?</CardTitle>
          <CardDescription>Your response is completely anonymous and helps us understand campus wellbeing.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-5 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedMood === mood.label
                    ? "border-garden-blue bg-garden-blue/10"
                    : "border-border bg-card"
                }`}
              >
                <span className="text-4xl">{mood.emoji}</span>
                <span className="text-sm font-medium text-foreground">{mood.label}</span>
              </button>
            ))}
          </div>
          <Button className="w-full" disabled={!selectedMood}>
            Submit Anonymously
          </Button>
        </CardContent>
      </Card>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">Department Mood Overview</h2>
          <Tabs value={timeRange} onValueChange={setTimeRange}>
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept) => (
            <Card key={dept.name}>
              <CardHeader>
                <CardTitle className="text-lg">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(dept.moods).map(([mood, percentage]) => (
                  <div key={mood} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{mood}</span>
                      <span className="font-medium text-foreground">{percentage}%</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusPulse;
