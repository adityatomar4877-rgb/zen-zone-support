interface PlantProgressProps {
  name: string;
  category: string;
  progress: number;
  level: number;
  emoji: string;
  categoryColor: string;
}

export const PlantProgress = ({
  name,
  category,
  progress,
  level,
  emoji,
  categoryColor,
}: PlantProgressProps) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="3"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            fill="none"
            stroke="hsl(var(--garden-green))"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl">{emoji}</div>
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
          {level}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-foreground font-semibold mb-1">{name}</h3>
        <p className={`text-sm mb-1`} style={{ color: categoryColor }}>
          {category}
        </p>
        <p className="text-xs text-muted-foreground">{progress}% to next level</p>
      </div>
    </div>
  );
};
