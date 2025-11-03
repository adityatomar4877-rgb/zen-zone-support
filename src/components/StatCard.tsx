import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  variant: "success" | "warning" | "info";
}

export const StatCard = ({ title, value, subtitle, icon, variant }: StatCardProps) => {
  const variantStyles = {
    success: "bg-gradient-to-br from-success to-success/80",
    warning: "bg-gradient-to-br from-warning to-warning/80",
    info: "bg-gradient-to-br from-info to-info/80",
  };

  return (
    <div className={cn("rounded-2xl p-6 text-white relative overflow-hidden", variantStyles[variant])}>
      <div className="relative z-10">
        <p className="text-sm font-medium opacity-90 mb-1">{title}</p>
        <p className="text-4xl font-bold mb-1">{value}</p>
        {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
      </div>
      <div className="absolute top-4 right-4 opacity-80">{icon}</div>
    </div>
  );
};
