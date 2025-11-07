import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  FileText, 
  BrainCircuit, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Upload,
  ExternalLink
} from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    { title: "Profile Completion", value: "85%", icon: User, color: "text-blue-600" },
    { title: "CV Uploaded", value: "Yes", icon: FileText, color: "text-green-600" },
    { title: "Recommendations", value: "12", icon: BrainCircuit, color: "text-purple-600" },
    { title: "Applications", value: "5", icon: Clock, color: "text-orange-600" },
  ];

  const recommendations = [
    {
      title: "Software Development Intern",
      company: "Tech Corp India",
      match: 95,
      skills: ["React", "JavaScript", "Node.js"],
      duration: "3 months",
      stipend: "₹15,000",
      status: "Shortlisted"
    },
    {
      title: "Data Analyst Intern",
      company: "Analytics Solutions",
      match: 88,
      skills: ["Python", "SQL", "Tableau"],
      duration: "4 months",
      stipend: "₹12,000",
      status: "Under Consideration"
    },
    {
      title: "UI/UX Design Intern",
      company: "Design Studio",
      match: 82,
      skills: ["Figma", "Sketch", "Prototyping"],
      duration: "3 months",
      stipend: "₹10,000",
      status: "Shortlisted"
    },
  ];

  const applications = [
    { company: "Tech Corp India", position: "Software Development Intern", status: "Under Review", date: "2024-01-15" },
    { company: "Data Systems", position: "Backend Developer Intern", status: "Shortlisted", date: "2024-01-12" },
    { company: "StartupXYZ", position: "Full Stack Intern", status: "Refused", date: "2024-01-10" },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "shortlisted":
        return "bg-green-100 text-green-800";
      case "under review":
        return "bg-yellow-100 text-yellow-800";
      case "under consideration":
        return "bg-blue-100 text-blue-800";
      case "refused":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-primary-foreground p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
        <p className="text-primary-foreground/90">Track your internship journey and discover new opportunities</p>
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
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Profile & CV Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Profile Completion</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                Basic Information
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                Skills & Interests
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <AlertCircle className="h-4 w-4" />
                Portfolio (Optional)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              CV Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-medium">John_Resume_2024.pdf</p>
                  <p className="text-sm text-muted-foreground">Uploaded on Jan 10, 2024</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full" variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Update CV
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{rec.title}</h4>
                    <p className="text-muted-foreground">{rec.company}</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {rec.match}% Match
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {rec.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    <span>{rec.duration} • {rec.stipend}/month</span>
                  </div>
                  <Badge className={getStatusColor(rec.status)}>
                    {rec.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Application Status */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Application Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{app.position}</h4>
                  <p className="text-sm text-muted-foreground">{app.company}</p>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(app.status)}>
                    {app.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;