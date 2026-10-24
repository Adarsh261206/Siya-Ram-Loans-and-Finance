import React from 'react';
import { Home, RefreshCw, Wallet, Layers, Building2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { loanSolutions } from '../data/loanData';

const iconMap = {
  Home: Home,
  RefreshCw: RefreshCw,
  Wallet: Wallet,
  Layers: Layers,
  Building2: Building2,
  House: Home,
};

export default function LoanSolutions({ onSelectLoan }) {
  const handleCardClick = (title) => {
    if (onSelectLoan) {
      onSelectLoan(title);
    }
    const target = document.getElementById('contact');
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
    <section id="loan-solutions" className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-royal-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/50 border border-royal-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Institutional Financing Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Comprehensive <span className="text-gradient-gold">Loan Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From new property purchases to strategic balance transfers and MSME business loans, our 270+ institutional network connects you to optimal bank rate structures.
          </p>
        </div>

        {/* 6 Service Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loanSolutions.map((item) => {
            const IconComp = iconMap[item.icon] || Home;

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl p-7 bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-700/80 hover:border-royal-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-royal-500 via-amber-400 to-royal-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category Pill & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {item.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-royal-600/20 border border-royal-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 transition-all shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white mb-2.5 group-hover:text-amber-300 transition-colors font-heading">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <div className="pt-4 border-t border-navy-800">
                  <button
                    type="button"
                    onClick={() => handleCardClick(item.title)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 group-hover:text-navy-950 bg-white/5 group-hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Check Options & Rates</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Route note */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-navy-900/90 via-navy-850 to-navy-900/90 border border-royal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a customized loan structure or top-up?</h4>
              <p className="text-xs text-slate-400">Our loan specialists assess pan-India proposals across 270+ institutional lenders with 0% fees.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCardClick('Other')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 font-bold text-xs shadow-md transition-all"
          >
            Custom Loan Query
          </button>
        </div>

      </div>
    </section>
  );
}
