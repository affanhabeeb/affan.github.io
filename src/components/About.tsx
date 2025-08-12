import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Shield, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building customer relationships and ensuring security at one of the world's largest technology companies.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid gap-8 md:gap-12">
            {/* Current Role */}
            <Card className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Voice Support Specialist</h3>
                        <p className="text-primary font-medium">Amazon Fresh</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        <Clock className="w-3 h-3 mr-1" />
                        Current Role
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Providing exceptional voice support services for Amazon Fresh customers, handling complex inquiries, 
                      troubleshooting delivery issues, and ensuring customer satisfaction through effective communication 
                      and problem-solving skills.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Customer Service</Badge>
                      <Badge variant="outline">Voice Communication</Badge>
                      <Badge variant="outline">Problem Solving</Badge>
                      <Badge variant="outline">Amazon Fresh Platform</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Role */}
            <Card className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Customer Abuse Prevention Specialist</h3>
                        <p className="text-primary font-medium">Amazon</p>
                      </div>
                      <Badge variant="secondary">
                        <Briefcase className="w-3 h-3 mr-1" />
                        Previous Role
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Specialized in identifying, investigating, and preventing customer abuse patterns across Amazon's platform. 
                      Developed strategies to protect both customers and the company while maintaining excellent service standards 
                      and ensuring compliance with security protocols.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Risk Assessment</Badge>
                      <Badge variant="outline">Data Analysis</Badge>
                      <Badge variant="outline">Security Protocols</Badge>
                      <Badge variant="outline">Investigation</Badge>
                      <Badge variant="outline">Compliance</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;