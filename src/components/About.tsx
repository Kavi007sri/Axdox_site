import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Response times under 2 seconds ensure your customers never wait",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "AI specialists and developers dedicated to your success",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 40% increase in customer satisfaction scores",
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Cutting-edge technology trusted by businesses worldwide",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Axdox?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We combine cutting-edge AI technology with human-centered design to deliver exceptional results
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using Axdox to deliver exceptional customer experiences
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-hero text-white font-semibold text-lg hover:opacity-90 transition-all shadow-glow hover:shadow-glow-intense">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
