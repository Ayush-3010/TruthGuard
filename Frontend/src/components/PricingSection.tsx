import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="plans" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Free vs <span className="gradient-text">Premium</span> Plans
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Compare our plans to find the right level of protection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="glass-morphism border-cyber-glow/20 shadow-card-glass">
            <CardHeader className="text-center pb-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">Free Plan</h3>
                <p className="text-3xl font-bold text-primary mt-2">Always Free</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">10 daily text/URL analyses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Basic educational insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Limited source credibility scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Image/Video analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">Real-time trend analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">API access for developers</span>
                </div>
              </div>
              <Button variant="glass" size="lg" className="w-full mt-6">
                Start Free
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="glass-morphism border-primary/50 shadow-cyber relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-primary text-background px-3 py-1 text-sm font-semibold">
              POPULAR
            </div>
            <CardHeader className="text-center pb-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">Premium Plan</h3>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <p className="text-3xl font-bold text-primary">$9.99</p>
                  <span className="text-foreground/60">/month</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Unlimited daily analyses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Advanced AI insights & explanations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Comprehensive source credibility scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Priority processing & faster results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Historical analysis & trending topics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Premium API with higher rate limits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Email alerts & personalized reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">24/7 priority customer support</span>
                </div>
              </div>
              <Button variant="cyber" size="lg" className="w-full mt-6">
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;