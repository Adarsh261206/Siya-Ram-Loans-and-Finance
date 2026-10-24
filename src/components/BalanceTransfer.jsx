import React from 'react';
import { Home, RefreshCw, CheckCircle2, ArrowRight, TrendingDown, Percent, Sparkles, ShieldCheck, Calculator, AlertCircle, ArrowDownRight, Layers } from 'lucide-react';
import { balanceTransferOptions, personalLoanExample } from '../data/loanData';

export default function BalanceTransfer({ onSelectLoan }) {
  const handleSelect = (category) => {
    if (onSelectLoan) {
      onSelectLoan(category);
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

  const scrollToCalculator = () => {
    const target = document.getElementById('savings-calculator');
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
    <section id="balance-transfer" className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Decorative background lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-royal-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Core Balance Transfer Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Strategic <span className="text-gradient-gold">Balance Transfer</span> Solutions
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-royal-300 font-heading">
            Optimize Your Existing Liabilities & Expand Monthly Cash Flow
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Transfer your ongoing liability to premier banking and financial institutions with competitive interest rate benchmarks and 0% customer fees.
          </p>
        </div>

        {/* Two Major Highlighted Balance Transfer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {balanceTransferOptions.map((opt) => {
            const isHome = opt.id === 'home-loan';

            return (
              <div
                key={opt.id}
                className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-royal-500/30 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Top subtle highlight gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl transition-opacity ${
                  isHome ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500' : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-royal-500'
                }`} />

                <div>
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-md ${
                        isHome
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30 group-hover:bg-amber-400/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 group-hover:bg-emerald-400/30'
                      }`}>
                        {isHome ? <Home className="w-7 h-7" /> : <RefreshCw className="w-7 h-7" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          {isHome ? 'Mortgage Refinancing' : 'Debt Optimization'}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">{opt.title}</h3>
                      </div>
                    </div>

                    <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {opt.badge}
                    </span>
                  </div>

                  {/* Subtitle & Marketing Message */}
                  <div className="mb-5">
                    <div className="text-sm font-semibold text-royal-200 font-heading">
                      {opt.subtitle}
                    </div>
                    <div className="text-xs font-bold text-amber-400 mt-1 uppercase tracking-wide">
                      {opt.marketingMessage}
                    </div>
                  </div>

                  {/* Highlight Institutional Baseline Banner */}
                  <div className="p-4 rounded-2xl bg-navy-950/90 border border-navy-700/80 mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Institutional Baseline</div>
                      <div className="text-base sm:text-lg font-black text-amber-400 font-heading mt-0.5">
                        {opt.highlight}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold text-sm">
                      <Percent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Client Benefits:
                    </div>
                    <ul className="space-y-3">
                      {opt.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs (Primary & Secondary as per Requirement 4) */}
                <div className="pt-4 border-t border-navy-800 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleSelect(opt.category)}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg ${
                      isHome
                        ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 shadow-glow-gold'
                        : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 shadow-md font-extrabold'
                    }`}
                  >
                    <span>{opt.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToCalculator}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-royal-400/50 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5 text-amber-400" />
                    <span>{opt.calculatorCta}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Example Section (Requirement 5) */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-900 border border-royal-500/30 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-700/80 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center shrink-0">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Illustrative Example</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading">
                  {personalLoanExample.heading}
                </h3>
              </div>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-royal-700/40 text-royal-200 border border-royal-500/30 w-fit">
              Personal Loan Transfer Scenario
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-700/80">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Existing Outstanding Loan</div>
              <div className="text-2xl font-black text-white font-mono mt-1">
                {personalLoanExample.outstandingAmount}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Existing Personal Loan Balance</div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-red-500/20">
              <div className="text-[11px] text-red-300 uppercase tracking-wider font-semibold">Current ROI</div>
              <div className="text-2xl font-black text-red-400 font-mono mt-1">
                {personalLoanExample.currentROI}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Typical Existing Rate</div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-emerald-500/30">
              <div className="text-[11px] text-emerald-300 uppercase tracking-wider font-semibold">Potential New ROI</div>
              <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                {personalLoanExample.potentialROI}
              </div>
              <div className="text-[10px] text-emerald-400/80 font-bold mt-0.5">Potential 4.00% ROI Spread</div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed bg-navy-950/60 p-4 rounded-xl border border-navy-800">
            <p>
              <strong className="text-white">Explanation:</strong> {personalLoanExample.explanation}
            </p>
            <p className="text-slate-400">
              <strong className="text-amber-300">Important Note:</strong> {personalLoanExample.disclaimer}
            </p>
          </div>
        </div>

        {/* Mandatory Financial Disclaimer (Requirement 3) */}
        <div className="mt-8 text-center text-xs text-slate-400 max-w-3xl mx-auto flex items-start justify-center gap-2 p-3 rounded-xl bg-navy-950/50 border border-navy-800/80">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Regulatory Disclaimer:</strong> {personalLoanExample.generalDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
