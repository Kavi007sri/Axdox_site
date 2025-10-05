import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Headphones, Code, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      name: "AI Voice Agent",
      tagline: "24/7 Smart Voice Chat Support",
      description:
        "Voice assistant that lets users ask questions by speaking and get instant answers with natural AI speech.",
      features: [
        "Natural speech understanding",
        "Multi-language support",
        "Custom voice tones",
        "Real-time analytics",
        "CRM integration",
        "Continuous learning",
      ],
    },
    {
      icon: MessageSquare,
      name: "AI Chatbot",
      tagline: "24/7 Smart Chat Support",
      description:
        "AI-powered chatbot that understands context and provides accurate, human-like responses in real time.",
      features: [
        "Contextual conversations",
        "Instant response time",
        "Lead capture & qualification",
        "Website integration",
        "Knowledge base training",
        "Analytics dashboard",
      ],
    },
    {
      icon: Phone,
      name: "AI Customer Service",
      tagline: "AI Phone Call Support",
      description:
        "Call a phone number and talk to an AI that handles customer service like a real human agent.",
      features: [
        "Sentiment analysis",
        "Priority routing",
        "Call summarization",
        "Quality monitoring",
        "Integration with helpdesk",
        "Performance reports",
      ],
    },
    {
      icon: Code,
      name: "Web Development",
      tagline: "Custom Digital Solutions",
      description:
        "Modern websites and web applications built with cutting-edge technology for business growth.",
      features: [
        "Custom design & development",
        "Responsive & mobile-first",
        "SEO optimization",
        "Performance tuning",
        "Ongoing maintenance",
        "Cloud hosting setup",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              AI-powered services designed to elevate your business through automation, intelligence, and innovation.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Side - Info */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent shadow-glow flex-shrink-0">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </h2>
                          <p className="text-accent font-medium">{service.tagline}</p>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <Link to="/contact">
                        <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
                          Get Started
                        </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground mb-6">Key Features</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/item">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Not Sure Which Service Is Right for You?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and we'll help you find the perfect solution for your business needs.
              </p>
              <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 transition-all text-lg px-8 py-6 shadow-glow"
              >
                Book Free Consultation
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
