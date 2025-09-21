import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-morphism border-t border-cyber-glow/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">TruthGuard</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Empowering digital citizens with AI-powered tools to detect
              misinformation and build critical thinking skills for the
              information age.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground mt-4">
                Stay Updated
              </h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none border-r-0"
                />
                <Button variant="cyber" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-foreground/60">
                Get updates on new features and research insights.
              </p>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#analyzer" className="hover:text-primary transition-colors">
                  Content Analyzer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Browser Extension
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Education Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#education" className="hover:text-primary transition-colors">
                  Learning Modules
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center border-t border-cyber-glow/20">
          <p className="text-sm text-foreground/60">
            &copy; 2025 TruthGuard. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50 mt-2">
            Powered by Google Cloud AI • BERT Neural Networks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;