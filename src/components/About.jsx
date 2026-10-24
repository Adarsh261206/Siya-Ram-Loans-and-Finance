import React from 'react';
import { motion } from 'framer-motion';
import { Phone, UserCheck, Calendar, Compass, Award, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/loanData';
import { SectionHeading, Reveal, GoldButton, EASE } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

const pillars = [
  { icon: UserCheck, label: 'Proprietorship', value: contactInfo.proprietor },
  { icon: Calendar, label: 'Track Record', value: 'Since 2012 · 14+ Yrs' },
  { icon: Compass, label: 'Case Reach', value: contactInfo.coverage },
  { icon: Award, label: 'Volume Facilitation', value: contactInfo.disbursement },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ------------- Copy ------------- */}
          <div className="lg:col-span-7">
            <SectionHeading
              tone="light"
              eyebrow="Verified Institutional Background"
              number="09"
              title={
                <>
                  About <em className="text-gradient-gold italic">Siyaram Loans &amp; Finance</em>
                </>
              }
            />

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl font-display text-lg italic leading-relaxed text-ink-soft sm:text-xl">
                “Siyaram Loans &amp; Finance provides professional loan consulting and financing
                assistance, connecting customer requirements with an extensive network of banking
                and financial institutions.”
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-ink-soft">
                Founded under the leadership of proprietor{' '}
                <strong className="font-semibold text-ink">Ramesh Sawant</strong>, Siyaram Loans
                &amp; Finance operates with an uncompromising principle:{' '}
                <span className="font-semibold text-gold-700">0% customer fees</span>. By acting as
                a direct institutional facilitator, we match retail, MSME and corporate borrowers
                with premier lenders — without billing consulting fees to the client.
              </p>
            </Reveal>

            {/* Pillars */}
            <div className="mt-11 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {pillars.map((p, idx) => (
                <Reveal key={p.label} delay={0.1 + idx * 0.06}>
                  <div className="flex items-center gap-4 border-t border-ink/[0.08] py-5">
                    <p.icon className="h-4 w-4 shrink-0 text-gold-600" />
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                        {p.label}
                      </div>
                      <div className="mt-1 font-display text-base text-ink">{p.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <GoldButton
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId('contact');
                  }}
                >
                  Connect With Ramesh Sawant
                </GoldButton>
              </div>
            </Reveal>
          </div>

          {/* ------------- Portrait ------------- */}
          <div className="lg:col-span-5">
            <Reveal y={50}>
              <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
                {/* Arch frame */}
                <div className="arch bg-gradient-to-b from-gold-500/70 via-gold-400/25 to-transparent p-px">
                  <div className="arch relative overflow-hidden bg-navy-900">
                    <motion.img
                      src="/ramesh-sawant.jpg"
                      alt="Ramesh Sawant — Proprietor, Siyaram Loans & Finance"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover object-top"
                      initial={{ scale: 1.12 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 1.6, ease: EASE }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <div className="mx-auto w-fit rounded-full border border-gold-400/50 bg-navy-950/60 px-3 py-1 font-mono text-[9px] uppercase tracking-widest2 text-gold-300 backdrop-blur-md">
                        Proprietor &amp; Banker
                      </div>
                      <h3 className="mt-3 font-display text-3xl text-white">Ramesh Sawant</h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Financial Advisor &amp; Loan Consultant
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
                  className="absolute -left-5 top-16 hidden rotate-[-4deg] rounded-2xl border border-ink/[0.07] bg-white px-4 py-3 shadow-lift-light sm:block"
                >
                  <div className="font-display text-2xl text-gold-700">14+</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                    Years Advisory
                  </div>
                </motion.div>

                {/* Direct lines */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { number: contactInfo.phone, clean: contactInfo.phoneClean },
                    { number: contactInfo.phone2, clean: contactInfo.phone2Clean },
                  ].map((line) => (
                    <a
                      key={line.clean}
                      href={`tel:${line.clean}`}
                      className="group flex items-center justify-between rounded-2xl border border-ink/[0.08] bg-white/80 px-4 py-3.5 shadow-soft transition-all duration-300 hover:border-gold-500/50"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="h-3.5 w-3.5 text-gold-600" />
                        <span className="font-mono text-[11px] font-semibold text-ink">
                          {line.number}
                        </span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-700" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
