import { Card, CardContent } from "@/components/ui/card";
import {
  Eye,
  Globe,
  Users,
  Bolt,
  Clock,
  ChartLine,
  Brain,
  ArrowRightLeft,
} from "lucide-react";

const AICapabilitiesSection = () => {
  const capabilities = [
    { icon: Eye, title: "Deepfake Detection" },
    { icon: Globe, title: "Source Credibility Scoring" },
    { icon: Users, title: "Social Proof Analysis" },
    { icon: Bolt, title: "Bias Detection" },
    { icon: Clock, title: "Temporal Verification" },
    { icon: ChartLine, title: "Trend Analysis" },
    { icon: ArrowRightLeft, title: "Fact Cross-Reference" },
    { icon: Brain, title: "Context Understanding" },
  ];

  const stats = [
    { value: "91.2%", label: "Detection Accuracy" },
    { value: "<2s", label: "Analysis Speed" },
    { value: "1M+", label: "Content Analyzed" },
    { value: "50+", label: "Source Databases" },
  ];

  return (
    <section id="ai-capabilities" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced <span className="gradient-text">AI Capabilities</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Powered by cutting-edge machine learning
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="glass-morphism border-cyber-glow/20 shadow-card-glass hover:shadow-cyber transition-all duration-300 text-center"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="p-3 rounded-lg bg-card/50 border border-cyber-glow/20 mb-4">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold gradient-text">
                {stat.value}
              </h3>
              <p className="text-lg text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection;