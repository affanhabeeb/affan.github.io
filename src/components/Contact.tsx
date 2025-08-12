import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://in.linkedin.com/in/affan-habeeb-705375159",
      description: "Professional network and career updates"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/affanhabeeb/",
      description: "Code repositories and projects"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:affanhabeeb8@gmail.com",
      description: "Direct communication for opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, or simply connecting with fellow professionals.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card cursor-pointer" onClick={() => window.open(link.url, '_blank')}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <div className="text-primary">
                      {link.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{link.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-2 rounded-lg transition-colors" onClick={() => window.open('mailto:affanhabeeb8@gmail.com', '_blank')}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:affanhabeeb8@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">affanhabeeb8@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Available for remote opportunities</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Availability</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <p className="font-medium text-primary mb-2">Open to Opportunities</p>
                      <p className="text-sm text-muted-foreground">
                        Currently exploring new challenges in customer support, voice operations, and security roles.
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <p className="font-medium text-primary mb-2">Preferred Roles</p>
                      <p className="text-sm text-muted-foreground">
                        Voice Support, Customer Success, Security Operations, Quality Assurance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
