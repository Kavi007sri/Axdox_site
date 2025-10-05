"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DynamicSubheading } from "./DynamicSubheading";

// Particle effect for whole word
const WordWithParticles = ({ word }: { word: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = 1000;
    canvas.height = 210;

    ctx.font = "bold 250px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#3b82f6");
    gradient.addColorStop(0.5, "#a855f7");
    gradient.addColorStop(1, "#22c55e");

    ctx.fillStyle = gradient;
    ctx.fillText(word, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let particles: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      dx: number;
      dy: number;
    }[] = [];

    for (let y = 0; y < canvas.height; y += 3) {
      for (let x = 0; x < canvas.width; x += 3) {
        const alpha = imageData.data[(y * imageData.width + x) * 4 + 3];
        if (alpha > 128) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            dx: (Math.random() - 0.5) * 80,
            dy: (Math.random() - 0.5) * 80,
          });
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;

      particles.forEach((p) => {
  if (hover) {
    // Increased speed multiplier
    p.x += p.dx * 0.15 + (Math.random() - 0.5) * 5;
    p.y += p.dy * 0.15 + (Math.random() - 0.5) * 5;
  } else {
    p.x += (p.baseX - p.x) * 0.02;
    p.y += (p.baseY - p.y) * 0.02;
  }

  ctx.fillRect(p.x, p.y, 2, 2);
});


      requestAnimationFrame(draw);
    };

    draw();
  }, [word, hover]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center animate-slide-up min-h-[70vh]">

          {/* Left Side: Particle Heading + Dynamic Subheading */}
        <div className="w-full md:w-7/12 flex flex-col justify-start items-start gap-4 px-0 md:px-0 py-16">
        <h1 className="font-extrabold leading-tight text-[4rem] md:text-[6rem] lg:text-[8rem] w-full flex flex-col gap-6 items-start">
          {["Talk", "Chat", "Build", "Grow"].map((word) => (
           <WordWithParticles key={word} word={word} />
          ))}
       </h1>

       {/* Dynamic Subheading slightly above */}
       <div className="w-full max-w-3xl text-3xl md:text-4xl text-left -mt-4">
       <DynamicSubheading />
     </div>
      </div>


          {/* Right Side: Badge, Description, Buttons, Stats */}
          <div className="w-full md:w-5/12 flex flex-col justify-center items-center gap-6 px-4 md:px-6 py-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 -mt-10">
              <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              <span className="text-base md:text-lg font-semibold text-foreground">
                AI-Powered Business Solutions
              </span>
            </div>

            {/* Static Subheading */}
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-md leading-relaxed text-center">
              AI voice agents, intelligent chatbots, and web development — all
              working together to fuel your business 24/7.
            </p>

            {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-2 md:pt-4">
  {/* Get in Touch → Contact Page */}
  <a href="/Contact" className="w-full sm:w-auto">
    <Button
      size="lg"
      className="bg-gradient-hero hover:opacity-90 transition-all text-lg px-8 py-6 shadow-glow hover:shadow-glow-intense group w-full"
    >
      Get in touch
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>

  {/* View Services → Services Page */}
  <a href="/services" className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="outline"
      className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 backdrop-blur-sm w-full"
    >
      View Services
    </Button>
  </a>
</div>


            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 w-full max-w-md">
              {[
                { value: "🎧 24/7", label: "Support" },
  { value: "🚀 50+", label: "AI Models" },
  { value: "💡 200+", label: "Solutions Delivered" },
  { value: "🌐 30+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
