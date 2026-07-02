import React, { useState, FormEvent, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Sparkles, Send, Check } from "lucide-react";

interface ContactProps {
  initialTab?: "quote" | "book";
}

export default function Contact({ initialTab = "quote" }: ContactProps) {
  const [activeFormTab, setActiveFormTab] = useState<"quote" | "book">(initialTab);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "deep-clean",
    size: "medium", // for quote
    date: "", // for booking
    time: "morning", // for booking
    message: ""
  });

  useEffect(() => {
    setActiveFormTab(initialTab);
  }, [initialTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "deep-clean",
      size: "medium",
      date: "",
      time: "morning",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-green-50 text-brand-green-600 text-xs font-bold tracking-wider uppercase self-start">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Connect With Our Specialists
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Whether you have custom requests, office complexes, or want to establish regular scheduling, we are here to assist.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4">
              <a
                href="tel:1-800-555-0199"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call or text us</p>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5 hover:text-brand-blue-600 transition-colors">
                    (800) 555-0199
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@cleancamp.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-green-50 text-brand-green-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email our office</p>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5 hover:text-brand-green-600 transition-colors">
                    hello@cleancamp.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our headquarters</p>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5">
                    100 Sparkling Way, Clean City, CC 94103
                  </p>
                </div>
              </div>
            </div>

            {/* Beautiful Custom Styled Map Placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200/60 shadow-inner flex flex-col justify-between p-6">
              {/* Abstract Blueprint Grid Layout inside CSS */}
              <div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{
                backgroundImage: "radial-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px), linear-gradient(#e2e8f0 1px, transparent 1px)",
                backgroundSize: "20px 20px, 40px 40px, 40px 40px"
              }} />

              {/* Fake Street Lines */}
              <div className="absolute h-8 bg-white/70 top-1/3 left-0 right-0 border-y border-slate-200/50 -rotate-3 transform origin-center" />
              <div className="absolute w-12 bg-white/70 top-0 bottom-0 left-1/4 border-x border-slate-200/50 rotate-12 transform origin-center" />
              <div className="absolute w-10 bg-white/70 top-0 bottom-0 right-1/3 border-x border-slate-200/50 -rotate-6 transform origin-center" />

              {/* Map Badge */}
              <div className="relative z-10 self-start bg-slate-900/90 text-white py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3 h-3 text-brand-green-500" />
                <span>CLEANCAMP METRO LOCATION</span>
              </div>

              {/* Pulsing Pin Centerpiece */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-brand-blue-500/30 animate-ping" />
                <div className="relative z-10 w-9 h-9 rounded-full bg-brand-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <div className="bg-slate-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-md shadow-md mt-2 whitespace-nowrap tracking-wide">
                  CleanCamp HQ
                </div>
              </div>

              {/* Hours Info Bar */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-green-500" />
                  <span className="text-xs font-bold text-slate-800">Support Open 24/7</span>
                </div>
                <span className="text-[10px] font-extrabold text-brand-green-600 bg-brand-green-50 px-2 py-0.5 rounded-full">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Box */}
          <div className="lg:col-span-7 bg-slate-50 rounded-[32px] p-6 sm:p-10 border border-slate-200/60 shadow-md">
            
            {/* Form Title & Tab Switcher */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex bg-slate-200/60 p-1.5 rounded-full w-full">
                <button
                  type="button"
                  onClick={() => { setActiveFormTab("quote"); setIsSubmitted(false); }}
                  className={`flex-1 py-3 px-4 rounded-full font-bold text-sm tracking-wide transition-all select-none cursor-pointer ${
                    activeFormTab === "quote"
                      ? "bg-white text-brand-blue-950 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Request Free Quote
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveFormTab("book"); setIsSubmitted(false); }}
                  className={`flex-1 py-3 px-4 rounded-full font-bold text-sm tracking-wide transition-all select-none cursor-pointer ${
                    activeFormTab === "book"
                      ? "bg-white text-brand-blue-950 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Instant Booking
                </button>
              </div>
            </div>

            {isSubmitted ? (
              /* Submission Success View */
              <div className="flex flex-col items-center text-center py-10 px-4 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-brand-green-100 text-brand-green-600 flex items-center justify-center mb-6 shadow-sm border-2 border-white">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-display font-extrabold text-slate-900 text-2xl tracking-tight">
                  {activeFormTab === "quote" ? "Quote Request Received!" : "Booking Request Confirmed!"}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-3 max-w-md">
                  Thank you, <span className="font-extrabold text-slate-800">{formData.name || "friend"}</span>! Your inquiry has been processed successfully. Our lead coordinator is reviewing details and will reach out to you via email or call in under <span className="font-extrabold text-brand-blue-600">15 minutes</span>.
                </p>
                
                <div className="mt-8 p-4 bg-white rounded-2xl border border-slate-150 text-left w-full max-w-sm flex flex-col gap-2">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Inquiry details:</span>
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Service:</span>
                    <span className="text-slate-800 capitalize">{formData.serviceType.replace("-", " ")}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Inquirer Name:</span>
                    <span className="text-slate-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Contact Method:</span>
                    <span className="text-slate-800">{formData.phone || formData.email}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 font-bold text-sm transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              /* Standard Lead capturing Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-sm outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-sm outline-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Service type */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceType" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Select Service
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-sm outline-none cursor-pointer"
                    >
                      <option value="deep-clean">Complete Deep Cleaning</option>
                      <option value="regular-maintenance">Routine Maintenance</option>
                      <option value="move-in-out">Move-In / Move-Out Clean</option>
                      <option value="window-glass">Detailed Window & Glass</option>
                      <option value="post-construction">Post-Construction Restores</option>
                      <option value="sanitization-care">High-Sanitization Care</option>
                    </select>
                  </div>

                  {/* Conditional inputs */}
                  {activeFormTab === "quote" ? (
                    /* App/Home size for Quote */
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="size" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Approximate Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-sm outline-none cursor-pointer"
                      >
                        <option value="small">Small (Under 1,000 sq ft)</option>
                        <option value="medium">Medium (1,000 - 2,500 sq ft)</option>
                        <option value="large">Large (2,500 - 4,000 sq ft)</option>
                        <option value="xlarge">Enterprise / Custom (4,000+ sq ft)</option>
                      </select>
                    </div>
                  ) : (
                    /* Date & Time for Booking */
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="date" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Target Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-xs outline-none cursor-pointer"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="time" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Time Slot
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-xs outline-none cursor-pointer"
                        >
                          <option value="morning">Morning (8am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 4pm)</option>
                          <option value="evening">Evening (4pm - 8pm)</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Special Instructions / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. Gate codes, pet warnings, specific stain details, or frequency..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 transition-all text-sm outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="btn-form-submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-base shadow-lg shadow-brand-blue-600/15 hover:shadow-brand-blue-600/25 transition-all hover:translate-y-[-1px] mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{activeFormTab === "quote" ? "Calculate My Quote" : "Secure Booking Confirmation"}</span>
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-2 font-normal">
                  * By clicking submit you agree to our response guidelines. Rest assured, your data is 100% secure and is never distributed.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
