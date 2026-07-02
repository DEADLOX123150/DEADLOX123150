import { useState } from "react";
import { MessageSquare, Phone, ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BeforeAfterGallery from "./components/BeforeAfterGallery";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import OurProcess from "./components/OurProcess";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [contactTab, setContactTab] = useState<"quote" | "book">("quote");

  const triggerContactForm = (tab: "quote" | "book") => {
    setContactTab(tab);
    const target = document.getElementById("contact");
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <Navbar onOpenBooking={() => triggerContactForm("book")} />

      {/* Main Sections Stack */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => triggerContactForm("quote")}
          onOpenBooking={() => triggerContactForm("book")}
        />

        {/* 2. Before & After Gallery */}
        <BeforeAfterGallery />

        {/* 3. Services Catalog */}
        <Services />

        {/* 4. Why Choose CleanCamp */}
        <WhyChooseUs />

        {/* 5. Our 4-Step Process */}
        <OurProcess />

        {/* 6. Real-time Animated Statistics */}
        <Statistics />

        {/* 7. Client Success Stories */}
        <Testimonials />

        {/* 8. Accordion FAQ Section */}
        <FAQ />

        {/* 9. Booking & Lead Form Section */}
        <Contact initialTab={contactTab} />
      </main>

      {/* 10. Footer & Policies */}
      <Footer />

      {/* Floating Action/Contact Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Call Now hover widget */}
        <a
          href="tel:1-800-555-0199"
          className="group flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 select-none cursor-pointer"
          title="Call CleanCamp Support"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-bold pl-0 group-hover:pl-1">
            Call (800) 555-0199
          </span>
        </a>

        {/* Chat / Quote floating trigger */}
        <button
          onClick={() => triggerContactForm("quote")}
          className="group flex items-center gap-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 select-none cursor-pointer focus:outline-none"
          title="Instant Online Quote"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-bold pl-0 group-hover:pl-1">
            Free Online Quote
          </span>
        </button>
      </div>
    </div>
  );
}
