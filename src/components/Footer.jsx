import React from 'react';
import { Phone, Mail, ArrowUp, ArrowUpRight } from 'lucide-react';
import { contactInfo, navLinks } from '../data/loanData';
import { Marquee } from './ui/Primitives';
import { scrollToId, scrollToTop } from '../lib/scroll';

const loanLinks = [
  { name: 'Home Loan', href: '#loan-solutions' },
  { name: 'Home Loan Balance Transfer', href: '#balance-transfer' },
  { name: 'Personal Loan', href: '#loan-solutions' },
  { name: 'Personal Loan Balance Transfer', href: '#balance-transfer' },
  { name: 'Business Loan', href: '#loan-solutions' },
  { name: 'Fresh Property Purchase', href: '#loan-solutions' },
];

export default function Footer() {
  const handleLink = (e, href) => {
    e.preventDefault();
    scrollToId(href.substring(1));
  };

  return (
    <footer className="relative z-20">
      {/* Oversized wordmark marquee */}
      <div className="py-10 sm:py-12">
        <Marquee speed="slow" pauseOnHover={false}>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="mx-10 whitespace-nowrap font-display text-5xl text-outline sm:text-6xl lg:text-7xl"
            >
              Siyaram Loans &amp; Finance{' '}
              <span className="align-middle text-3xl text-gold-500/60 lg:text-4xl">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Brand row */}
      <div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 py-10 md:flex-row lg:px-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-soft ring-1 ring-ink/[0.06]">
              <img
                src="/logo.png"
                alt="Siyaram Loans & Finance — logo"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-xl tracking-tight text-ink">
                SIYARAM LOANS &amp; FINANCE
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
                Empowering Your Dreams, Financing Your Future
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-emerald-600/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest2 text-emerald-700">
              0% Customer Fees
            </span>
            <span className="hidden rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-soft sm:inline">
              270+ Partner Banks
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-gold-700 shadow-soft transition-all duration-300 hover:border-gold-500/60 hover:shadow-gold-soft"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
              About Siyaram
            </h4>
            <p className="mt-5 text-xs leading-relaxed text-ink-soft">
              Professional loan consulting across India with 0% customer fees — matching borrowers
              with optimal institutional credit facilities.
            </p>
            <div className="mt-6 space-y-2.5 pt-5 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              <div className="flex justify-between">
                <span>Founded</span>
                <span className="text-ink">Since 2012</span>
              </div>
              <div className="flex justify-between">
                <span>Network</span>
                <span className="text-ink">270+ Partners</span>
              </div>
              <div className="flex justify-between">
                <span>Disbursement</span>
                <span className="text-gold-700">₹10,000 Cr+</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="group flex items-center gap-2 text-xs text-ink-soft transition-colors duration-300 hover:text-gold-700"
                  >
                    <span className="h-px w-3 bg-navy-800/20 transition-all duration-300 group-hover:w-5 group-hover:bg-gold-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan solutions */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
              Loan Solutions
            </h4>
            <ul className="mt-5 space-y-3">
              {loanLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLink(e, item.href)}
                    className="group flex items-center gap-2 text-xs text-ink-soft transition-colors duration-300 hover:text-gold-700"
                  >
                    <span className="h-px w-3 bg-navy-800/20 transition-all duration-300 group-hover:w-5 group-hover:bg-gold-500" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory desk */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
              Advisory Desk
            </h4>
            <div className="mt-5 space-y-5">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-ink-muted">Proprietor</div>
                <div className="mt-1 font-display text-base text-ink">{contactInfo.proprietor}</div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-ink-muted">Helplines</div>
                <div className="mt-2 flex flex-col gap-2">
                  {[contactInfo.phone, contactInfo.phone2].map((num, i) => (
                    <a
                      key={num}
                      href={`tel:${i === 0 ? contactInfo.phoneClean : contactInfo.phone2Clean}`}
                      className="group flex items-center gap-2 font-mono text-xs font-semibold text-ink transition-colors hover:text-gold-700"
                    >
                      <Phone className="h-3.5 w-3.5 text-gold-600" />
                      {num}
                      <ArrowUpRight className="h-3 w-3 text-ink-muted/50 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-ink-muted">Email</div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1.5 flex items-center gap-2 break-all text-xs text-ink-soft transition-colors hover:text-gold-700"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted sm:flex-row lg:px-8">
          <span>© 2026 Siyaram Loans &amp; Finance — All Rights Reserved</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Empowering Your Dreams, Financing Your Future</span>
            <span className="text-gold-700">0% Customer Fees Model</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
