import { useState } from "react";
import { Sparkles, Facebook, Instagram, Twitter, Linkedin, ChevronUp, Heart, X, ShieldAlert, Check } from "lucide-react";

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-brand-green-500 text-white font-bold">
                <Sparkles className="w-4.5 h-4.5 animate-sparkle" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Clean<span className="text-brand-green-500">Camp</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs font-normal">
              CleanCamp provides premium, professional cleaning solutions configured to maximize quality, hygiene, and absolute customer satisfaction.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Sitemap Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-brand-green-400 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-green-400 transition-colors">
                  Before & After
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-green-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-brand-green-400 transition-colors">
                  Why CleanCamp
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-green-400 transition-colors">
                  Our 4-Step Process
                </a>
              </li>
            </ul>
          </div>

          {/* Support Area (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Support Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#faq" className="hover:text-brand-green-400 transition-colors">
                  FAQs Accordion
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-green-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("privacy")}
                  className="hover:text-brand-green-400 transition-colors text-left focus:outline-none cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="hover:text-brand-green-400 transition-colors text-left focus:outline-none cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Corporate Office
            </h4>
            <ul className="flex flex-col gap-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-white">PH:</span>
                <span>(800) 555-0199</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-white">EM:</span>
                <span>hello@cleancamp.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-white">AD:</span>
                <span>100 Sparkling Way, Clean City, CC 94103</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium text-center sm:text-left">
            © {currentYear} CleanCamp Inc. All rights reserved. Vetted, Insured & Satisfaction Guaranteed.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-brand-green-500 fill-current" /> for healthy homes
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Accessible Policy Inline Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-slate-100">
            {/* Close */}
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            {activePolicy === "privacy" ? (
              <div className="flex flex-col gap-4 text-sm font-normal text-slate-600">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-6 h-6 text-brand-blue-600" />
                  <h4 className="font-display font-extrabold text-slate-900 text-xl">
                    Privacy Policy
                  </h4>
                </div>
                <span className="text-xs font-bold text-slate-400">Effective Date: July 1, 2026</span>
                <p>
                  At CleanCamp, your privacy is paramount. This privacy document outlines how we collect, store, manage, and protect your information when you request quotes, book appointments, or navigate our digital environments.
                </p>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-wider mt-4">1. Data We Collect</h5>
                <p>
                  We gather basic identifiers (name, email addresses, primary phone numbers), residence parameters (general square footage, service preferences, specific directions), and schedule configurations to guarantee correct service dispatch.
                </p>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-wider mt-2">2. How We Protect It</h5>
                <p>
                  All lead details and configurations are encrypted via industry-standard protocols. We NEVER distribute, trade, lease, or sell client records to advertising networks or third-party service listings.
                </p>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-wider mt-2">3. Your Security Controls</h5>
                <p>
                  You retain absolute rights to request information deletions, update booking configurations, or cancel quote records at any stage by reaching out directly to hello@cleancamp.com.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4 text-sm font-normal text-slate-600">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-6 h-6 text-brand-green-500 stroke-[3]" />
                  <h4 className="font-display font-extrabold text-slate-900 text-xl">
                    Terms of Service
                  </h4>
                </div>
                <span className="text-xs font-bold text-slate-400">Effective Date: July 1, 2026</span>
                <p>
                  Welcome to CleanCamp. By navigating our template platform, request tools, or booking systems, you accept and agree to follow these standard operational guidelines.
                </p>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-wider mt-4">1. Satisfaction Guarantee</h5>
                <p>
                  We operate with a meticulous double-tier guarantee. If any service area does not meet the standards, submit an active notification in 24 hours. We return and reclean the specified zone for free.
                </p>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-wider mt-2">2. Schedule Adjustments</h5>
                <p>
                  Cancellations and rescheduling are completely free of fee if requested at least 24 hours prior to the booked timeframe. Short-notice changes are subject to localized scheduling handling charges.
                </p>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-wider mt-2">3. Crew Access Security</h5>
                <p>
                  Clients agree to provide secure entry (lockbox numbers, door key codes, concierge registrations, or physical presence) to facilitate smooth checklist completions on schedule.
                </p>
              </div>
            )}

            <button
              onClick={() => setActivePolicy(null)}
              className="w-full mt-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-full transition-colors cursor-pointer"
            >
              Close Guidelines
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
