import { Home, MessageCircle, Calendar, Flower2, TrendingUp, Users, BookOpen, Heart, User, Settings, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "AI Support", href: "/ai-support", icon: MessageCircle },
  { name: "Book Session", href: "/book-session", icon: Calendar },
  { name: "Mood Garden", href: "/mood-garden", icon: Flower2 },
  { name: "Campus Pulse", href: "/campus-pulse", icon: TrendingUp },
  { name: "Study Buddy", href: "/study-buddy", icon: Users },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Peer Support", href: "/peer-support", icon: Users },
  { name: "Wellness Tools", href: "/wellness-tools", icon: Heart },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "History", href: "/history", icon: History },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-sidebar border-r border-border overflow-y-auto">
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-sidebar-accent text-garden-blue"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
