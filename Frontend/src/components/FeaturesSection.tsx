import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Zap, GraduationCap, Shield, Globe, Brain } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Multi-Format Analysis",
      description: "Analyze text, images, videos and URLs with advanced AI that understands context, sentiment, and manipulation techniques.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Real-Time Verification",
      description: "Instant cross-referencing with trusted sources and fact-checking databases for immediate credibility assessment.",
      color: "text-accent"
    },
    {
      icon: GraduationCap,
      title: "Educational Insights",
      description: "Learn why content might be misleading with detailed explanations and tips for future verification.",
      color: "text-cyber-purple"
    },
    {
      icon: Shield,
      title: "Advanced AI Protection",
      description: "BERT neural networks and machine learning algorithms trained on millions of verified sources.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Global Source Network",
      description: "Access to international fact-checking organizations and trusted news sources worldwide.",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "Context Understanding",
      description: "AI that comprehends nuance, satire, and context to reduce false positives and provide accurate analysis.",
      color: "text-cyber-purple"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">TruthGuard</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Beyond simple fact-checking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-morphism border-cyber-glow/20 shadow-card-glass hover:shadow-cyber transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-card/50 border border-cyber-glow/20 group-hover:border-primary/50 transition-colors">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;