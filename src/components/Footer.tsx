import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Affan Habeeb. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;