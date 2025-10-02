import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@axdox.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "San Francisco, CA",
      description: "123 AI Innovation Drive",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "9AM - 6PM PST",
      description: "Monday through Friday",
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
              <span className="text-foreground">Get in </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to transform your business with AI? Let's talk about your needs and how we can help
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone (Optional)</label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Interested In</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none text-foreground">
                      <option>AI Voice Agent</option>
                      <option>AI Chatbot</option>
                      <option>AI Customer Service</option>
                      <option>Web Development</option>
                      <option>Not Sure / Multiple Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project and how we can help..." 
                      className="bg-background/50 border-border/50 focus:border-primary min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-all shadow-glow group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-lg text-primary font-medium">{info.detail}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Quick Response */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="font-bold text-foreground mb-2">⚡ Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  Most inquiries are answered within 2 hours during business hours. For urgent matters, please call us directly.
                </p>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-20 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Card className="overflow-hidden border-border/50">
              <div className="w-full h-[400px] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 mx-auto text-primary" />
                  <p className="text-xl font-semibold text-foreground">San Francisco, California</p>
                  <p className="text-muted-foreground">AI Innovation District</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
