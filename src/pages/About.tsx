import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Rocket, Target } from "lucide-react";

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

  const founders = [
    {
      role: "Shri Siva - Founder",
      description: "Visionary founder driving the AI innovation and overall strategy of Axdox.",
      image: "public/assets/siva.jpg", // Replace with actual path
    },
    {
      role: "Kavitha - Co-Founder",
      description: "Co-founder bringing expertise in AI, development, and customer engagement.",
      image: "public/assets/kavi.jpg", // Replace with actual path
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
              After years of learning, experimenting, and completing multiple projects, Axdox officially started to bring AI solutions to businesses worldwide.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-12 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Axdox officially began after years of dedication, learning, and completing multiple projects. Shri Siva, our founder, envisioned a platform that makes AI accessible to businesses of all sizes, while Kavitha, our co-founder, brought her expertise in AI development and customer engagement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since 2023, we have been learning, experimenting, and building. Each project refined our vision and skills, leading to the creation of Axdox—the AI platform we proudly offer today.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to simplify AI solutions, enhance customer experiences, and help businesses thrive in the digital era. We are passionate about combining innovation with practicality to deliver meaningful results for our clients.
                </p>
              </div>
            </Card>
          </div>

          {/* Values Section */}
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

          {/* Founders Section */}
{/* Founders Section */}
{/* Founders Section */}
<div className="mb-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    <span className="text-foreground">Meet the </span>
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Founders
    </span>
  </h2>
  <div className="grid md:grid-cols-2 gap-6">
    {founders.map((member, index) => (
      <Card
        key={index}
        className="relative p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center animate-slide-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Big Image with slight curve */}
        <div className="w-full flex justify-center">
          <img
            src={member.image}
            alt={member.role}
            className="w-64 h-80 object-cover rounded-lg" // <-- slight curve here
          />
        </div>

        <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">{member.role}</h3>
        <p className="text-md text-muted-foreground max-w-xs">{member.description}</p>
      </Card>
    ))}
  </div>
</div>




          {/* CTA Section */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Us on This Journey
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to transform your customer service or explore AI opportunities, we're here to help.
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
