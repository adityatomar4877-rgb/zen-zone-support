import { Flower2, Star, TrendingUp, Award } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { PlantProgress } from "@/components/PlantProgress";

const plants = [
  {
    name: "Serenity Lotus",
    category: "mindfulness",
    categoryColor: "hsl(var(--garden-purple))",
    progress: 65,
    level: 3,
    emoji: "🌸",
  },
  {
    name: "Energy Oak",
    category: "exercise",
    categoryColor: "hsl(var(--garden-green))",
    progress: 30,
    level: 2,
    emoji: "🌳",
  },
  {
    name: "Connection Rose",
    category: "social",
    categoryColor: "hsl(var(--garden-pink))",
    progress: 80,
    level: 1,
    emoji: "🌹",
  },
  {
    name: "Healing Herb",
    category: "therapy",
    categoryColor: "hsl(var(--garden-blue))",
    progress: 20,
    level: 4,
    emoji: "🌿",
  },
  {
    name: "Rest Lavender",
    category: "sleep",
    categoryColor: "hsl(var(--garden-purple))",
    progress: 90,
    level: 2,
    emoji: "🌾",
  },
];

const MoodGarden = () => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Flower2 className="w-8 h-8 text-garden-pink" />
          <h1 className="text-3xl font-bold text-foreground">Your Mood Garden</h1>
        </div>
        <p className="text-muted-foreground">
          Nurture your mental wellness and watch your garden bloom with every positive action
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Weekly Points"
          value="245"
          icon={<Star className="w-8 h-8" />}
          variant="success"
        />
        <StatCard
          title="Current Streak"
          value="7"
          subtitle="days in a row"
          icon={<TrendingUp className="w-8 h-8" />}
          variant="warning"
        />
        <StatCard
          title="Garden Level"
          value="2"
          icon={<Award className="w-8 h-8" />}
          variant="info"
        />
      </div>

      <div className="bg-card border-2 border-dashed border-border rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {plants.map((plant) => (
            <PlantProgress key={plant.name} {...plant} />
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">💧</div>
          <h2 className="text-xl font-semibold text-foreground">Water Your Plants</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Complete daily activities to help your plants grow and unlock new features
        </p>
        <button className="px-6 py-3 bg-garden-green text-white rounded-lg font-medium hover:bg-garden-green/90 transition-colors">
          Check Daily Tasks
        </button>
      </div>
    </div>
  );
};

export default MoodGarden;
