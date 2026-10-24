import React, { useState, useEffect } from 'react';
import {
  TrendingDown,
  Building,
  CheckCircle2,
  Home,
  RefreshCw,
  BadgeCheck,
  Landmark,
  ArrowUpRight,
  Calculator,
} from 'lucide-react';
import { heroStats, heroNotifications } from '../data/loanData';
import {
  GoldButton,
  GhostButton,
  Magnetic,
  Counter,
  LineReveal,
  Marquee,
  Reveal,
} from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

const notifIcons = { Home, RefreshCw, BadgeCheck, Landmark };

const tickerItems = [
  '0% Customer Fees',
  '270+ Institutional Partners',
  'Pan-India Case Processing',
  'Since 2012',
  '₹10,000 Cr+ Facilitated',
  'CIBIL Profile Guidance',
  'Home Loan Balance Transfer',
];

function StatCell({ stat }) {
  const renderValue = () => {
    if (stat.isCibil) {
      return <span className="font-display text-4xl text-navy-800 lg:text-[2.6rem]">CIBIL</span>;
    }
    if (stat.isYear) {
      return (
        <span className="font-display text-4xl text-navy-800 lg:text-[2.6rem]">
          Since <Counter from={1990} to={2012} duration={1.8} grouping={false} />
        </span>
      );
    }
    return (
      <span className="flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-4xl text-navy-800 lg:text-[2.6rem]">
          {stat.prefix || ''}
          <Counter to={stat.targetNumber} duration={2.2} />
        </span>
        {stat.suffix && (
          <span className="font-display text-lg text-gold-600 lg:text-2xl">{stat.suffix.trim()}</span>
        )}
      </span>
    );
  };

  return (
    <div className="px-2 py-2 lg:px-8">
      {renderValue()}
      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        {stat.label}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink-muted/80">{stat.subtext}</p>
    </div>
  );
}

