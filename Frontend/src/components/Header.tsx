import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-cyber-glow/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">TruthGuard</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#analyzer" className="text-foreground/80 hover:text-primary transition-colors">
              Analyzer
            </a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#plans" className="text-foreground/80 hover:text-primary transition-colors">
              Plans
            </a>
            <a href="#ai-capabilities" className="text-foreground/80 hover:text-primary transition-colors">
              AI Capabilities
            </a>
            <a href="#education" className="text-foreground/80 hover:text-primary transition-colors">
              Education
            </a>
            <a href="#resources" className="text-foreground/80 hover:text-primary transition-colors">
              Resources
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="cyber" size="lg">
            <a href="#analyzer">Try Now</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;