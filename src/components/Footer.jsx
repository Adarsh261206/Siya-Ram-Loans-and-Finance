import React from 'react';
import { Landmark, Phone, Mail, User, ShieldCheck, ArrowUp, ChevronRight } from 'lucide-react';
import { contactInfo, navLinks } from '../data/loanData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 relative z-20 pb-20 sm:pb-8">
      {/* Top Banner inside footer */}
      <div className="border-b border-navy-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center font-bold shadow-glow-gold shrink-0 overflow-hidden">
              <img
                src="/logo.png"
                alt="Siyaram Loans & Finance"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white font-heading tracking-tight block">
                SIYARAM LOANS & FINANCE
              </span>
              <span className="text-xs text-amber-300 font-semibold">
                Empowering Your Dreams, Financing Your Future.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              0% Customer Fees
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-royal-500/15 text-royal-300 border border-royal-500/30">
              270+ Partner Banks
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-navy-900 border border-navy-700 hover:border-amber-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">About Siyaram</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Empowering Your Dreams, Financing Your Future. Professional loan consulting across India with 0% customer fees, matching borrowers with optimal institutional credit facilities.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong>Founded:</strong> Since 2012</div>
              <div><strong>Network:</strong> 270+ Banking & Financial Partners</div>
              <div><strong>Disbursement:</strong> ₹10,000 Cr+</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-royal-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Loan Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Loan Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: "Home Loan", href: "#loan-solutions" },
                { name: "Home Loan Balance Transfer", href: "#balance-transfer" },
                { name: "Personal Loan", href: "#loan-solutions" },
                { name: "Personal Loan Balance Transfer", href: "#balance-transfer" },
                { name: "Business Loan", href: "#loan-solutions" },
                { name: "Fresh Property Purchase", href: "#loan-solutions" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-royal-500" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Advisory Desk</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">Proprietor</div>
                  <div className="font-bold text-white text-sm">{contactInfo.proprietor}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">Helplines</div>
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${contactInfo.phoneClean}`} className="font-bold text-white hover:text-amber-300 transition-colors">
                      {contactInfo.phone}
                    </a>
                    <a href={`tel:${contactInfo.phone2Clean}`} className="font-bold text-white hover:text-amber-300 transition-colors">
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-royal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400">Official Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="font-medium text-slate-200 hover:text-amber-300 transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="border-t border-navy-900 py-6 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 Siyaram Loans & Finance. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Empowering Your Dreams, Financing Your Future.</span>
            <span>•</span>
            <span className="text-amber-400/80">0% Customer Fees Model</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
