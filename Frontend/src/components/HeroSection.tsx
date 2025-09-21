import { Button } from "@/components/ui/button";
import { Search, CheckCircle, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <div className="glass-morphism p-12 rounded-2xl shadow-card-glass border border-cyber-glow/20 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">TRUTHGUARD</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            AI-Powered Misinformation Detection & Education Platform
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-cyber-glow/30">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm">Multi-Format Analysis</span>
            </div>
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-cyber-glow/30">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm">Real-Time Verification</span>
            </div>
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-cyber-glow/30">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm">Educational Insights</span>
            </div>
          </div>

          <p className="text-lg text-foreground/70 mb-10 max-w-3xl mx-auto">
            AI-powered platform that detects potential misinformation and educates users on identifying credible, trustworthy content across all formats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cyber" size="lg" className="text-lg px-8 py-4">
              Analyze Content Now
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Learn How It Works
            </Button>
          </div>

          {/* Powered By */}
          <div className="mt-10 pt-8 border-t border-cyber-glow/20">
            <p className="text-sm text-foreground/60 mb-2">
              <strong>Powered by:</strong> Google Cloud AI • BERT Neural Networks • Real-Time Processing
            </p>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-10 hidden lg:block">
          <div className="glass-morphism p-4 rounded-lg border border-cyber-glow/30 animate-float">
            <Search className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <div className="absolute top-1/3 left-10 hidden lg:block">
          <div className="glass-morphism p-4 rounded-lg border border-cyber-glow/30 animate-float" style={{ animationDelay: '2s' }}>
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
        </div>

        <div className="absolute bottom-1/4 right-20 hidden lg:block">
          <div className="glass-morphism p-4 rounded-lg border border-cyber-glow/30 animate-float" style={{ animationDelay: '4s' }}>
            <GraduationCap className="w-8 h-8 text-cyber-purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;