import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Phone, CalendarRange } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Before & After", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Our Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-100/40 border-b border-slate-100/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue-600 to-brand-green-500 shadow-md shadow-brand-blue-600/15 text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 animate-sparkle" />
            </div>
            <span className="font-display text-2xl font-black tracking-tight bg-gradient-to-r from-brand-blue-900 via-brand-blue-700 to-brand-blue-900 bg-clip-text text-transparent">
              Clean<span className="text-brand-green-500 font-extrabold">Camp</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[14px] font-semibold text-slate-600 hover:text-brand-blue-600 transition-colors duration-200 relative py-1 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-green-500 transition-all duration-300 group-hover:w-full rounded-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5 pl-5 border-l border-slate-200">
              <a
                href="tel:1-800-555-0199"
                className="flex items-center gap-2 text-[14px] font-bold text-slate-700 hover:text-brand-blue-600 transition-colors group"
              >
                <div className="p-1.5 rounded-full bg-brand-green-50 group-hover:bg-brand-green-100 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-green-600" />
                </div>
                <span>(800) 555-0199</span>
              </a>
              <button
                id="btn-nav-book"
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold text-sm shadow-lg shadow-brand-blue-600/15 hover:shadow-brand-blue-600/25 transition-all duration-200 hover:translate-y-[-1px] cursor-pointer"
              >
                <CalendarRange className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:1-800-555-0199"
              className="p-2.5 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-green-600" />
            </a>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 top-[65px] z-40 bg-white border-t border-slate-100 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6 bg-white justify-between overflow-y-auto pb-12">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-bold text-slate-800 hover:text-brand-blue-600 py-2 border-b border-slate-50 transition-colors"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50">
              <span className="text-sm font-semibold text-slate-500">Call us anytime</span>
              <a
                href="tel:1-800-555-0199"
                className="flex items-center gap-2 text-base font-extrabold text-brand-blue-900 hover:text-brand-blue-600"
              >
                <Phone className="w-4 h-4 text-brand-green-600" />
                <span>(800) 555-0199</span>
              </a>
            </div>
            <button
              id="btn-mobile-drawer-book"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-extrabold shadow-lg shadow-brand-blue-600/15 cursor-pointer"
            >
              <CalendarRange className="w-5 h-5" />
              Book Professional Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
