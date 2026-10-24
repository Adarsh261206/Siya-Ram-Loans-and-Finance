import React, { useState } from 'react';
import { Landmark, CheckCircle2, TrendingDown, FileSpreadsheet, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { revenueModelSteps } from '../data/loanData';

const stepIcons = {
  Landmark: Landmark,
  CheckCircle2: CheckCircle2,
  TrendingDown: TrendingDown,
  FileSpreadsheet: FileSpreadsheet,
};

export default function RevenueModel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-royal-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/50 border border-royal-500/30 text-royal-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Clear Business Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            How Our <span className="text-gradient-gold">Revenue Model</span> Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Wondering how our services remain 100% free for applicants? Here is the transparent step-by-step breakdown of how institutional partner compensation works.
          </p>
        </div>

        {/* Desktop Central Connected Line & 4 Steps */}
        <div className="relative">
          {/* Central connecting horizontal line (visible on lg screens) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-royal-600 via-amber-400 to-emerald-400 -translate-y-1/2 z-0 opacity-40" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {revenueModelSteps.map((step, idx) => {
              const IconComp = stepIcons[step.icon] || Landmark;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-navy-800 to-navy-950 border-2 border-amber-400 shadow-glow-gold scale-[1.02]'
                      : 'bg-navy-900/90 border border-navy-700/80 hover:border-royal-400/50 hover:bg-navy-850'
                  }`}
                >
                  <div>
                    {/* Top row with step number and badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl font-extrabold font-heading ${isSelected ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-400'}`}>
                        {step.step}
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isSelected ? 'bg-amber-400 text-navy-950' : 'bg-white/10 text-slate-300'}`}>
                        {step.highlight}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                      isSelected
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                        : 'bg-royal-600/20 text-royal-400 border border-royal-500/30'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Indicator bottom */}
                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Phase {step.step}</span>
                    <span className={`font-semibold transition-colors ${isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-white'}`}>
                      {isSelected ? 'Active Focus' : 'Click to inspect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-navy-950/80 border border-royal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Direct Institutional Channel</h4>
              <p className="text-xs text-slate-300">
                You never receive an invoice, advisory fee, or surprise charge from Siyaram Loans & Finance.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-royal-700/60 hover:bg-royal-600 text-white text-xs font-bold border border-royal-400/40 transition-all flex items-center gap-1.5"
          >
            <span>Consult Loan Desk</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
