import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building, 
  FileText, 
  TrendingUp, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Students", value: "2,847", icon: Users, color: "text-blue-600", change: "+12%" },
    { title: "Organizations", value: "156", icon: Building, color: "text-green-600", change: "+5%" },
    { title: "Active Internships", value: "89", icon: FileText, color: "text-purple-600", change: "+18%" },
    { title: "Success Rate", value: "87%", icon: TrendingUp, color: "text-orange-600", change: "+3%" },
  ];

  const applicationData = [
    { month: "Jan", applications: 450, placements: 320 },
    { month: "Feb", applications: 520, placements: 380 },
    { month: "Mar", applications: 680, placements: 490 },
    { month: "Apr", applications: 750, placements: 580 },
    { month: "May", applications: 890, placements: 720 },
  ];

  const skillsData = [
    { name: "Software Development", value: 35, color: "#3B82F6" },
    { name: "Data Science", value: 25, color: "#10B981" },
    { name: "Design", value: 20, color: "#8B5CF6" },
    { name: "Marketing", value: 12, color: "#F59E0B" },
    { name: "Others", value: 8, color: "#6B7280" },
  ];

  const recentUsers = [
    { name: "Priya Sharma", type: "Student", joinedDate: "2024-01-15", status: "Active" },
    { name: "Tech Corp India", type: "Organization", joinedDate: "2024-01-14", status: "Verified" },
    { name: "Rahul Kumar", type: "Student", joinedDate: "2024-01-13", status: "Active" },
    { name: "Innovation Labs", type: "Organization", joinedDate: "2024-01-12", status: "Pending" },
  ];

  const systemAlerts = [
    { type: "warning", message: "4 organizations pending verification", time: "2 hours ago" },
    { type: "info", message: "System maintenance scheduled for tonight", time: "1 day ago" },
    { type: "success", message: "Monthly report generated successfully", time: "2 days ago" },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Activity className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-primary-foreground p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Admin Dashboard</h2>
        <p className="text-primary-foreground/90">Monitor and manage the entire internship ecosystem</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 font-medium">{stat.change} this month</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications vs Placements Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Applications vs Placements</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applications" fill="#3B82F6" name="Applications" />
                <Bar dataKey="placements" fill="#10B981" name="Placements" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Skills Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Skills Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent User Registrations */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Registrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm text-muted-foreground">{user.type} • {user.joinedDate}</p>
                  </div>
                  <Badge 
                    variant={user.status === "Active" ? "default" : 
                           user.status === "Verified" ? "default" : "secondary"}
                  >
                    {user.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <p className="text-sm">{alert.message}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Management Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="p-6 h-auto flex-col">
              <Users className="h-8 w-8 mb-2" />
              <span>Manage Users</span>
              <span className="text-xs text-muted-foreground">Students & Organizations</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col">
              <FileText className="h-8 w-8 mb-2" />
              <span>Generate Reports</span>
              <span className="text-xs text-muted-foreground">Monthly & Custom</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col">
              <Activity className="h-8 w-8 mb-2" />
              <span>System Health</span>
              <span className="text-xs text-muted-foreground">Monitor Performance</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;