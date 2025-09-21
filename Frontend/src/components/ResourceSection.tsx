import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, Users, Award, ArrowRight } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: Book,
      title: "The Misinformation Playbook",
      description: "Step-by-step guide to identifying common misinformation tactics",
    },
    {
      icon: Video,
      title: "Real-World Case Studies",
      description: "Analyze famous misinformation campaigns and their detection",
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with fact-checkers and digital literacy experts",
    },
    {
      icon: Award,
      title: "Digital Literacy Badge",
      description: "Earn credentials in misinformation detection skills",
    },
  ];

  return (
    <section id="resources" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Additional <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive tools and community support to enhance your digital
            literacy journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="glass-morphism border-cyber-glow/20 shadow-card-glass text-center"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="p-3 rounded-lg bg-card/50 border border-cyber-glow/20 mb-4">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-foreground/70">
                  {resource.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cyber" size="lg">
            Explore All Resources
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;