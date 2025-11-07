import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Yukti
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                AI-powered platform connecting talent with opportunities through intelligent matching
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link to="/login?role=student">
                    Student Login
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary group">
                  <Link to="/login?role=industry">
                    Industry Login
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary group">
                  <Link to="/login?role=admin">
                    Admin Login
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="AI Internship Platform" 
                className="rounded-2xl shadow-professional max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">About the Project</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform addresses the challenge of matching the right candidates with suitable internship opportunities. 
              By analyzing skills, experience, and preferences, we create intelligent recommendations that benefit both students seeking 
              valuable experience and organizations looking for talented interns. The system streamlines the entire process from 
              application to completion, with comprehensive tracking and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
                <p className="text-muted-foreground">Intelligent algorithms analyze profiles to create perfect matches between students and internships.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
                <p className="text-muted-foreground">Personalized internship suggestions based on skills, interests, and career goals.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-professional transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Complete Management</h3>
                <p className="text-muted-foreground">End-to-end tracking from application to completion with comprehensive analytics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Team Section */}
      <section className="bg-gradient-card py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Contact & Team</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Yukti revolutionizes the internship matching process through artificial intelligence, 
              creating perfect connections between students and opportunities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Project Team</h4>
                <p className="text-muted-foreground">Yukti Development Team</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <p className="text-muted-foreground">contact@yukti.dev</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;