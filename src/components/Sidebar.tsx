import { Home, MessageCircle, Calendar, Flower2, TrendingUp, Users, BookOpen, Heart, User, Settings, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Sidebar = () => {
  const location = useLocation();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const getUserRole = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        
        if (profile) {
          setUserRole(profile.role);
        }
      }
    };

    getUserRole();
  }, []);

  // Student Navigation (Campus Pulse removed)
  const studentNavigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "AI Support", href: "/ai-support", icon: MessageCircle },
    { name: "Book Session", href: "/book-session", icon: Calendar },
    { name: "Mood Garden", href: "/mood-garden", icon: Flower2 },
    { name: "Study Buddy", href: "/study-buddy", icon: Users },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Peer Support", href: "/peer-support", icon: Users },
    { name: "Wellness Tools", href: "/wellness-tools", icon: Heart },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "History", href: "/history", icon: History },
  ];

  // Counsellor Navigation
  const counsellorNavigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "My Clients", href: "/clients", icon: Users },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Session Notes", href: "/notes", icon: BookOpen },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  // Administrator Navigation (Campus Pulse included)
  const adminNavigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Campus Pulse", href: "/campus-pulse", icon: TrendingUp },
    { name: "User Management", href: "/users", icon: Users },
    { name: "Counsellor Review", href: "/counsellor-review", icon: Users },
    { name: "Analytics", href: "/analytics", icon: TrendingUp },
    { name: "System Settings", href: "/system-settings", icon: Settings },
    { name: "Profile", href: "/profile", icon: User },
  ];

  // Select navigation based on role
  const getNavigation = () => {
    if (userRole === 'counsellor') return counsellorNavigation;
    if (userRole === 'administrator') return adminNavigation;
    return studentNavigation; // default to student
  };

  const navigation = getNavigation();

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

export { Sidebar };
