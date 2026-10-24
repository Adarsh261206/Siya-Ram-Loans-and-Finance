import React from 'react';
import {
  Home,
  RefreshCw,
  Wallet,
  Layers,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { loanSolutions } from '../data/loanData';
import { SectionHeading, Reveal, Stagger, StaggerItem, GoldButton } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

const iconMap = { Home, RefreshCw, Wallet, Layers, Building2, House: Home };

export default function LoanSolutions({ onSelectLoan }) {
  const handleCardClick = (title) => {
    if (onSelectLoan) onSelectLoan(title);
    scrollToId('contact');
  };

  return (
    <section id="loan-solutions" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Institutional Financing Solutions"
            number="05"
            title={
              <>
                Comprehensive <em className="text-gradient-gold italic">Loan Solutions</em>
              </>
            }
            titleClassName="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft lg:pb-2">
              From new property purchases to strategic balance transfers and MSME business loans, our
              270+ institutional network connects you to optimal bank rate structures.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <Stagger className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {loanSolutions.map((item, idx) => {
            const Icon = iconMap[item.icon] || Home;
            return (
              <StaggerItem key={item.id}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-ink/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft">
                  <div className="relative flex items-baseline justify-between">
                    <span className="font-display text-lg text-ink-muted/50">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted transition-colors duration-500 group-hover:text-gold-700">
                      {item.badge}
                    </span>
                  </div>

                  <div className="relative mt-7 flex h-10 w-10 items-center justify-center text-gold-600 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <div className="relative mt-6">
                    <div className="font-mono text-[9px] uppercase tracking-widest2 text-gold-600">
                      {item.category}
                    </div>
                    <h3 className="mt-2 font-display text-[1.4rem] leading-snug text-ink transition-colors duration-300 group-hover:text-navy-800">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                  </div>

                  <div className="relative mt-5 flex-1 space-y-2.5">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600/90" />
                        <span className="text-xs text-ink-soft">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCardClick(item.title)}
                    className="relative mt-7 flex w-full items-center justify-between border-t border-ink/[0.07] pt-5 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted transition-colors duration-300 group-hover:text-gold-700"
                  >
                    Check Options &amp; Rates
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Custom query strip */}
        <Reveal className="mt-16" y={28}>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink/[0.07] bg-white/70 p-7 shadow-soft sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/40 bg-gold-400/15 text-gold-700">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-lg text-ink">
                  Need a customized loan structure or top-up?
                </h4>
                <p className="mt-1 max-w-xl text-xs leading-relaxed text-ink-soft">
                  Our loan specialists assess pan-India proposals across 270+ institutional lenders
                  with 0% customer fees.
                </p>
              </div>
            </div>
            <GoldButton compact onClick={() => handleCardClick('Other')}>
              Custom Loan Query
            </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
