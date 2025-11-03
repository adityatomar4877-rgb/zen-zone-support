import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MoodGarden from "./pages/MoodGarden";
import AISupport from "./pages/AISupport";
import BookSession from "./pages/BookSession";
import CampusPulse from "./pages/CampusPulse";
import StudyBuddy from "./pages/StudyBuddy";
import Resources from "./pages/Resources";
import PeerSupport from "./pages/PeerSupport";
import WellnessTools from "./pages/WellnessTools";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-garden-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={!session ? <Login /> : <Navigate to="/" />} />
            
            {session ? (
              <>
                <Route path="*" element={
                  <div className="min-h-screen bg-background">
                    <Header />
                    <Sidebar />
                    <main className="ml-64 mt-16 p-8">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/mood-garden" element={<MoodGarden />} />
                        <Route path="/ai-support" element={<AISupport />} />
                        <Route path="/book-session" element={<BookSession />} />
                        <Route path="/campus-pulse" element={<CampusPulse />} />
                        <Route path="/study-buddy" element={<StudyBuddy />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/peer-support" element={<PeerSupport />} />
                        <Route path="/wellness-tools" element={<WellnessTools />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/history" element={<History />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                  </div>
                } />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
