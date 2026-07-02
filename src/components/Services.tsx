import React, { useState } from "react";
import { Sparkles, CalendarRange, Home, Layers, HardHat, ShieldAlert, ArrowRight, CheckCircle, X } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon name to Lucide Component
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className={className} />;
      case "CalendarRange":
        return <CalendarRange className={className} />;
      case "Home":
        return <Home className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "HardHat":
        return <HardHat className={className} />;
      case "ShieldAlert":
        return <ShieldAlert className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold tracking-wider uppercase self-center border border-brand-blue-100/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-green-500 animate-sparkle" />
            <span>Our Elite Catalog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Premium Cleaning Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Professional solutions designed to restore cleanliness, health, and comfort to your spaces. Choose an elite tier that matches your exact schedule.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-8 rounded-[32px] bg-white border border-slate-100 shadow-lg shadow-slate-100/60 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-brand-blue-100 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:bg-brand-blue-600 group-hover:text-white transition-all duration-300">
                  {renderIcon(service.icon, "w-5 h-5")}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-brand-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-brand-green-600 bg-brand-green-50/70 border border-brand-green-100/50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.priceEstimate || "Estimate"}
                </span>
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-blue-600 hover:text-brand-blue-700 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Interactive Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-slide-up">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                  {renderIcon(selectedService.icon, "w-5 h-5")}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    {selectedService.title}
                  </h4>
                  <span className="text-xs font-bold text-brand-green-600">{selectedService.priceEstimate}</span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                {selectedService.description}
              </p>

              {/* Specific Benefits Checklists */}
              <div className="mb-8">
                <h5 className="font-display font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">
                  What is Included in This Service:
                </h5>
                <ul className="flex flex-col gap-3">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-brand-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm font-medium leading-normal">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  setSelectedService(null);
                  const contactSec = document.getElementById("contact");
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-4 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm shadow-lg shadow-brand-blue-600/15 hover:shadow-brand-blue-600/25 transition-all cursor-pointer"
              >
                Request Free Custom Estimate
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
