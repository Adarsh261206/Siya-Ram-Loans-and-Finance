import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { contactInfo, navLinks } from '../data/loanData';
import { Magnetic, GoldButton, Marquee, EASE } from './ui/Primitives';
import { scrollToId, scrollToTop, stopScroll, startScroll } from '../lib/scroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      const sectionIds = navLinks.map((link) => link.href.substring(1));

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const elementTop = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elementTop) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      stopScroll();
      document.body.style.overflow = 'hidden';
    } else {
      startScroll();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const id = href.substring(1);
    if (id === 'home') {
      scrollToTop();
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    scrollToId(id);
    window.history.replaceState(null, '', href);
  };

  return (
    <>
      {/* ---------------- Top ticker tape (slim advisory strip) ---------------- */}
      <div className="relative z-[60] hidden overflow-hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-1.5 font-mono text-[9px] uppercase tracking-widest2 lg:px-8">
          {/* Live badge */}
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-400/10 px-2.5 py-[3px] text-gold-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-500" />
            </span>
            Advisory Desk · Live
          </span>

          {/* Scrolling brand tape */}
          <Marquee className="mask-fade-x min-w-0 flex-1" pauseOnHover>
            {[
              '0% Customer Fees',
              '270+ Institutional Partners',
              'Since 2012',
              'Pan-India Case Processing',
              '₹10,000 Cr+ Facilitated',
            ].map((item) => (
              <span
                key={item}
                className="mx-5 flex shrink-0 items-center gap-5 whitespace-nowrap text-ink-muted"
              >
                {item}
                <span className="text-gold-500/80">✦</span>
              </span>
            ))}
          </Marquee>

          {/* Contacts */}
          <div className="flex shrink-0 items-center gap-4">
            <a
              href={`tel:${contactInfo.phoneClean}`}
              className="flex items-center gap-1.5 whitespace-nowrap text-ink-soft transition-colors hover:text-gold-700"
            >
              <Phone className="h-2.5 w-2.5 shrink-0 text-gold-600" />
              {contactInfo.phone}
            </a>
            <span className="hidden text-ink-muted/50 xl:inline">·</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden items-center gap-1.5 whitespace-nowrap text-ink-soft transition-colors hover:text-gold-700 xl:flex"
            >
              <Mail className="h-2.5 w-2.5 shrink-0 text-gold-600" />
               {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- Main header ---------------- */}
      <header
        className={`sticky top-0 z-[60] transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FBF7EC]/85 py-3 shadow-[0_16px_50px_-30px_rgba(10,23,48,0.4)] backdrop-blur-xl'
            : 'py-4 sm:py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Siyaram Loans & Finance — Home"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-soft ring-1 ring-ink/[0.06] transition-transform duration-500 group-hover:rotate-[6deg]">
              <img src="/logo.png" alt="Siyaram Loans & Finance" className="h-full w-full object-contain" />
            </div>
            <div className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-tight text-ink">
                SIYARAM
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-widest2 text-gold-600">
                Loans &amp; Finance
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`link-sweep text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'is-active text-ink' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 lg:block">
            <Magnetic strength={0.18}>
              <GoldButton compact onClick={(e) => handleNavClick(e, '#contact')}>
                Free Consultation
              </GoldButton>
            </Magnetic>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${contactInfo.phoneClean}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-gold-700 shadow-soft transition-colors hover:border-gold-500/60"
              aria-label="Call helpline"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink shadow-soft transition-colors hover:border-gold-500/60"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- Fullscreen mobile menu ---------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[80] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-[#FBF7EC]/[0.98] backdrop-blur-2xl" />
            {/* soft bridging glow */}
            <div className="pointer-events-none absolute -top-24 right-[-20%] h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[-20%] h-80 w-80 rounded-full bg-navy-400/15 blur-3xl" />

            <div className="relative flex h-full flex-col px-6 pb-10 pt-5">
              {/* Overlay top bar */}
              <div className="flex items-center justify-between pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-soft ring-1 ring-ink/[0.06]">
                    <img src="/logo.png" alt="Siyaram" className="h-full w-full object-contain" />
                  </div>
                  <span className="font-display text-base font-semibold text-ink">SIYARAM</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-gold-700 shadow-soft"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const id = link.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 26 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.055, duration: 0.6, ease: EASE }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-baseline justify-between border-b border-ink/[0.07] py-4"
                      >
                        <span
                          className={`font-display text-[1.7rem] leading-none transition-colors duration-300 ${
                            isActive ? 'text-gold-700' : 'text-ink group-hover:text-gold-700'
                          }`}
                        >
                          {link.name}
                        </span>
                        <span className="font-mono text-[10px] tracking-widest2 text-ink-muted/70">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
                className="space-y-3 pt-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                  Advisory Desk — 0% Customer Fees
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${contactInfo.phoneClean}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/70 py-3 text-xs font-semibold text-ink shadow-soft"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold-600" />
                    Call Desk
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsappClean}?text=${encodeURIComponent(
                      'Hello Siyaram Loans & Finance, I would like to inquire about a loan.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-xs font-semibold text-white shadow-soft"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
