import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import CounsellorDashboard from "@/components/dashboards/CounsellorDashboard";
import AdministratorDashboard from "@/components/dashboards/AdministratorDashboard";

const Dashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRole = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        console.log("Current user:", user);
        
        if (user) {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();
          
          console.log("Profile data:", profile, "Error:", error);
          
          if (profile && profile.role) {
            setUserRole(profile.role);
            console.log("User role set to:", profile.role);
          } else {
            setUserRole('student');
            console.log("No role found, defaulting to student");
          }
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        setUserRole('student');
      } finally {
        setLoading(false);
      }
    };

    getUserRole();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-garden-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  console.log("Rendering dashboard for role:", userRole);

  if (userRole === 'counsellor') {
    return <CounsellorDashboard />;
  } else if (userRole === 'administrator') {
    return <AdministratorDashboard />;
  }
  
  return <StudentDashboard />;
};

export default Dashboard;
