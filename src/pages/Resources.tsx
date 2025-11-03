import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Headphones, FileText, Dumbbell, Star, Clock } from "lucide-react";

type ResourceType = "all" | "video" | "audio" | "article" | "exercise";

const resources = [
  {
    id: 1,
    type: "video" as const,
    title: "Understanding Anxiety: A Student's Guide",
    duration: "12 min",
    rating: 4.8,
    topic: "Stress",
    description: "Learn about anxiety symptoms and coping strategies designed for students.",
  },
  {
    id: 2,
    type: "audio" as const,
    title: "Guided Meditation for Sleep",
    duration: "15 min",
    rating: 4.9,
    topic: "Sleep",
    description: "Calming meditation to help you fall asleep peacefully.",
  },
  {
    id: 3,
    type: "article" as const,
    title: "Managing Academic Stress",
    duration: "8 min read",
    rating: 4.6,
    topic: "Stress",
    description: "Practical tips for handling academic pressure and deadlines.",
  },
  {
    id: 4,
    type: "exercise" as const,
    title: "Progressive Muscle Relaxation",
    duration: "10 min",
    rating: 4.7,
    topic: "Mindfulness",
    description: "Step-by-step relaxation technique to release physical tension.",
  },
  {
    id: 5,
    type: "video" as const,
    title: "Building Resilience in College",
    duration: "18 min",
    rating: 4.8,
    topic: "Mindfulness",
    description: "Develop mental strength to navigate college challenges.",
  },
  {
    id: 6,
    type: "audio" as const,
    title: "Focus and Concentration Sounds",
    duration: "30 min",
    rating: 4.5,
    topic: "Study",
    description: "Ambient sounds designed to enhance focus during study sessions.",
  },
];

const typeIcons = {
  video: Video,
  audio: Headphones,
  article: FileText,
  exercise: Dumbbell,
};

const Resources = () => {
  const [selectedType, setSelectedType] = useState<ResourceType>("all");

  const filteredResources = selectedType === "all" 
    ? resources 
    : resources.filter(r => r.type === selectedType);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Mental Health Resources</h1>
        <p className="text-muted-foreground">
          Curated mental health resources in your preferred language to support your well-being.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedType === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("all")}
        >
          All Types
        </Button>
        <Button
          variant={selectedType === "video" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("video")}
        >
          <Video className="w-4 h-4 mr-2" />
          Videos
        </Button>
        <Button
          variant={selectedType === "audio" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("audio")}
        >
          <Headphones className="w-4 h-4 mr-2" />
          Audio
        </Button>
        <Button
          variant={selectedType === "article" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("article")}
        >
          <FileText className="w-4 h-4 mr-2" />
          Articles
        </Button>
        <Button
          variant={selectedType === "exercise" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedType("exercise")}
        >
          <Dumbbell className="w-4 h-4 mr-2" />
          Exercises
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const Icon = typeIcons[resource.type];
          return (
            <Card key={resource.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-garden-blue" />
                    <Badge variant="secondary" className="capitalize">
                      {resource.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 bg-warning/20 px-2 py-1 rounded-md">
                    <Star className="w-3 h-3 fill-warning text-warning" />
                    <span className="text-xs font-medium text-warning">{resource.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <Badge variant="outline">{resource.topic}</Badge>
                </div>
                <Button className="w-full">
                  {resource.type === "video" ? "Watch" : resource.type === "audio" ? "Listen" : resource.type === "article" ? "Read" : "Start"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
