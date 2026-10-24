import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, GitCompare, CheckCircle } from 'lucide-react';
import { processSteps } from '../data/loanData';
import { SectionHeading, Reveal, Stagger, StaggerItem, GoldButton, EASE } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

const stepIcons = { MessageSquare, FileSearch, GitCompare, CheckCircle };

export default function Process() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Simple 4-Step Journey"
          number="07"
          title={
            <>
              Simple <em className="text-gradient-gold italic">Application Process</em>
            </>
          }
          lede="From your initial query to institutional sanction — an efficient, structured and completely hassle-free process."
          className="max-w-3xl"
        />

        <div className="relative mt-20">
          {/* Track */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block" />
          <motion.div
            className="absolute left-0 top-6 hidden h-px bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.8, ease: EASE, delay: 0.2 }}
            style={{ transformOrigin: 'left', width: '100%' }}
          />

          <Stagger className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-0" gap={0.14}>
            {processSteps.map((step) => {
              const Icon = stepIcons[step.icon] || MessageSquare;
              return (
                <StaggerItem key={step.step}>
                  <div className="group relative lg:pr-10">
                    {/* Node */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/50 bg-white font-mono text-xs font-bold text-gold-700 shadow-soft transition-all duration-500 group-hover:border-gold-500 group-hover:shadow-gold-soft">
                      {step.step}
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                      <Icon className="h-4 w-4 text-ink-muted transition-colors duration-300 group-hover:text-gold-700" />
                      <span className="rounded-full border border-ink/[0.08] bg-white/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl text-ink transition-colors duration-300 group-hover:text-navy-800">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <Reveal className="mt-20 text-center" y={26}>
          <GoldButton onClick={() => scrollToId('contact')}>
            Start Step 1 — Share Your Requirement
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
