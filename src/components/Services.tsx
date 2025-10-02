import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, Headphones, Code } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Headphones,
      name: "VoiceGuard AI™",
      tagline: "24/7 AI Voice Agent",
      description: "Intelligent voice agents that never sleep. Handle customer inquiries, appointments, and support calls with human-like conversations powered by advanced AI.",
      features: ["Natural conversations", "Multi-language support", "Call analytics", "CRM integration"],
      color: "from-primary to-accent",
    },
    {
      icon: MessageSquare,
      name: "ChatFlow Intelligence",
      tagline: "24/7 AI Chatbot",
      description: "Smart chatbots that understand context and intent. Provide instant responses, guide customers, and boost engagement around the clock.",
      features: ["Contextual understanding", "Instant responses", "Lead generation", "Custom training"],
      color: "from-accent to-secondary",
    },
    {
      icon: Phone,
      name: "TalkSync Pro",
      tagline: "AI Customer Service Voice",
      description: "Revolutionary AI phone system that handles customer service with empathy and efficiency. Reduce wait times and improve satisfaction scores.",
      features: ["Empathetic responses", "Zero wait time", "Call routing", "Sentiment analysis"],
      color: "from-secondary to-primary",
    },
    {
      icon: Code,
      name: "WebForge Studio",
      tagline: "Web Development",
      description: "Custom web solutions built with cutting-edge technology. From stunning landing pages to complex web applications, we craft digital experiences that convert.",
      features: ["Modern tech stack", "Responsive design", "SEO optimized", "Performance focused"],
      color: "from-primary via-accent to-secondary",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cutting-edge AI solutions designed to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-accent font-medium">{service.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
