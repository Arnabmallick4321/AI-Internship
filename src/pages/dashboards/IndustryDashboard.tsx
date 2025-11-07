import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building, 
  Users, 
  FileText, 
  Star, 
  TrendingUp, 
  Plus,
  Search,
  Filter
} from "lucide-react";

const IndustryDashboard = () => {
  const stats = [
    { title: "Active Internships", value: "8", icon: FileText, color: "text-blue-600" },
    { title: "Total Applications", value: "156", icon: Users, color: "text-green-600" },
    { title: "Shortlisted", value: "24", icon: Star, color: "text-yellow-600" },
    { title: "Completion Rate", value: "92%", icon: TrendingUp, color: "text-purple-600" },
  ];

  const candidates = [
    {
      name: "Priya Sharma",
      score: 95,
      skills: ["React", "Node.js", "MongoDB"],
      education: "B.Tech CSE - IIT Delhi",
      experience: "2 Personal Projects",
      appliedFor: "Software Development Intern"
    },
    {
      name: "Rahul Kumar",
      score: 88,
      skills: ["Python", "Django", "PostgreSQL"],
      education: "B.Tech IT - NIT Warangal",
      experience: "Internship at StartupXYZ",
      appliedFor: "Backend Developer Intern"
    },
    {
      name: "Anjali Gupta",
      score: 92,
      skills: ["Java", "Spring Boot", "MySQL"],
      education: "MCA - Delhi University",
      experience: "Freelance Web Developer",
      appliedFor: "Full Stack Intern"
    },
  ];

  const internships = [
    {
      title: "Software Development Intern",
      applications: 45,
      shortlisted: 8,
      status: "Active",
      postedDate: "2024-01-10"
    },
    {
      title: "Data Analyst Intern",
      applications: 32,
      shortlisted: 6,
      status: "Active",
      postedDate: "2024-01-08"
    },
    {
      title: "UI/UX Design Intern",
      applications: 28,
      shortlisted: 5,
      status: "Closed",
      postedDate: "2024-01-05"
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-yellow-600 bg-yellow-50";
    return "text-orange-600 bg-orange-50";
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-primary-foreground p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">Welcome, Tech Corp India!</h2>
        <p className="text-primary-foreground/90">Manage your internships and discover talented candidates</p>
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

      {/* Post New Internship */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Post New Internship
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Internship Title</Label>
                <Input id="title" placeholder="e.g., Software Development Intern" />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" placeholder="e.g., 3 months" />
              </div>
              <div>
                <Label htmlFor="stipend">Stipend</Label>
                <Input id="stipend" placeholder="e.g., ₹15,000/month" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="skills">Required Skills</Label>
                <Input id="skills" placeholder="e.g., React, Node.js, MongoDB" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the internship role and responsibilities..." rows={3} />
              </div>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Post Internship
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Candidates */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recommended Candidates
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {candidates.map((candidate, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{candidate.name}</h4>
                    <p className="text-muted-foreground">{candidate.education}</p>
                    <p className="text-sm text-muted-foreground">{candidate.experience}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getScoreColor(candidate.score)} font-semibold`}>
                      {candidate.score}% Match
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{candidate.appliedFor}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {candidate.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Profile</Button>
                  <Button size="sm">Shortlist</Button>
                  <Button size="sm" variant="outline">Send Message</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Internships */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Your Internships
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {internships.map((internship, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{internship.title}</h4>
                  <p className="text-sm text-muted-foreground">Posted on {internship.postedDate}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span>{internship.applications} Applications</span>
                    <span>{internship.shortlisted} Shortlisted</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={internship.status === "Active" ? "default" : "secondary"}>
                    {internship.status}
                  </Badge>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm">View Applications</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndustryDashboard;