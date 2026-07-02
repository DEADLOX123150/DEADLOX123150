import React from "react";
import { ShieldCheck, Users, Award, ChevronRight, Star, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onOpenBooking, onOpenQuote }: HeroProps) {
  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-brand-blue-50/50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-brand-blue-100/20 blur-3xl -z-10 translate-x-10 -translate-y-10" />
      <div className="absolute bottom-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-green-50/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 text-brand-blue-700 text-xs font-bold tracking-wider uppercase self-center lg:self-start shadow-sm shadow-slate-100 animate-float">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green-500 animate-pulse" />
              <span>The Platinum Standard of Cleaning</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-slate-900 leading-[1.05] sm:leading-[1.1]">
              Experience a <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-blue-600 via-brand-blue-700 to-brand-green-500 bg-clip-text text-transparent">
                Flawlessly Clean
              </span>{" "}
              Space
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              CleanCamp delivers premier, worry-free cleaning services customized for houses, apartments, and commercial environments. Expect meticulous attention to detail, eco-friendly practices, and premium customer care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <button
                id="btn-hero-quote"
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-base shadow-xl shadow-brand-blue-600/20 hover:shadow-brand-blue-600/30 transition-all hover:translate-y-[-2px] cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                id="btn-hero-book"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200/80 hover:border-slate-300 transition-all hover:translate-y-[-2px] cursor-pointer shadow-sm"
              >
                <span>Book Now</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-center sm:text-left">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-100/60 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Fully Insured</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">$2M active liability</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-center sm:text-left">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-brand-green-50 text-brand-green-600 border border-brand-green-100/60 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Elite Team</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Vetted experts</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-center sm:text-left">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-orange-50/80 text-orange-600 border border-orange-100 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">100% Happy</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Satisfaction guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Column */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Main Visual Image Stack */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-[8px] border-white group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Clean modern living room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlay Info Card 1 - Review */}
            <div className="absolute top-10 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 max-w-[210px] hidden sm:flex flex-col gap-1.5 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-800 italic leading-snug">"Absolutely sparkling! Best cleaning experience ever."</p>
              <span className="text-[10px] font-bold text-slate-400 self-end">— Arthur K.</span>
            </div>

            {/* Overlay Info Card 2 - Stats Tag */}
            <div className="absolute bottom-12 -right-6 sm:-right-6 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 flex items-center gap-3 animate-float" style={{ animationDelay: "2.5s" }}>
              <div className="w-10 h-10 rounded-full bg-brand-green-100 flex items-center justify-center text-brand-green-600 font-bold shadow-sm">
                ✓
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Active Rating</p>
                <p className="text-sm font-extrabold text-slate-900">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
