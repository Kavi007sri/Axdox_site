import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/HomeServices";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Zap, Shield, Clock, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "< 2 second response times",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Never miss a customer",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "40% satisfaction boost",
    },
  ];

  const testimonials = [
    {
      quote: "Axdox transformed our customer service. Response times dropped by 80% and satisfaction scores are at an all-time high.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc",
    },
    {
      quote: "The AI voice agent handles thousands of calls flawlessly. It's like having an entire team working 24/7.",
      author: "Michael Chen",
      role: "Operations Director, RetailPro",
    },
    {
      quote: "Implementation was seamless and the ROI was immediate. Best investment we've made this year.",
      author: "Emily Rodriguez",
      role: "CMO, GrowthLabs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HomeServices />
      
      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">What Our </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="p-12 md:p-16 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm text-center space-y-6 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of companies using AI to deliver exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 transition-all text-lg px-8 py-6 shadow-glow"
                >
                  Get Started Today
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 backdrop-blur-sm"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
