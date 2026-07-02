import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold tracking-wider uppercase self-center border border-brand-blue-100/60">
            <Quote className="w-3.5 h-3.5 text-brand-green-500" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Loved by Homes & Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            See why CleanCamp is highly rated across our communities. Our commitment to pristine spaces generates loyal, satisfied clients.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Decorative Quote Sign */}
          <div className="absolute top-0 left-4 text-slate-100/70 -z-10 translate-y-[-40%] hidden sm:block">
            <Quote className="w-40 h-40 fill-current opacity-[0.2]" />
          </div>

          <div className="bg-slate-50/60 rounded-[32px] p-8 sm:p-12 shadow-xl shadow-slate-100/40 border border-slate-100/80 transition-all duration-300 relative">
            <div className="flex flex-col gap-6 md:gap-8">
              
              {/* Star Rating & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                {TESTIMONIALS_DATA[activeIndex].verified && (
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-green-600 bg-brand-green-50/80 border border-brand-green-100 px-3 py-1 rounded-full uppercase tracking-wider">
                     <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Customer</span>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed italic">
                "{TESTIMONIALS_DATA[activeIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                <img
                  src={TESTIMONIALS_DATA[activeIndex].image}
                  alt={TESTIMONIALS_DATA[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md shadow-brand-blue-600/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-black text-slate-900 text-base sm:text-lg">
                    {TESTIMONIALS_DATA[activeIndex].name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                    {TESTIMONIALS_DATA[activeIndex].role}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-between items-center gap-4 mt-8 px-4">
            {/* Dot Indicators */}
            <div className="flex gap-2.5 order-2 sm:order-1">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeIndex === idx
                      ? "bg-brand-blue-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex gap-3 order-1 sm:order-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-brand-blue-600 shadow-md flex items-center justify-center transition-all focus:outline-none cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-brand-blue-600 shadow-md flex items-center justify-center transition-all focus:outline-none cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
