import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const stressQuestions = [
  {
    id: 1,
    question: "Over the past week, how often have you been bothered by feeling nervous, anxious, or on edge?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 2,
    question: "How often have you felt that you couldn't stop or control worrying?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 3,
    question: "How often have you had trouble relaxing?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 4,
    question: "How often have you felt so restless that it's hard to sit still?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 5,
    question: "How often have you become easily annoyed or irritable?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 6,
    question: "How often have you felt afraid as if something awful might happen?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 7,
    question: "How much have these problems affected your ability to do schoolwork or get along with others?",
    options: ["Not at all", "Somewhat", "Very much", "Extremely"],
  },
];

const WellnessTools = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<"inhale" | "hold" | "exhale">("inhale");

  const handleStartBreathing = () => {
    setBreathingActive(true);
    // In a real implementation, this would cycle through phases with proper timing
  };

  const handleResetBreathing = () => {
    setBreathingActive(false);
    setBreathingPhase("inhale");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Wellness Tools</h1>
        <p className="text-muted-foreground">
          Take care of your mental health with our assessment tools and wellness exercises.
        </p>
      </div>

      <Tabs defaultValue="assessment" className="w-full">
        <TabsList>
          <TabsTrigger value="assessment">Stress Assessment</TabsTrigger>
          <TabsTrigger value="breathing">Breathing Exercise</TabsTrigger>
        </TabsList>

        <TabsContent value="assessment" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Stress Assessment Questionnaire</CardTitle>
              <CardDescription>
                Answer these questions honestly to get insights into your current stress levels. This assessment is confidential.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {stressQuestions.map((q) => (
                <div key={q.id} className="space-y-3 pb-6 border-b border-border last:border-0">
                  <p className="font-medium text-foreground">
                    {q.id}. {q.question}
                  </p>
                  <RadioGroup
                    value={answers[q.id]}
                    onValueChange={(value) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: value }))
                    }
                  >
                    {q.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`q${q.id}-${idx}`} />
                        <Label htmlFor={`q${q.id}-${idx}`} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
              <Button className="w-full" disabled={Object.keys(answers).length < stressQuestions.length}>
                Submit Assessment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breathing" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>4-7-8 Breathing Technique</CardTitle>
                <CardDescription>
                  This technique helps reduce anxiety and promotes relaxation. Follow the timer and breathe along.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How it works:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Inhale quietly through your nose for 4 seconds</li>
                      <li>Hold your breath for 7 seconds</li>
                      <li>Exhale completely through your mouth for 8 seconds</li>
                      <li>Repeat the cycle 4 times</li>
                    </ol>
                  </div>
                  <div className="p-4 bg-info/10 rounded-lg border border-info/20">
                    <p className="text-sm text-foreground">
                      <strong>Benefits:</strong> Reduces anxiety, helps with sleep, manages stress responses, and promotes mindfulness.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleStartBreathing} className="flex-1" disabled={breathingActive}>
                    Start Exercise
                  </Button>
                  <Button onClick={handleResetBreathing} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center p-8">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                    breathingActive
                      ? breathingPhase === "inhale"
                        ? "scale-100 bg-garden-blue/20"
                        : breathingPhase === "hold"
                        ? "scale-100 bg-garden-purple/20"
                        : "scale-75 bg-success/20"
                      : "scale-90 bg-muted"
                  }`}
                />
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-bold text-foreground mb-2">
                    {breathingActive
                      ? breathingPhase === "inhale"
                        ? "4"
                        : breathingPhase === "hold"
                        ? "7"
                        : "8"
                      : "Ready"}
                  </p>
                  <p className="text-lg text-muted-foreground capitalize">
                    {breathingActive ? breathingPhase : "Click Start"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WellnessTools;
