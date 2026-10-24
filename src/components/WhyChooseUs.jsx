import React from 'react';
import {
  BadgePercent,
  Building2,
  Compass,
  History,
  SearchCheck,
  BadgeCheck,
  Landmark,
} from 'lucide-react';
import { whyChooseCards } from '../data/loanData';
import { SectionHeading, Reveal, Stagger, StaggerItem } from './ui/Primitives';

const iconMap = { BadgePercent, Building2, Compass, History, SearchCheck, BadgeCheck, Layers: Landmark };

const metrics = [
  { value: '2012', label: 'Rooted Since' },
  { value: '₹10,000 Cr+', label: 'Facilitated' },
  { value: '0%', label: 'Customer Fees' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden">
      {/* Vertical edge label */}
      <div className="absolute left-8 top-0 hidden h-full items-center xl:flex">
        <span className="rotate-180 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted/40 [writing-mode:vertical-rl]">
          Trusted Since 2012 — Pan-India Advisory
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36 xl:pl-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Competitive Advantages"
            number="06"
            title={
              <>
                Why Customers <em className="text-gradient-gold italic">Choose Siyaram</em>
              </>
            }
            titleClassName="max-w-2xl"
          />

          {/* Metrics */}
          <Reveal delay={0.2}>
            <div className="flex divide-x divide-ink/[0.08]">
              {metrics.map((m) => (
                <div key={m.label} className="px-6 first:pl-0 last:pr-0">
                  <div className="font-display text-2xl text-navy-800">{m.value}</div>
                  <div className="mt-1.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Rows */}
        <Stagger className="mt-16 grid grid-cols-1 gap-x-14 md:grid-cols-2" gap={0.09}>
          {whyChooseCards.map((item) => {
            const Icon = iconMap[item.icon] || Landmark;
            return (
              <StaggerItem key={item.number}>
                <div className="group relative border-t border-ink/[0.08] pb-4 pt-8 transition-all duration-500 hover:pl-3">
                  {/* Grow line on hover */}
                  <span className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest2 text-gold-600">
                        {item.number}
                      </span>
                      <h3 className="mt-3 font-display text-xl text-ink transition-colors duration-300 group-hover:text-navy-800 sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink/[0.08] bg-[#FFFDF8] text-ink-muted transition-all duration-500 group-hover:border-gold-500/40 group-hover:bg-gold-400/10 group-hover:text-gold-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
