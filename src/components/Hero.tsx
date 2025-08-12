import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/affan-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-card-hover transition-all duration-300 hover:scale-105">
                <img 
                  src={profilePhoto}
                  alt="Affan Habeeb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Affan Habeeb
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Amazon Fresh Voice Support</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experienced voice support specialist at Amazon with a strong background in customer abuse prevention. 
            Passionate about delivering exceptional customer experiences and technical problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group">
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-card-hover hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-card-hover hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-card-hover hover:scale-110 transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;