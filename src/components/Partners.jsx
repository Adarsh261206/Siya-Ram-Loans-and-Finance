import React from 'react';
import {
  Landmark,
  Building2,
  Home as HomeIcon,
  Coins,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { partnerInstitutions, psuBanks, majorPrivateBanks, nbfcInstitutions } from '../data/loanData';
import BankLogoItem from './BankLogos';
import { SectionHeading, Reveal, Marquee, Counter } from './ui/Primitives';

const tierIcons = [Landmark, Building2, HomeIcon, Coins];

const marqueeBanks = [
  ...psuBanks.slice(0, 6),
  ...majorPrivateBanks.slice(0, 5),
  ...nbfcInstitutions.slice(0, 5),
];

function LogoCard({ name, short, tag }) {
  return (
    <div className="group rounded-2xl border border-ink/[0.08] bg-[#FBF7EC] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lift-light">
      <div className="flex h-14 items-center justify-center rounded-xl bg-white px-3 shadow-sm ring-1 ring-ink/[0.04]">
        <BankLogoItem code={short} name={name} className="h-8 w-auto max-w-full object-contain" />
      </div>
      <h4 className="mt-3.5 text-xs font-bold text-ink transition-colors duration-300 group-hover:text-navy-800">
        {name}
      </h4>
      <div className="mt-2.5 border-t border-ink/10 pt-2.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
        {tag}
      </div>
    </div>
  );
}

function TierHeader({ order, kicker, title, chip, priority = false }) {
  return (
    <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-end gap-5">
        <span
          className={`font-display text-5xl leading-none ${
            priority ? 'text-gradient-gold' : 'text-outline'
          }`}
        >
          {order}
        </span>
        <div className="pb-0.5">
          <div className="font-mono text-[9px] uppercase tracking-widest2 text-gold-700">
            {kicker}
          </div>
          <h3 className="mt-1.5 font-display text-xl text-ink sm:text-2xl">{title}</h3>
        </div>
      </div>
      <span className="w-fit rounded-full border border-ink/10 bg-cream-50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted">
        {chip}
      </span>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden text-ink">


      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        {/* Header */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Institutional Banking Network"
            number="08"
            title={
              <>
                Banking &amp; <em className="text-gradient-gold italic">Financial Institutions</em>
              </>
            }
            titleClassName="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <div className="flex items-end gap-4">
              <span className="font-display text-6xl leading-none text-navy-800 lg:text-7xl">
                <Counter to={270} suffix="+" />
              </span>
              <p className="max-w-[200px] pb-1 text-xs leading-relaxed text-ink-soft">
                institutional network reach across India — PSU, private, HFC &amp; NBFC channels.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <Reveal className="mt-16" y={24}>
          <div className="mask-fade-x overflow-hidden rounded-2xl border border-ink/[0.08] bg-[#FBF7EC] py-5">
            <Marquee>
              {marqueeBanks.map((bank, idx) => (
                <div
                  key={`${bank.short}-${idx}`}
                  className="mx-3 flex h-14 shrink-0 items-center rounded-xl border border-ink/[0.06] bg-white px-5 shadow-sm transition-transform duration-300 hover:scale-105"
                >
                  <BankLogoItem code={bank.short} name={bank.name} className="h-7 w-auto max-w-[130px]" />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>

        {/* Tier architecture */}
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-ink/10">
          {partnerInstitutions.map((cat, idx) => {
            const Icon = tierIcons[idx] || Landmark;
            return (
              <Reveal key={cat.type} delay={idx * 0.08} className="lg:px-7 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-800/15 bg-navy-800/[0.05] text-navy-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest2 text-ink-muted">
                    Tier {cat.order}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">{cat.type}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">{cat.count}</p>
                <div className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest2 text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Institutional reach
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ------------- 01 · PSU Banks ------------- */}
        <div className="mt-20">
          <TierHeader
            order="01"
            kicker="Priority Category"
            title="Government & Public Sector Banking Network"
            chip="Top 10 PSU Nationalized Banks"
            priority
          />
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-ink-soft">
            Leading public sector undertaking (PSU) banks offering sovereign trust, stable guidelines
            and competitive baseline rates.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {psuBanks.map((bank) => (
              <LogoCard key={bank.short} name={bank.name} short={bank.short} tag={bank.tag} />
            ))}
          </div>
        </div>

        {/* ------------- 02 · Private Banks ------------- */}
        <div className="mt-20">
          <TierHeader
            order="02"
            kicker="Secondary Category"
            title="Private Banks & Financial Institutions"
            chip="Scheduled Commercial Banks"
          />
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-ink-soft">
            Leading scheduled private commercial lenders offering digital workflows, rapid sanctions
            and customized structures.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {majorPrivateBanks.map((bank) => (
              <LogoCard key={bank.short} name={bank.name} short={bank.short} tag={bank.tag} />
            ))}
          </div>
        </div>

        {/* ------------- 03 · HFC & NBFC ------------- */}
        <div className="mt-20">
          <TierHeader
            order="03"
            kicker="Specialized Mortgage & MSME"
            title="Housing Finance Companies & Premier NBFCs"
            chip="HFCs & Approved NBFCs"
          />
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-ink-soft">
            Specialized home loan providers and prominent non-banking financial companies with high
            loan-to-value solutions.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nbfcInstitutions.map((inst) => (
              <LogoCard key={inst.short} name={inst.name} short={inst.short} tag={inst.tag} />
            ))}
          </div>
        </div>

        {/* Compliance */}
        <Reveal className="mt-20" y={20}>
          <div className="flex flex-col items-center justify-center gap-3 border-t border-ink/10 pt-8 text-center sm:flex-row">
            <div className="flex items-center gap-2 text-xs text-ink-soft">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
              Direct institutional access across 270+ licensed partner channels without customer fees.
            </div>
            <span className="hidden text-ink-muted sm:inline">·</span>
            <span className="text-[11px] text-ink-muted">
              Loan options may be available through our institutional network subject to lender
              guidelines.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
