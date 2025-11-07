import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { User, Building, Shield } from "lucide-react";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(searchParams.get("role") || "");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !role) {
      toast.error("Please fill in all fields");
      return;
    }

    // Mock authentication - in real app, this would call an API
    toast.success("Login successful!");
    
    // Redirect to appropriate dashboard based on role
    switch (role) {
      case "student":
        navigate("/dashboard/student");
        break;
      case "industry":
        navigate("/dashboard/industry");
        break;
      case "admin":
        navigate("/dashboard/admin");
        break;
      default:
        navigate("/");
    }
  };

  const getRoleIcon = (roleType: string) => {
    switch (roleType) {
      case "student":
        return <User className="h-5 w-5" />;
      case "industry":
        return <Building className="h-5 w-5" />;
      case "admin":
        return <Shield className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <Card className="w-full max-w-md shadow-professional">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login to Platform</CardTitle>
          <p className="text-muted-foreground">Access your dashboard</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="role">Select Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Student
                    </div>
                  </SelectItem>
                  <SelectItem value="industry">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Industry
                    </div>
                  </SelectItem>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Admin
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              <div className="flex items-center gap-2">
                {getRoleIcon(role)}
                Login as {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
              </div>
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button variant="link" onClick={() => navigate("/")} className="text-muted-foreground">
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;