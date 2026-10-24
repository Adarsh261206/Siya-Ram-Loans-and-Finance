import React from 'react';
import { ShieldCheck, Building2, Eye, BadgeCheck, Info } from 'lucide-react';
import { trustGuaranteeFeatures, cibilInfo } from '../data/loanData';
import { SectionHeading, Reveal, Stagger, StaggerItem, GoldButton, LineReveal } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

const iconMap = { ShieldCheck, Building2, Eye, BadgeCheck };

export default function TrustGuarantee() {
  return (
    <section className="relative overflow-hidden text-ink">

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <SectionHeading
          tone="light"
          eyebrow="Zero-Cost Financial Advisory"
          number="01"
          title={
            <LineReveal delay={0.05}>
              The Zero-Cost <em className="text-gradient-gold italic">Trust Guarantee</em>
            </LineReveal>
          }
          titleClassName="max-w-3xl"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ------------- Left: monumental statement ------------- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36">
              <Reveal>
                <div className="font-display text-[7.5rem] leading-[0.85] tracking-[-0.03em] text-navy-800 sm:text-[9.5rem]">
                  0<span className="text-gradient-gold">%</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                  Fees From Customers.
                  <span className="block text-outline mt-1">At Every Step.</span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-md border-l-2 border-gold-400 pl-5 text-sm italic leading-relaxed text-ink-soft sm:text-base">
                  “Our professional consulting, comprehensive profile preparation, and institutional
                  matching are <span className="font-semibold not-italic text-ink">100% free for the client</span>.”
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9">
                  <GoldButton
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId('contact');
                    }}
                  >
                    Get Free Consultation
                  </GoldButton>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ------------- Right: manifest rows ------------- */}
          <div className="lg:col-span-7">
            <Stagger className="border-b border-ink/10" gap={0.11}>
              {trustGuaranteeFeatures.map((item) => {
                const Icon = iconMap[item.icon] || ShieldCheck;
                return (
                  <StaggerItem key={item.number}>
                    <div className="group grid cursor-default grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-ink/10 py-7 transition-all duration-500 hover:pl-2 sm:grid-cols-[3rem_3rem_1fr] sm:items-start sm:py-8">
                      <span className="font-mono text-xs tracking-widest text-gold-600">
                        {item.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-800/15 bg-navy-800/[0.05] text-navy-800 transition-all duration-500 group-hover:border-gold-500/50 group-hover:bg-gold-400/15 group-hover:text-gold-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-navy-800 sm:text-2xl">
                            {item.title}
                          </h3>
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted">
                            {item.badge}
                          </span>
                        </div>
                        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>

        {/* ------------- CIBIL note ------------- */}
        <Reveal className="mt-20" y={36}>
          <div className="relative overflow-hidden rounded-3xl border border-ink/[0.08] bg-[#F8F5EE] p-7 sm:p-10">
            <div className="pointer-events-none absolute bottom-6 right-4 hidden rotate-[10deg] rounded-lg border-2 border-gold-600/40 px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-widest2 text-gold-700/80 lg:block lg:right-8">
              0% Fees · Verified
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded bg-navy-800 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest2 text-cream-100">
                    {cibilInfo.cardTitle}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
                    {cibilInfo.cardSubtitle}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">{cibilInfo.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{cibilInfo.supportingText}</p>
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  {cibilInfo.disclaimer}
                </p>
              </div>

              <div className="shrink-0 lg:pt-2">
                <GoldButton
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('contact');
                  }}
                >
                  Consult Loan Profile
                </GoldButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
