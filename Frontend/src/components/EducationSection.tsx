import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, StarHalf, Projector } from "lucide-react";

const EducationSection = () => {
  const modules = [
    {
      icon: Eye,
      title: "Visual Manipulation Detection",
      learnings: [
        "Deepfake indicators",
        "Reverse image search",
        "Metadata analysis",
      ],
      link: "https://www.cloudskillsboost.google/course_templates/644"
    },
    {
      icon: StarHalf,
      title: "Source Credibility Assessment",
      learnings: [
        "Authority indicators",
        "Bias detection",
        "Publication patterns",
      ],
      link: "https://www.ijimai.org/journal/sites/default/files/2025-01/ip2025_01_002.pdf"
    },
    {
      icon: Projector,
      title: "Context & Trend Analysis",
      learnings: [
        "Information cascades",
        "Echo chambers",
        "Viral mechanics",
      ],
      link: "https://www.researchgate.net/publication/377351751_Echo_Chambers_in_Online_Social_Networks_A_Systematic_Literature_Review"
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We empower you with the knowledge and skills to become a critical
            consumer of information in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="glass-morphism border-cyber-glow/20 shadow-card-glass"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 text-primary">
                  <module.icon className="w-5 h-5" />
                  <span className="font-semibold text-lg">{module.title}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-bold text-foreground">What you'll learn:</h3>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  {module.learnings.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Button variant="cyber" size="lg" className="w-full mt-auto" onClick={() => window.location.href = module.link}>
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;