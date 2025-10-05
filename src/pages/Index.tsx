import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/HomeServices";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Zap, Shield, Clock, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HomeServices />
      

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
