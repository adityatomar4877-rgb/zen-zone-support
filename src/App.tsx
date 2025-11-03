import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
