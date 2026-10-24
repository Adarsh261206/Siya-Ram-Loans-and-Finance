import React, { useState } from 'react';
import { Landmark, Building2, Home, Coins, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { partnerInstitutions, psuBanks, majorPrivateBanks, nbfcInstitutions } from '../data/loanData';
import BankLogoItem, { bankLogoComponents } from './BankLogos';

export default function Partners() {
  const [filter, setFilter] = useState('all'); // 'all' | 'psu' | 'private' | 'nbfc'

  // Marquee list combining top banks
  const marqueeBanks = [
    ...psuBanks.slice(0, 6),
    ...majorPrivateBanks.slice(0, 5),
    ...nbfcInstitutions.slice(0, 5)
  ];

  return (
    <section id="partners" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-royal-700/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-royal-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Institutional Banking Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Banking & <span className="text-gradient-gold">Financial Institutions</span>
          </h2>

          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-navy-950/80 border border-royal-500/30 shadow-lg">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">270+</span>
            <span className="text-sm sm:text-base font-semibold text-slate-200">
              Institutional Network Reach Across India
            </span>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Loan options may be available through our institutional network of public sector banks, scheduled commercial lenders, and premier housing finance corporations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CONTINUOUS LOGO MARQUEE (Subtle, professional infinite scroll)           */}
        {/* ========================================================================= */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-navy-950/60 border border-navy-800/80 py-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...marqueeBanks, ...marqueeBanks].map((bank, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white text-slate-900 shadow-sm hover:shadow-glow hover:scale-105 transition-all shrink-0 h-12"
              >
                <BankLogoItem code={bank.short} name={bank.name} className="h-6 w-auto max-w-[130px]" />
              </div>
            ))}
          </div>
        </div>

        {/* 4 Category Architecture Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {partnerInstitutions.map((cat, idx) => {
            const icons = [Landmark, Building2, Home, Coins];
            const Icon = icons[idx] || Landmark;
            const accents = [
              "border-amber-500/40 text-amber-400 bg-amber-500/10",
              "border-blue-500/40 text-blue-400 bg-blue-500/10",
              "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
              "border-purple-500/40 text-purple-400 bg-purple-500/10"
            ];
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-navy-950/70 border border-navy-700/80 hover:border-royal-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${accents[idx]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Tier {cat.order}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{cat.type}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{cat.count}</p>
                </div>
                <div className="pt-3 mt-4 border-t border-navy-800 text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Institutional Reach</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 01. GOVERNMENT / PUBLIC SECTOR BANKS (MUST APPEAR FIRST - Req 7 & 9)    */}
        {/* ========================================================================= */}
        <div className="mb-14 bg-navy-950/90 rounded-3xl p-6 sm:p-8 border-2 border-royal-500/40 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-amber-400 text-navy-950 font-black text-sm flex items-center justify-center font-mono shrink-0 shadow-glow-gold">
                01
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block font-heading">
                  Priority Category
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  Government & Public Sector Banking Network
                </h3>
              </div>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-royal-700/40 text-royal-200 border border-royal-500/40 w-fit font-medium">
              Top 10 PSU Nationalized Banks
            </span>
          </div>

          <p className="text-xs text-slate-300 mb-6">
            Leading public sector undertaking (PSU) banks offering sovereign trust, stable guidelines, and competitive baseline rates:
          </p>

          {/* Grid of PSU Banks with Authentic Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {psuBanks.map((bank, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-navy-900/90 border border-navy-700/80 hover:border-amber-400/60 hover:bg-navy-850 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Clean White Logo Container */}
                  <div className="h-16 w-full rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md mb-3 group-hover:scale-105 transition-transform">
                    <BankLogoItem code={bank.short} name={bank.name} className="h-9 w-auto max-w-full object-contain" />
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {bank.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-navy-800 text-[10px] text-slate-400">
                  {bank.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 02. PRIVATE BANKS & FINANCIAL INSTITUTIONS (Show below PSU - Req 7 & 9)   */}
        {/* ========================================================================= */}
        <div className="mb-14 bg-navy-950/80 rounded-3xl p-6 sm:p-8 border border-navy-700/80 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-royal-700 text-white font-black text-sm flex items-center justify-center font-mono shrink-0 shadow-glow">
                02
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-heading">
                  Secondary Category
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  Private Banks & Financial Institutions
                </h3>
              </div>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 w-fit">
              Scheduled Commercial Banks
            </span>
          </div>

          <p className="text-xs text-slate-300 mb-6">
            Leading scheduled private commercial lenders offering digital workflows, rapid sanctions, and customized structures:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorPrivateBanks.map((bank, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-royal-400/50 hover:bg-navy-850 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Clean White Logo Container */}
                  <div className="h-16 w-full rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md mb-3 group-hover:scale-105 transition-transform">
                    <BankLogoItem code={bank.short} name={bank.name} className="h-9 w-auto max-w-full object-contain" />
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {bank.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-navy-800 text-[10px] text-slate-400">
                  {bank.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 03. HOUSING FINANCE & PREMIER NBFCs (Req 9)                              */}
        {/* ========================================================================= */}
        <div className="bg-navy-950/70 rounded-3xl p-6 sm:p-8 border border-navy-800/80 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 font-black text-sm flex items-center justify-center font-mono shrink-0">
                03
              </span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-heading">
                  Specialized Mortgage & MSME
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  Housing Finance Companies & Premier NBFCs
                </h3>
              </div>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700 w-fit">
              HFCs & Approved NBFCs
            </span>
          </div>

          <p className="text-xs text-slate-300 mb-6">
            Specialized home loan providers and prominent non-banking financial companies with high loan-to-value solutions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nbfcInstitutions.map((inst, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-slate-600 hover:bg-navy-850 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Clean White Logo Container */}
                  <div className="h-16 w-full rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md mb-3 group-hover:scale-105 transition-transform">
                    <BankLogoItem code={inst.short} name={inst.name} className="h-9 w-auto max-w-full object-contain" />
                  </div>

                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {inst.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-navy-800 text-[10px] text-slate-400">
                  {inst.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Compliance & Neutral Disclaimers (Requirement 8) */}
          <div className="mt-8 pt-5 border-t border-navy-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct institutional access across 270+ licensed partner channels without customer fees.</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-[11px] text-slate-500">
              Loan options may be available through our institutional network subject to lender guidelines.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
