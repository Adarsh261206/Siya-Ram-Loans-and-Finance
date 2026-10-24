import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, CheckCircle2, TrendingDown, FileSpreadsheet, ArrowUpRight } from 'lucide-react';
import { revenueModelSteps } from '../data/loanData';
import { SectionHeading, Reveal, EASE } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

const stepIcons = { Landmark, CheckCircle2, TrendingDown, FileSpreadsheet };

export default function RevenueModel() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % revenueModelSteps.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Clear Business Model"
            number="02"
            title={
              <>
                How Our <em className="text-gradient-gold italic">Revenue Model</em> Works
              </>
            }
            titleClassName="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft lg:pb-2">
              Wondering how our services remain 100% free for applicants? Here is the transparent,
              step-by-step breakdown of how institutional partner compensation works.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="relative mt-16 lg:mt-20">
          {/* Progress track */}
          <div className="absolute inset-x-0 top-0 hidden h-px bg-ink/10 lg:block" />
          <motion.div
            className="absolute left-0 top-0 hidden h-px bg-gradient-to-r from-gold-500 to-gold-400 lg:block"
            animate={{
              width: `${((activeStep + 1) / revenueModelSteps.length) * 100}%`,
            }}
            transition={{ duration: 0.9, ease: EASE }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4">
            {revenueModelSteps.map((step, idx) => {
              const Icon = stepIcons[step.icon] || Landmark;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.step}
                  role="group"
                  tabIndex={0}
                  aria-label={`Step ${step.step}: ${step.title}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onFocus={() => setActiveStep(idx)}
                  className={`group relative cursor-default border-t border-ink/[0.07] px-0 pb-9 pt-9 text-left outline-none transition-all duration-500 first:border-t-0 lg:border-l lg:border-t-0 lg:px-8 lg:pt-12 ${
                    idx === 0 ? 'lg:border-l-0' : ''
                  } ${
                    isActive
                      ? 'lg:bg-gradient-to-b lg:from-white/70 lg:to-transparent'
                      : 'lg:hover:bg-gradient-to-b lg:hover:from-white/40 lg:hover:to-transparent'
                  }`}
                >
                  {/* Marker */}
                  <span
                    className={`absolute -top-[3.5px] left-0 hidden h-1.5 w-1.5 rounded-full transition-all duration-500 lg:block ${
                      isActive ? 'scale-125 bg-gold-500 shadow-gold-soft' : 'bg-navy-800/20'
                    }`}
                  />

                  <span
                    className={`font-display text-5xl leading-none transition-colors duration-500 ${
                      isActive ? 'text-gold-600' : 'text-outline-navy'
                    }`}
                  >
                    {step.step}
                  </span>

                  <div
                    className={`mt-6 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500 ${
                      isActive
                        ? 'border-gold-500/50 bg-gold-400/15 text-gold-700'
                        : 'border-ink/10 bg-white/60 text-ink-muted group-hover:border-ink/20'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-display text-lg text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{step.description}</p>

                  <div className="mt-6 space-y-1.5 font-mono text-[10px] uppercase tracking-widest2">
                    <div className="text-ink-muted/80">Phase {step.step}</div>
                    <div
                      className={`transition-colors duration-500 ${
                        isActive ? 'text-gold-700' : 'text-ink-muted/80'
                      }`}
                    >
                      {step.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <Reveal className="mt-14" y={26}>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink/[0.07] bg-white/70 p-6 shadow-soft sm:flex-row sm:items-center sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-600/25 bg-emerald-500/10 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink">Direct Institutional Channel</h4>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                  You never receive an invoice, advisory fee, or surprise charge from Siyaram Loans
                  &amp; Finance.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => scrollToId('contact')}
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-gold-700 transition-colors hover:text-gold-600"
            >
              Consult Loan Desk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
