import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
  User, 
  Building, 
  Shield, 
  Home, 
  FileText, 
  Heart, 
  BarChart3, 
  Users, 
  BrainCircuit,
  Settings,
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DashboardSidebarProps {
  role: "student" | "industry" | "admin";
}

const menuItems = {
  student: [
    { title: "Dashboard", url: "/dashboard/student", icon: Home },
    { title: "Profile", url: "/dashboard/student/profile", icon: User },
    { title: "CV Upload", url: "/dashboard/student/cv", icon: FileText },
    { title: "Recommendations", url: "/dashboard/student/recommendations", icon: BrainCircuit },
    { title: "Applications", url: "/dashboard/student/applications", icon: Heart },
  ],
  industry: [
    { title: "Dashboard", url: "/dashboard/industry", icon: Home },
    { title: "Post Internship", url: "/dashboard/industry/post", icon: FileText },
    { title: "Candidates", url: "/dashboard/industry/candidates", icon: Users },
    { title: "Analytics", url: "/dashboard/industry/analytics", icon: BarChart3 },
  ],
  admin: [
    { title: "Dashboard", url: "/dashboard/admin", icon: Home },
    { title: "User Management", url: "/dashboard/admin/users", icon: Users },
    { title: "Internships", url: "/dashboard/admin/internships", icon: Building },
    { title: "Analytics", url: "/dashboard/admin/analytics", icon: BarChart3 },
    { title: "Reports", url: "/dashboard/admin/reports", icon: FileText },
  ],
};

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const items = menuItems[role] || [];
  const isActive = (path: string) => currentPath === path;

  const getRoleIcon = () => {
    switch (role) {
      case "student":
        return <User className="h-5 w-5" />;
      case "industry":
        return <Building className="h-5 w-5" />;
      case "admin":
        return <Shield className="h-5 w-5" />;
    }
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            {getRoleIcon()}
            {!collapsed && (
              <div>
                <h3 className="font-semibold text-sidebar-foreground capitalize">{role}</h3>
                <p className="text-sm text-muted-foreground">Dashboard</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-sidebar-accent text-sidebar-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => {/* Settings modal */}}
            >
              <Settings className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Settings</span>}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Logout</span>}
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}