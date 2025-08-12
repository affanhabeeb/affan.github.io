import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Headphones, 
  MessageSquare, 
  Search, 
  Users, 
  Shield, 
  Brain,
  Zap,
  Target
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Customer Support",
      icon: <Headphones className="w-6 h-6" />,
      color: "primary",
      skills: ["Voice Communication", "Active Listening", "Conflict Resolution", "Customer Satisfaction", "Multi-channel Support"]
    },
    {
      title: "Technical Skills",
      icon: <Search className="w-6 h-6" />,
      color: "accent",
      skills: ["System Troubleshooting", "Data Analysis", "CRM Systems", "Amazon Tools", "Process Optimization"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      color: "secondary",
      skills: ["Risk Assessment", "Fraud Detection", "Policy Compliance", "Investigation", "Security Protocols"]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      color: "muted",
      skills: ["Problem Solving", "Critical Thinking", "Adaptability", "Team Collaboration", "Time Management"]
    }
  ];

  const coreCompetencies = [
    { name: "Customer Service Excellence", level: 95, icon: <Users className="w-4 h-4" /> },
    { name: "Voice Communication", level: 90, icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Problem Resolution", level: 88, icon: <Target className="w-4 h-4" /> },
    { name: "Process Efficiency", level: 85, icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skillset developed through hands-on experience in customer support and security operations.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center group-hover:bg-${category.color}/20 transition-colors`}>
                      <div className={`text-${category.color}`}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Competencies */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreCompetencies.map((competency, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">
                          {competency.icon}
                        </div>
                        <span className="font-medium">{competency.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{competency.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${competency.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;