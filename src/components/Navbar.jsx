import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { contactInfo, navLinks } from '../data/loanData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky shadow/bg
      setIsScrolled(window.scrollY > 20);

      // Bottom of page detection -> highlight Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Dynamic active section detection using absolute document offsets
      const scrollPosition = window.scrollY + 120;
      const sectionIds = navLinks.map(link => link.href.substring(1));

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        // Support both #calculator and #savings-calculator
        const el = document.getElementById(id) || (id === 'savings-calculator' ? document.getElementById('calculator') : null);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    // Find target element (also check fallback id if needed)
    let target = document.querySelector(href);
    if (!target && href === '#savings-calculator') {
      target = document.getElementById('calculator') || document.getElementById('savings-calculator');
    }
    if (!target && href === '#calculator') {
      target = document.getElementById('savings-calculator') || document.getElementById('calculator');
    }

    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <>
      {/* Top Announcement Bar (Tablet and Desktop) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> 0% Customer Fees Model
            </span>
            <span className="text-slate-400 hidden xl:inline">
              Empowering Your Dreams, Financing Your Future • 270+ Institutional Partner Network
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden lg:inline text-slate-400">Helpline:</span>
              <a
                href={`tel:${contactInfo.phoneClean}`}
                className="hover:text-amber-400 transition-colors font-medium text-slate-300"
              >
                {contactInfo.phone}
              </a>
              <span className="text-slate-500">/</span>
              <a
                href={`tel:${contactInfo.phone2Clean}`}
                className="hover:text-amber-400 transition-colors font-medium text-slate-300"
              >
                {contactInfo.phone2}
              </a>
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-royal-400" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-navy-800'
            : 'bg-navy-950/90 backdrop-blur-sm py-3 sm:py-3.5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group text-left shrink-0"
              aria-label="Siyaram Loans & Finance Homepage"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Siyaram Loans & Finance Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-base sm:text-lg xl:text-xl font-black tracking-tight text-white font-heading">
                    SIYARAM
                  </span>
                  <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Est. 2012
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] xl:text-[11px] tracking-wider font-semibold text-amber-400 uppercase">
                  Loans & Finance
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = activeSection === linkId || (linkId === 'savings-calculator' && activeSection === 'calculator');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-1.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-200 relative whitespace-nowrap ${
                      isActive
                        ? 'text-white bg-royal-700/40 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-glow-gold" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Consultation CTA on Desktop */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-navy-950 transition-all duration-300 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-glow-gold hover:shadow-lg hover:scale-[1.02] active:scale-95 group whitespace-nowrap"
              >
                <span className="hidden xl:inline">Get Free Consultation</span>
                <span className="xl:hidden">Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${contactInfo.phoneClean}`}
                className="p-2 rounded-xl text-amber-400 bg-navy-900 border border-navy-800 hover:border-amber-400 transition-colors"
                aria-label="Call Siyaram Helpline"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hidden sm:inline-flex px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-navy-950 shadow-sm whitespace-nowrap"
              >
                Free Consult
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-navy-850 border border-navy-800 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu (Directly attached under header) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-t border-navy-850 border-b border-navy-800 shadow-2xl px-4 sm:px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Drawer Sub-Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy-800/80">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-heading">
                Menu Navigation
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                0% Customer Fees
              </span>
            </div>

            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = activeSection === linkId || (linkId === 'savings-calculator' && activeSection === 'calculator');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-royal-600/30 text-white border-l-4 border-amber-400 font-bold pl-3 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-navy-900/80'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-600'}`} />
                  </a>
                );
              })}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="mt-4 pt-3.5 border-t border-navy-800/80 space-y-2.5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-navy-950 font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-sm shadow-md active:scale-98 transition-transform"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${contactInfo.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-slate-200 font-medium bg-navy-900/90 border border-navy-700 text-[11px] sm:text-xs hover:border-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{contactInfo.phone}</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone2Clean}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-slate-200 font-medium bg-navy-900/90 border border-navy-700 text-[11px] sm:text-xs hover:border-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{contactInfo.phone2}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
