import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const sentences = [
  "Efficiency? Always on.",
  "Growth? Guaranteed.",
  "Support? 24/7.",
  "Innovation? Non-stop.",
  "Boring tech? Not here.",
  "Ideas? Let’s build them.",
  "Time wasted? Never.",
  "Customers waiting? Nope.",
  "Results? Faster than ever.",
  "AI magic? Delivered daily.",
];


export const DynamicSubheading: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-center gap-4 py-2"
      style={{ minHeight: '3.5em', background: 'transparent' }}
    >
      
    <Sparkles
        className="w-7 h-7 animate-pulse-glow transition-transform duration-500"
        style={{ color: "#00FFD1" }} // neon cyan
    />

      <span
        className="text-2xl md:text-3xl font-extrabold text-center"
        style={{
          color: '#70d100ff', // dark orange
          letterSpacing: '0.03em',
          cursor: 'pointer',
          filter: 'brightness(1.15) drop-shadow(0 0 8px #000000ff)',
          transition: 'filter 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = 'brightness(1.6) drop-shadow(0 0 16px #e7ad5cff)';
          e.currentTarget.style.color = '#ceca03ff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = 'brightness(1.15) drop-shadow(0 0 8px #000000ff)';
          e.currentTarget.style.color = '#88ff00ff';
        }}
      >
        {sentences[index]}
      </span>
    </div>
  );
};