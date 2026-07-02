import React from "react";
import { FileText, CalendarDays, Sparkles, Smile, Check } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function OurProcess() {
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className={className} />;
      case "CalendarCheck":
        return <CalendarDays className={className} />;
      case "SprayCan":
        return <Sparkles className={className} />;
      case "Smile":
        return <Smile className={className} />;
      default:
        return <Check className={className} />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold tracking-wider uppercase self-center border border-brand-blue-100/60">
            <Smile className="w-3.5 h-3.5 text-brand-green-600" />
            <span>How We Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Flawless Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Four simple steps to absolute freshness. We've streamlined our service flow to provide a completely hassle-free experience.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          {/* Central Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-slate-200/50 -z-10 rounded-full">
            {/* Animated blue/green glow bar overlay */}
            <div className="absolute top-0 bottom-0 left-0 w-[70%] bg-gradient-to-r from-brand-blue-600 to-brand-green-400 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="flex flex-col items-center text-center group relative animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Step Number / Icon Badge */}
                <div className="relative flex items-center justify-center w-[110px] h-[110px] rounded-full bg-white border-4 border-slate-50 shadow-lg group-hover:shadow-2xl group-hover:border-brand-blue-100 transition-all duration-300">
                  
                  {/* Floating Number Pill */}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-brand-blue-600 text-white font-extrabold text-sm flex items-center justify-center border-2 border-white shadow-sm">
                    {step.stepNumber}
                  </div>

                  {/* Inner Icon */}
                  <div className="w-16 h-16 rounded-full bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:bg-brand-blue-600 group-hover:text-white transition-all duration-300">
                    {renderIcon(step.icon, "w-6 h-6")}
                  </div>
                </div>

                {/* Text Context */}
                <div className="mt-6 flex flex-col gap-2">
                  <h3 className="font-display font-black text-lg text-slate-900 group-hover:text-brand-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[240px] mx-auto font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Decorative arrow indicator for mobile/tablet */}
                {idx < 3 && (
                  <div className="hidden sm:block lg:hidden absolute top-[40px] right-[-30px] text-slate-300 font-bold text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
