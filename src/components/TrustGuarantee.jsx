import React from 'react';
import { ShieldCheck, Building2, Eye, BadgeCheck, CheckCircle, Sparkles, CreditCard, Info } from 'lucide-react';
import { trustGuaranteeFeatures, cibilInfo } from '../data/loanData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Building2: Building2,
  Eye: Eye,
  BadgeCheck: BadgeCheck,
};

export default function TrustGuarantee() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Decorative ambient elements */}
      <div className="absolute -top-32 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-80 h-80 bg-royal-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Zero-Cost Financial Advisory
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            The Zero-Cost <span className="text-gradient-gold">Trust Guarantee</span>
          </h2>

          {/* Large Highlight */}
          <div className="my-6 inline-block">
            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border-2 border-amber-400/50 shadow-glow-gold">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-amber-300 uppercase font-heading">
                0% Fees From Customers
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            “Our professional consulting, comprehensive profile preparation, and institutional matching are <span className="text-white font-semibold underline decoration-amber-400/60 decoration-2">100% free for the client</span>.”
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustGuaranteeFeatures.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl p-7 bg-navy-900/80 border border-navy-700/80 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-600 group-hover:text-amber-400/80 transition-colors font-heading">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-slate-300 group-hover:bg-amber-400/20 group-hover:text-amber-300 transition-colors border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-royal-600/20 border border-royal-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-1.5 text-xs font-semibold text-amber-400/90">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Policy</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated CIBIL Cases Highlight Card (Requirement 13) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-900/90 via-navy-850 to-navy-900/90 border border-royal-500/40 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <CreditCard className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-royal-600/30 text-royal-200 border border-royal-500/30">
                  {cibilInfo.cardTitle}
                </span>
                <span className="text-xs font-bold text-amber-400">
                  {cibilInfo.cardSubtitle}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                {cibilInfo.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {cibilInfo.supportingText}
              </p>
              <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{cibilInfo.disclaimer}</span>
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <span>Consult Loan Profile</span>
            <CheckCircle className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
