import React from 'react';
import { Phone, Mail, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/loanData';
import ContactForm from './ContactForm';
import { SectionHeading, Reveal } from './ui/Primitives';

export default function Contact({ selectedLoanCategory }) {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <SectionHeading
          tone="light"
          eyebrow="Connect With Advisory Desk"
          number="10"
          title={
            <>
              Let&apos;s Find the Right{' '}
              <em className="text-gradient-gold italic">Financing Option</em> for You
            </>
          }
          lede="Let our extensive network optimize your financial liabilities immediately."
          className="max-w-3xl"
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
          {/* ------------- Left: desk details ------------- */}
          <div className="space-y-4 lg:col-span-5">
            {/* Proprietor */}
            <Reveal>
              <div className="rounded-3xl border border-ink/[0.07] bg-[#FBF7EC] p-7 shadow-soft">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                  Proprietor · Head of Advisory
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                  {contactInfo.proprietor}
                </h3>
                <p className="mt-4 border-t border-ink/[0.08] pt-4 text-xs leading-relaxed text-ink-soft">
                  Direct guidance for complex home loan transfers, high-value commercial loans and
                  personalized institutional rate negotiations.
                </p>
              </div>
            </Reveal>

            {/* Helplines */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-ink/[0.07] bg-[#FBF7EC] p-7 shadow-soft">
                <div className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
                  <Phone className="h-3.5 w-3.5 text-gold-600" />
                  Direct Helplines
                </div>
                <div className="mt-4 space-y-3">
                  {[contactInfo.phone, contactInfo.phone2].map((num, i) => (
                    <a
                      key={num}
                      href={`tel:${i === 0 ? contactInfo.phoneClean : contactInfo.phone2Clean}`}
                      className="group flex items-center justify-between border-b border-ink/[0.08] pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-mono text-lg font-semibold text-ink transition-colors group-hover:text-gold-700 sm:text-xl">
                        {num}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest2 text-ink-muted/70 transition-colors group-hover:text-gold-700">
                        Call →
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`https://wa.me/${contactInfo.whatsappClean || '919594139192'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-xs font-bold text-white shadow-soft transition-all duration-300 hover:bg-emerald-500"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    WhatsApp the Desk
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/70 py-3 text-xs font-semibold text-ink transition-all duration-300 hover:border-gold-500/60"
                  >
                    <Mail className="h-3.5 w-3.5 text-gold-600" />
                    Write an Email
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Guarantees */}
            <Reveal delay={0.16}>
              <div className="flex items-center gap-2.5 rounded-2xl border border-ink/[0.06] bg-white/60 px-5 py-4">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-xs text-ink-soft">
                  <strong className="text-ink">0% Fees From Customers</strong> — assessed promptly
                  across pan-India cases.
                </span>
                <Clock className="ml-auto h-4 w-4 shrink-0 text-gold-600" />
              </div>
            </Reveal>
          </div>

          {/* ------------- Right: form ------------- */}
          <div className="lg:col-span-7">
            <ContactForm selectedLoanCategory={selectedLoanCategory} />
          </div>
        </div>
      </div>
    </section>
  );
}