export default function Hero() {
  const [activeNotifIndex, setActiveNotifIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotifIndex((prev) => (prev + 1) % heroNotifications.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentNotif = heroNotifications[activeNotifIndex];
  const CurrentIcon = notifIcons[currentNotif.icon] || Home;

  return (
    <section id="home" className="relative overflow-hidden">
      {/* ---------- Ambient — one soft wash only ---------- */}
      <div className="pointer-events-none absolute -top-40 right-[-6%] h-[520px] w-[520px] rounded-full bg-gold-400/[0.1] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-4 pt-14 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- Left: copy ---------------- */}
          <div className="lg:col-span-7">
            {/* Rotating notification */}
            <div
              className="anim-rise inline-flex max-w-full items-center gap-3 rounded-full border border-ink/[0.07] bg-white/70 px-4 py-2 shadow-soft backdrop-blur"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
              </span>
              <span
                key={activeNotifIndex}
                className="anim-fade flex items-center gap-2 overflow-hidden font-mono text-[11px] tracking-wide text-ink-soft"
              >
                <CurrentIcon className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                <span className="font-semibold text-ink">{currentNotif.title}</span>
                <span className="hidden text-ink-muted md:inline">— {currentNotif.description}</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-xl mt-7 text-[2.6rem] text-ink sm:text-6xl lg:text-[4.35rem] xl:text-[4.8rem]">
              <LineReveal inView={false} delay={0.22}>
                Empowering Your Dreams,
              </LineReveal>
              <LineReveal inView={false} delay={0.36}>
                <em className="text-gradient-gold not-italic sm:italic">Financing</em> Your Future.
              </LineReveal>
            </h1>

            {/* Lede */}
            <p
              className="anim-rise mt-7 max-w-xl leading-relaxed text-ink-soft"
              style={{ animationDelay: '0.52s' }}
            >
              Professional loan consulting and institutional financing solutions with{' '}
              <span className="font-semibold text-gold-700">0% customer fees</span>, connecting you
              to suitable bank rates across a network of{' '}
              <span className="font-semibold text-navy-800">270+ banking &amp; financial institutions</span>.
            </p>

            {/* CTAs */}
            <div
              className="anim-rise mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: '0.64s' }}
            >
              <Magnetic>
                <GoldButton onClick={() => scrollToId('contact')}>Get Free Consultation</GoldButton>
              </Magnetic>
              <GhostButton tone="light" onClick={() => scrollToId('balance-transfer')}>
                Explore Balance Transfer
              </GhostButton>
            </div>

            {/* Assurances */}
            <div
              className="anim-rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
              style={{ animationDelay: '0.8s' }}
            >
              {['100% Free For Applicants', 'Pan-India Case Processing', 'CIBIL Profile Guidance'].map(
                (item, i) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted"
                  >
                    <CheckCircle2
                      className={`h-3.5 w-3.5 ${i === 2 ? 'text-gold-600' : 'text-emerald-600'}`}
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ---------------- Right: advisory card ---------------- */}
          <div className="relative lg:col-span-5">
            <div className="anim-rise relative lg:pl-8" style={{ animationDelay: '0.45s' }}>
              <div className="relative rounded-[24px] border border-ink/[0.06] bg-white p-6 shadow-soft sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between gap-4 pb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white p-1 ring-1 ring-ink/[0.06]">
                      <img src="/logo.png" alt="Siyaram Loans" className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <div className="font-display text-base text-ink">Advisory Desk</div>
                      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                        Ramesh Sawant · Banker
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                    0% Fees
                  </span>
                </div>

                {/* Benchmark */}
                <div className="border-t border-ink/[0.07] pt-6">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                      Balance Transfer Benchmark
                    </span>
                    <span className="font-mono text-[10px] text-gold-700">7.00% Target</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-mono text-lg text-ink-muted/70 line-through">9.00%</span>
                    <ArrowUpRight className="h-4 w-4 -rotate-45 text-ink-muted/40" />
                    <span className="font-display text-4xl text-ink">7.00%</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                      ROI p.a.
                    </span>
                  </div>
                  <div className="mt-5 h-px w-full bg-ink/[0.08]">
                    <div
                      className="anim-grow h-px w-[70%] origin-left bg-gold-500"
                      style={{ animationDelay: '1s' }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-ink-muted">
                    <span>Current Bank Rate</span>
                    <span className="text-emerald-700">Potential 2.00% Spread</span>
                  </div>
                </div>

                {/* Rows */}
                <div className="mt-6 border-t border-ink/[0.07]">
                  {[
                    {
                      icon: TrendingDown,
                      title: 'Personal Loan Balance Transfer',
                      sub: 'Lower ROI → Potentially Lower EMI',
                    },
                    {
                      icon: Building,
                      title: '270+ Institutional Network',
                      sub: 'Government + Private Institutions',
                    },
                    {
                      icon: BadgeCheck,
                      title: 'CIBIL Cases Handled',
                      sub: 'Subject to lender policies & eligibility',
                    },
                  ].map((row) => (
                    <div
                      key={row.title}
                      className="group flex items-center gap-4 border-b border-ink/[0.06] py-4 last:border-b-0"
                    >
                      <row.icon className="h-4 w-4 shrink-0 text-gold-600" strokeWidth={1.75} />
                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] font-medium text-ink">{row.title}</div>
                        <div className="mt-0.5 truncate text-xs text-ink-muted">{row.sub}</div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-muted/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => scrollToId('savings-calculator')}
                  className="group mt-6 flex w-full items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted transition-colors duration-300 hover:text-gold-700"
                >
                  <span className="flex items-center gap-2">
                    <Calculator className="h-3.5 w-3.5" />
                    Calculate Potential Savings
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                Since 2012 · 270+ Bank Partners
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- Stats strip ---------------- */}
        <Reveal className="mt-20 lg:mt-24" y={36}>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-ink/[0.08]">
            {heroStats.map((stat) => (
              <StatCell key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>

      {/* ---------------- Ticker (no borders — soft tint band) ---------------- */}
      <div className="relative z-10 mt-16">
        <div className="mx-2 rounded-[2rem] bg-white/60 py-4 shadow-soft ring-1 ring-ink/[0.04] backdrop-blur sm:mx-4 sm:rounded-[3rem] lg:mx-6">
          <Marquee className="mask-fade-x">
            {tickerItems.map((item) => (
              <span
                key={item}
                className="mx-7 flex items-center gap-7 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted"
              >
                {item}
                <span className="text-gold-500">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* breathing room for the next sheet's overlap */}
      <div className="h-12 sm:h-16" />
    </section>
  );
}
