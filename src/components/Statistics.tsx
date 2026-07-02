import React, { useState, useEffect, useRef } from "react";
import { CheckSquare, Heart, TrendingUp, Users } from "lucide-react";
import { STATS_DATA } from "../data";

function AnimatedCount({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.min(60, Math.floor(duration / 16));
    const increment = Math.ceil(end / totalFrames);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, value, duration]);

  // Format with commas if large number
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return <span ref={elementRef}>{formattedCount}</span>;
}

export default function Statistics() {
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "CheckSquare":
        return <CheckSquare className={className} />;
      case "Heart":
        return <Heart className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "Users":
        return <Users className={className} />;
      default:
        return <CheckSquare className={className} />;
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[100%] bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center p-4 rounded-3xl hover:bg-white/5 transition-all duration-300"
            >
              {/* Outer circle for icon */}
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-green-400 mb-4 border border-white/5 shadow-sm">
                {renderIcon(stat.icon, "w-5 h-5")}
              </div>

              {/* Stat Value */}
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                <AnimatedCount value={stat.value} />
                <span className="text-brand-green-400 font-extrabold">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-brand-blue-100 text-[10px] font-bold uppercase tracking-widest mt-2 max-w-[150px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
