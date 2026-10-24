import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  RefreshCw,
  CheckCircle2,
  TrendingDown,
  ShieldCheck,
  Calculator,
} from 'lucide-react';
import { balanceTransferOptions, personalLoanExample } from '../data/loanData';
import {
  SectionHeading,
  Reveal,
  Stagger,
  StaggerItem,
  GoldButton,
  GhostButton,
  LineReveal,
} from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

export default function BalanceTransfer({ onSelectLoan }) {
  const handleSelect = (category) => {
    if (onSelectLoan) onSelectLoan(category);
    scrollToId('contact');
  };

  return (
    <section id="balance-transfer" className="relative overflow-hidden text-ink">

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Core Balance Transfer Specialization"
          number="03"
          title={
            <LineReveal delay={0.05}>
              Strategic <em className="text-gradient-gold italic">Balance Transfer</em> Solutions
            </LineReveal>
          }
          lede="Optimize your existing liabilities and expand monthly cash flow. Transfer ongoing loans to premier banking and financial institutions with competitive interest-rate benchmarks — at 0% customer fees."
          className="max-w-3xl"
        />

        {/* Cards */}
        <Stagger className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2" gap={0.15}>
          {balanceTransferOptions.map((opt) => {
            const isHome = opt.id === 'home-loan';
            return (
              <StaggerItem key={opt.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={
                    isHome
                      ? 'relative flex h-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-navy-800 to-navy-900 text-white shadow-lift'
                      : 'relative flex h-full flex-col overflow-hidden rounded-[28px] border border-ink/[0.08] bg-[#FBF7EC] text-ink shadow-lift-light'
                  }
                >
                  {/* Top accent */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${
                      isHome ? 'from-gold-500 via-gold-300 to-gold-500' : 'from-navy-700 via-navy-400 to-navy-700'
                    }`}
                  />

                  <div className="flex flex-1 flex-col p-7 sm:p-9">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                            isHome
                              ? 'border-gold-400/30 bg-gold-400/10 text-gold-300'
                              : 'border-navy-800/15 bg-navy-800/[0.06] text-navy-800'
                          }`}
                        >
                          {isHome ? <Home className="h-6 w-6" /> : <RefreshCw className="h-6 w-6" />}
                        </div>
                        <div>
                          <div
                            className={`font-mono text-[9px] uppercase tracking-widest2 ${
                              isHome ? 'text-gold-400' : 'text-gold-700'
                            }`}
                          >
                            {isHome ? 'Mortgage Refinancing' : 'Debt Optimization'}
                          </div>
                          <h3 className="mt-1.5 font-display text-2xl leading-tight sm:text-[1.7rem]">
                            {opt.title}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] ${
                          isHome ? 'text-gold-300/80' : 'text-ink-muted'
                        }`}
                      >
                        {opt.badge}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <p className={`mt-6 text-sm font-medium ${isHome ? 'text-slate-300' : 'text-ink-soft'}`}>
                      {opt.subtitle}
                    </p>
                    <p
                      className={`mt-1.5 font-mono text-[10px] uppercase tracking-widest2 ${
                        isHome ? 'text-gold-300' : 'text-gold-700'
                      }`}
                    >
                      {opt.marketingMessage}
                    </p>

                    {/* Baseline */}
                    <div
                      className={`mt-7 border-t pt-5 ${
                        isHome ? 'border-white/10' : 'border-ink/[0.08]'
                      }`}
                    >
                      <div
                        className={`font-mono text-[9px] uppercase tracking-[0.2em] ${
                          isHome ? 'text-slate-500' : 'text-ink-muted'
                        }`}
                      >
                        Institutional Baseline
                      </div>
                      <div
                        className={`mt-1.5 font-display text-xl ${
                          isHome ? 'text-gold-300' : 'text-navy-800'
                        }`}
                      >
                        {opt.highlight}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-7 flex-1">
                      <div
                        className={`font-mono text-[9px] uppercase tracking-widest2 ${
                          isHome ? 'text-slate-500' : 'text-ink-muted'
                        }`}
                      >
                        Key Client Benefits
                      </div>
                      <ul className="mt-4 space-y-3">
                        {opt.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3">
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                isHome ? 'text-emerald-400' : 'text-emerald-600'
                              }`}
                            />
                            <span
                              className={`text-sm leading-relaxed ${
                                isHome ? 'text-slate-300' : 'text-ink-soft'
                              }`}
                            >
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div
                      className={`mt-8 space-y-3 border-t pt-6 ${
                        isHome ? 'border-white/10' : 'border-ink/10'
                      }`}
                    >
                      <GoldButton
                        className="w-full"
                        onClick={() => handleSelect(opt.category)}
                      >
                        {opt.ctaText}
                      </GoldButton>
                      <GhostButton
                        tone={isHome ? 'dark' : 'light'}
                        className="w-full"
                        onClick={() => scrollToId('savings-calculator')}
                      >
                        <Calculator className="mr-1 inline h-3.5 w-3.5" />
                        {opt.calculatorCta}
                      </GhostButton>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Example ledger */}
        <Reveal className="mx-auto mt-20 max-w-4xl" y={40}>
          <div className="overflow-hidden rounded-3xl border border-ink/[0.08] bg-[#FBF7EC] shadow-lift-light">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-7 py-5 sm:px-9">
              <div className="flex items-center gap-3.5">
                <TrendingDown className="h-5 w-5 text-gold-600" />
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest2 text-gold-700">
                    Illustrative Example
                  </div>
                  <h3 className="mt-0.5 font-display text-xl text-ink">
                    {personalLoanExample.heading}
                  </h3>
                </div>
              </div>
              <span className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                Personal Loan Transfer Scenario
              </span>
            </div>

            <div className="grid divide-y divide-ink/10 border-b border-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="px-7 py-6">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                  Existing Outstanding
                </div>
                <div className="mt-2 font-mono text-2xl font-semibold text-ink">
                  {personalLoanExample.outstandingAmount}
                </div>
                <div className="mt-1 text-[10px] text-ink-muted">Existing personal loan balance</div>
              </div>
              <div className="bg-red-500/[0.04] px-7 py-6">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-red-600/80">
                  Current ROI
                </div>
                <div className="mt-2 font-mono text-2xl font-semibold text-red-600">
                  {personalLoanExample.currentROI}
                </div>
                <div className="mt-1 text-[10px] text-ink-muted">Typical existing rate</div>
              </div>
              <div className="bg-emerald-500/[0.05] px-7 py-6">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-emerald-700/80">
                  Potential New ROI
                </div>
                <div className="mt-2 font-mono text-2xl font-semibold text-emerald-700">
                  {personalLoanExample.potentialROI}
                </div>
                <div className="mt-1 text-[10px] font-semibold text-emerald-700">
                  Potential 4.00% ROI spread
                </div>
              </div>
            </div>

            <div className="space-y-3 px-7 py-6 text-xs leading-relaxed text-ink-soft sm:px-9">
              <p>
                <strong className="text-ink">Explanation:</strong> {personalLoanExample.explanation}
              </p>
              <p className="text-ink-muted">
                <strong className="text-gold-700">Important Note:</strong>{' '}
                {personalLoanExample.disclaimer}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal className="mx-auto mt-10 max-w-3xl" y={20}>
          <div className="flex items-start justify-center gap-2.5 text-center">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <p className="text-xs leading-relaxed text-ink-muted">
              <strong className="text-ink-soft">Regulatory Disclaimer:</strong>{' '}
              {personalLoanExample.generalDisclaimer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
