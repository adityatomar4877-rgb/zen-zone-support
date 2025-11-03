import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Heart } from "lucide-react";

const studySessions = [
  {
    id: 1,
    title: "Calculus Problem Solving Marathon",
    host: "Sarah Chen",
    year: "3rd Year",
    department: "Engineering",
    time: "2:00–4:00 PM",
    location: "Library Study Room A",
    type: "Study Group",
    subject: "Mathematics",
  },
  {
    id: 2,
    title: "Pre-Exam Stress Support Circle",
    host: "Alex Kumar",
    year: "2nd Year",
    department: "Psychology",
    time: "4:30–6:00 PM",
    location: "Wellness Center Room 3",
    type: "Stress Support",
    subject: "Mental Health",
  },
  {
    id: 3,
    title: "Database Design Project Work",
    host: "Riya Patel",
    year: "4th Year",
    department: "Computer Science",
    time: "10:00 AM–12:00 PM",
    location: "Computer Lab B",
    type: "Project Work",
    subject: "Computer Science",
  },
];

const moodMatches = [
  {
    id: 1,
    username: "Stressed Scholar",
    mood: "Anxious",
    lookingFor: "Someone to study with for moral support",
    availability: "Evenings",
    preference: "Quiet study session",
    compatibility: 92,
    interests: ["Psychology", "Mindfulness", "Coffee"],
  },
  {
    id: 2,
    username: "Focused Learner",
    mood: "Motivated",
    lookingFor: "Group study partner for exam prep",
    availability: "Mornings",
    preference: "Active discussion",
    compatibility: 85,
    interests: ["Engineering", "Problem Solving", "Tea"],
  },
];

const StudyBuddy = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredSessions = selectedType === "all" 
    ? studySessions 
    : studySessions.filter(s => s.type === selectedType);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Study Buddy Finder</h1>
        <p className="text-muted-foreground">
          Connect with peers for collaborative learning and emotional support during study sessions.
        </p>
      </div>

      <Tabs defaultValue="sessions" className="w-full">
        <TabsList>
          <TabsTrigger value="sessions">Study Sessions</TabsTrigger>
          <TabsTrigger value="mood-matching">Mood Matching</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions" className="mt-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("all")}
            >
              All Types
            </Button>
            <Button
              variant={selectedType === "Study Group" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("Study Group")}
            >
              Study Group
            </Button>
            <Button
              variant={selectedType === "Exam Prep" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("Exam Prep")}
            >
              Exam Prep
            </Button>
            <Button
              variant={selectedType === "Project Work" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("Project Work")}
            >
              Project Work
            </Button>
            <Button
              variant={selectedType === "Stress Support" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("Stress Support")}
            >
              Stress Support
            </Button>
          </div>

          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{session.title}</CardTitle>
                      <CardDescription>
                        Hosted by {session.host} ({session.year}, {session.department})
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{session.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto">Join Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mood-matching" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Current Mood</CardTitle>
              <CardDescription>Let us help you find the perfect study buddy based on how you're feeling.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["Motivated", "Anxious", "Stressed", "Overwhelmed", "Focused"].map((mood) => (
                  <Badge key={mood} variant="outline" className="cursor-pointer hover:bg-accent">
                    {mood}
                  </Badge>
                ))}
              </div>
              <Button>Find Matches</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {moodMatches.map((match) => (
              <Card key={match.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <User className="w-5 h-5" />
                        {match.username}
                      </CardTitle>
                      <CardDescription>Feeling {match.mood}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 bg-success/20 px-3 py-1 rounded-md">
                      <Heart className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium text-success">{match.compatibility}% Match</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Looking for:</span> {match.lookingFor}
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Availability:</span> {match.availability}
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Prefers:</span> {match.preference}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {match.interests.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full sm:w-auto">Connect</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyBuddy;
