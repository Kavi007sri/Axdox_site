import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Headphones, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HomeServices = () => {
  const services = [
  {
    icon: Headphones,
    name: "AI Voice Agent",
    tagline: "24/7 Smart Voice chat Support",
    description: "Voice assistant that lets users ask questions by speaking and get instant answers with natural AI speech.",
    color: "from-primary to-accent",
  },
  {
    icon: MessageSquare,
    name: "AI Chatbot",
    tagline: "24/7 Smart Chat Support",
    description: "AI-powered chatbot that understands context and provides accurate, human-like responses in real time.",
    color: "from-accent to-secondary",
  },
  {
    icon: Phone,
    name: "AI Customer Service",
    tagline: "AI Phone Call Support",
    description: "Call a phone number and talk to an AI that handles customer service like a real human agent.",
    color: "from-secondary to-primary",
  },
  {
    icon: Code,
    name: "Web Development",
    tagline: "Custom Digital Solutions",
    description: "Modern websites and web applications built with cutting-edge technology for business growth.",
    color: "from-primary via-accent to-secondary",
  },
];


  return (
    <section className="py-24 relative overflow-hidden">
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
            AI solutions designed to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
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

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
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
      </div>
    </Card>
  );
})}

        </div>

        {/* View All Button */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 backdrop-blur-sm group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
