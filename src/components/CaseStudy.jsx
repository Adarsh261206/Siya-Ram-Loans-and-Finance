import React from 'react';
import { motion } from 'framer-motion';
import { Info, BarChart3 } from 'lucide-react';
import { caseStudyData } from '../data/loanData';
import { SectionHeading, Reveal, Counter, LineReveal, EASE } from './ui/Primitives';

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden text-ink">

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Verified Financial Model"
          number="04"
          title={
            <LineReveal delay={0.05}>
              Financial Impact: <em className="text-gradient-gold italic">Case Study</em>
            </LineReveal>
          }
          className="max-w-3xl"
        />

        <Reveal delay={0.15} className="mx-auto mt-6 max-w-2xl text-center" y={18}>
          <p className="font-display text-lg italic text-ink-soft sm:text-xl">
            “{caseStudyData.quote}”
          </p>
        </Reveal>

        {/* ---------------- Statement document ---------------- */}
        <Reveal className="mx-auto mt-16 max-w-5xl" y={44}>
          <div className="relative overflow-hidden rounded-3xl border border-ink/[0.08] bg-[#FBF7EC] shadow-lift-light">
            {/* Document header */}
            <div className="flex flex-col gap-5 border-b border-ink/10 px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-400/10 text-gold-700">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest2 text-gold-700">
                    Statement of Savings
                  </div>
                  <h3 className="mt-1 font-display text-xl text-ink sm:text-2xl">
                    Home Loan Balance Transfer Example
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    20-year repayment horizon · ₹50 lakh principal
                  </p>
                </div>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                  Total Potential Savings
                </div>
                <div className="text-gradient-gold mt-1 font-display text-4xl leading-none sm:text-5xl">
                  <Counter to={1493000} prefix="₹" duration={2.4} />
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="grid divide-y divide-ink/10 border-b border-ink/10 md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Baseline */}
              <div className="px-7 py-8 sm:px-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                    Baseline Lender
                  </span>
                  <span className="rounded-full border border-red-600/20 bg-red-500/[0.07] px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-red-700">
                    Standard Market Bank
                  </span>
                </div>
                <div className="mt-6 font-mono text-4xl font-semibold text-ink">9.00%</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-ink-muted">
                  Assumed rate of interest
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-dotted border-ink/20 pt-4">
                  <span className="text-xs text-ink-muted">Total interest · 20 yrs</span>
                  <span className="font-mono text-lg font-semibold text-red-600">₹57,96,000</span>
                </div>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.07]">
                  <motion.div
                    className="h-full w-full rounded-full bg-red-500/70"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.4, ease: EASE }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </div>

              {/* Optimized */}
              <div className="bg-emerald-500/[0.04] px-7 py-8 sm:px-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                    Optimized Solution
                  </span>
                  <span className="rounded-full border border-emerald-600/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-emerald-700">
                    Institutional Match
                  </span>
                </div>
                <div className="mt-6 font-mono text-4xl font-semibold text-emerald-700">7.00%</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-ink-muted">
                  Optimized bank rate · <span className="font-bold text-emerald-700">−2.00% drop</span>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-dotted border-ink/20 pt-4">
                  <span className="text-xs text-ink-muted">Total interest · 20 yrs</span>
                  <span className="font-mono text-lg font-semibold text-emerald-700">₹43,03,000</span>
                </div>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.07]">
                  <motion.div
                    className="h-full w-[74%] rounded-full bg-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </div>
            </div>

            {/* Ledger */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/10 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                    <th scope="col" className="px-7 py-4 font-medium sm:px-10">
                      Lending Parameter
                    </th>
                    <th scope="col" className="px-5 py-4 text-right font-medium text-red-600/80">
                      Standard Bank
                    </th>
                    <th scope="col" className="px-5 py-4 text-right font-medium text-emerald-700/80">
                      Optimized Match
                    </th>
                    <th scope="col" className="px-7 py-4 text-right font-medium text-gold-700 sm:px-10">
                      Total Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudyData.parameters.map((row) => (
                    <tr
                      key={row.param}
                      className={`border-b border-dotted border-ink/15 ${
                        row.isHighlight ? 'bg-gold-400/[0.07]' : ''
                      }`}
                    >
                      <td className="px-7 py-4 font-medium text-ink sm:px-10">{row.param}</td>
                      <td className="px-5 py-4 text-right font-mono text-ink-soft">{row.market}</td>
                      <td className="px-5 py-4 text-right font-mono text-ink-soft">{row.siyaram}</td>
                      <td className="px-7 py-4 text-right font-mono font-semibold text-gold-700 sm:px-10">
                        {row.diff || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-ink/[0.03]">
                    <td className="px-7 py-4 font-display text-base text-ink sm:px-10">
                      Total Outflow · 20 Years
                    </td>
                    <td className="px-5 py-4 text-right font-mono font-semibold text-red-600">
                      {caseStudyData.standardBankTotal}
                    </td>
                    <td className="px-5 py-4 text-right font-mono font-semibold text-emerald-700">
                      {caseStudyData.siyaramTotal}
                    </td>
                    <td className="px-7 py-4 text-right font-mono text-base font-bold text-gold-700 sm:px-10">
                      {caseStudyData.totalSavings} saved
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Source notice */}
            <div className="flex items-start gap-3 border-t border-ink/10 px-7 py-5 sm:px-10">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              <p className="text-xs leading-relaxed text-ink-muted">
                <span className="font-semibold text-ink-soft">Source Notice:</span>{' '}
                {caseStudyData.disclaimer}
              </p>
            </div>

            {/* Stamp */}
            <div className="pointer-events-none absolute -right-4 top-24 hidden rotate-[12deg] rounded-lg border-2 border-gold-600/30 px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-widest2 text-gold-700/50 lg:block">
              Verified · Case Study
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
