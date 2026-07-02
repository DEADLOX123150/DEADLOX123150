import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green-50 text-brand-green-600 text-xs font-bold tracking-wider uppercase self-center border border-brand-green-100">
            <HelpCircle className="w-3.5 h-3.5 text-brand-green-500 animate-sparkle" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Everything you need to know about our high-end cleaning services, scheduling, trust systems, and service guarantee.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {FAQS_DATA.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-[24px] border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-blue-600 shadow-xl shadow-slate-100/60 ring-1 ring-brand-blue-100"
                    : "border-slate-100 shadow-lg shadow-slate-100/40 hover:border-slate-300"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-bold text-slate-900 text-base sm:text-lg select-none focus:outline-none cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-brand-blue-600 bg-brand-blue-50" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Card */}
        <div className="mt-14 text-center bg-white p-6 sm:p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-black text-slate-900 text-lg">
              Still have questions or special requirements?
            </h4>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Our active customer success team is available 24/7 to solve your inquiries.
            </p>
          </div>
          <button
            onClick={() => {
              const contactSec = document.getElementById("contact");
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm shadow-lg shadow-brand-blue-600/15 hover:shadow-brand-blue-600/25 transition-all cursor-pointer whitespace-nowrap"
          >
            Ask a Specialist
          </button>
        </div>

      </div>
    </section>
  );
}
