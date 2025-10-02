import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users, Zap, Target, Heart, Shield, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Empowering businesses with AI technology that's accessible, powerful, and ethical.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every solution we build puts your customers' experience at the center.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and compliance to protect your business and customers.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly evolving with cutting-edge AI to keep you ahead of the curve.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "99.9%", label: "Uptime SLA", icon: Zap },
    { value: "2M+", label: "Conversations", icon: TrendingUp },
    { value: "15+", label: "Industries", icon: Award },
  ];

  const team = [
    {
      role: "Leadership",
      description: "Seasoned executives from Fortune 500 tech companies",
    },
    {
      role: "AI Engineers",
      description: "PhD-level researchers pushing the boundaries of conversational AI",
    },
    {
      role: "Product Team",
      description: "UX experts crafting intuitive experiences",
    },
    {
      role: "Support",
      description: "24/7 dedicated team ensuring your success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">About </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Axdox
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We're on a mission to make AI accessible to every business, regardless of size or technical expertise
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Story Section */}
          <div className="mb-20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-12 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2020, Axdox emerged from a simple observation: businesses were struggling to keep up with customer demands while AI technology remained complex and inaccessible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founders, veterans of Silicon Valley's AI revolution, set out to democratize artificial intelligence. Today, we're proud to serve over 500 businesses worldwide, from startups to enterprises, helping them deliver exceptional customer experiences 24/7.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a voice agent platform has evolved into a comprehensive AI solution suite, but our core mission remains unchanged: make powerful AI technology simple, accessible, and impactful for every business.
                </p>
              </div>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-foreground">Meet the </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-glow animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{member.role}</h3>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Us on This Journey
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to transform your customer service or explore AI opportunities, we're here to help
              </p>
              <button className="px-8 py-4 rounded-xl bg-gradient-hero text-white font-semibold text-lg hover:opacity-90 transition-all shadow-glow hover:shadow-glow-intense">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
