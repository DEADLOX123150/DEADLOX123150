import React from "react";
import { Award, Leaf, DollarSign, Clock, CheckCircle, Zap, Sparkles } from "lucide-react";
import { FEATURES_DATA } from "../data";

export default function WhyChooseUs() {
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Award":
        return <Award className={className} />;
      case "Leaf":
        return <Leaf className={className} />;
      case "DollarSign":
        return <DollarSign className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "CheckCircle":
        return <CheckCircle className={className} />;
      case "Zap":
        return <Zap className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-[-15%] w-[40%] h-[40%] rounded-full bg-brand-green-100/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green-50 text-brand-green-600 text-xs font-bold tracking-wider uppercase self-center border border-brand-green-100">
            <Sparkles className="w-3.5 h-3.5 text-brand-green-500 animate-sparkle" />
            <span>Why CleanCamp</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Designed for Trust & Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We hold ourselves to the highest benchmarks of performance, ensuring you get the absolute best results for your home or commercial space.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              className="group bg-slate-50/50 p-8 rounded-[32px] border border-slate-100/60 shadow-lg shadow-slate-100/40 hover:shadow-2xl hover:shadow-slate-200/50 hover:bg-white hover:border-brand-green-100/60 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent hover pill */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-green-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-brand-green-50 text-brand-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {renderIcon(feature.icon, "w-5 h-5")}
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 rounded-[32px] p-8 sm:p-10 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-blue-100/10">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full text-brand-green-100">
              Safe & Insured Guarantee
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl mt-4 tracking-tight">
              Ready to feel the difference?
            </h3>
            <p className="text-brand-blue-100 text-sm sm:text-base mt-2 leading-relaxed font-medium">
              Every appointment is guarded by our $2,000,000 premium insurance and 100% satisfaction guarantee. If you are not happy, we return and reclean it instantly.
            </p>
          </div>
          <div className="flex-shrink-0 flex gap-4 w-full md:w-auto">
            <button
              onClick={() => {
                const contactSec = document.getElementById("contact");
                if (contactSec) {
                  contactSec.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold text-sm shadow-lg shadow-brand-green-500/15 hover:shadow-brand-green-500/25 transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              Get My Estimate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
