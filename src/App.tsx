import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Dashboards
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import IndustryDashboard from "./pages/dashboards/IndustryDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          
          {/* Student Dashboard Routes */}
          <Route 
            path="/dashboard/student" 
            element={
              <DashboardLayout role="student">
                <StudentDashboard />
              </DashboardLayout>
            } 
          />
          
          {/* Industry Dashboard Routes */}
          <Route 
            path="/dashboard/industry" 
            element={
              <DashboardLayout role="industry">
                <IndustryDashboard />
              </DashboardLayout>
            } 
          />
          
          {/* Admin Dashboard Routes */}
          <Route 
            path="/dashboard/admin" 
            element={
              <DashboardLayout role="admin">
                <AdminDashboard />
              </DashboardLayout>
            } 
          />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
