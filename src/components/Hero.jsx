import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, TrendingDown, Building, CheckCircle2, ChevronRight, Award, Sparkles, Home, RefreshCw, BadgeCheck, Landmark } from 'lucide-react';
import { heroStats, heroNotifications } from '../data/loanData';

const notifIcons = {
  Home: Home,
  RefreshCw: RefreshCw,
  BadgeCheck: BadgeCheck,
  Landmark: Landmark,
};

function CounterItem({ stat }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (stat.isCibil) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (stat.isYear) {
            let start = 1990;
            const end = stat.targetNumber;
            const duration = 1500;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = (end - start) / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, stepTime);
          } else {
            let start = 0;
            const end = stat.targetNumber;
            const duration = 1600;
            const stepTime = 35;
            const steps = duration / stepTime;
            const increment = end / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, stepTime);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stat]);

  const displayValue = () => {
    if (stat.isCibil) return "CIBIL";
    if (!hasAnimated) return stat.value;
    if (stat.isYear) return `Since ${count}`;
    if (stat.prefix) return `${stat.prefix}${count.toLocaleString('en-IN')}${stat.suffix || ''}`;
    return `${count.toLocaleString('en-IN')}${stat.suffix || ''}`;
  };

  return (
    <div
      ref={elementRef}
      className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 group shadow-lg flex flex-col justify-between"
    >
      <div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight flex items-baseline gap-1 group-hover:scale-105 transition-transform origin-left">
          <span className="text-gradient-gold">{displayValue()}</span>
        </div>
        <div className="text-sm font-semibold text-slate-200 mt-1">
          {stat.label}
        </div>
      </div>
      <div className="text-xs text-slate-400 mt-2">
        {stat.subtext}
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeNotifIndex, setActiveNotifIndex] = useState(0);

  // Rotating notification carousel (Requirement 21)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotifIndex((prev) => (prev + 1) % heroNotifications.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentNotif = heroNotifications[activeNotifIndex];
  const CurrentIcon = notifIcons[currentNotif.icon] || Home;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden pt-12 pb-20 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-royal-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Rotating Finance Notification Carousel (Requirement 20 & 21) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-royal-900/80 border border-royal-500/50 backdrop-blur-md shadow-inner max-w-full">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping shrink-0" />
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-300 transition-all duration-300">
                <CurrentIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-bold text-white">{currentNotif.title}:</span>
                <span className="text-amber-200 hidden sm:inline">{currentNotif.description}</span>
                <span className="text-amber-200 sm:hidden">Tap to explore</span>
              </div>
            </div>

            {/* Main H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
              Empowering Your Dreams,{' '}
              <span className="text-gradient-gold block sm:inline">
                Financing Your Future.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Professional loan consulting and institutional financing solutions with <span className="text-amber-400 font-semibold underline decoration-amber-400/50 underline-offset-4">0% customer fees</span>, helping borrowers identify suitable bank rates across an extensive network of <span className="text-white font-semibold">270+ banking and financial institutions</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-glow-gold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group text-base"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('balance-transfer')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-royal-400/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-base"
              >
                <span>Explore Balance Transfer</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Feature Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Free For Applicants</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pan-India Case Processing</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CIBIL Profile Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic with Snapshot & Floating Notification Pills */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient circle glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-royal-600/30 via-royal-500/10 to-amber-400/20 rounded-3xl blur-2xl -z-10" />

            <div className="w-full max-w-md bg-gradient-to-b from-navy-800/90 to-navy-900/95 rounded-3xl p-6 sm:p-7 border border-royal-500/30 backdrop-blur-xl shadow-2xl relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-navy-700/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                    <img
                      src="/logo.png"
                      alt="Siyaram Loans Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Siyaram Advisory Desk</span>
                    </h3>
                    <p className="text-[11px] text-amber-300 font-medium">Ramesh Sawant, Banker</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                  0% Client Fees
                </span>
              </div>

              {/* Main Snapshot */}
              <div className="my-5 p-4 rounded-2xl bg-navy-950/70 border border-navy-700/60 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Balance Transfer Benchmark</span>
                  <span className="text-amber-400 font-bold">Starting from 7.00% Bank Rate</span>
                </div>
                <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full w-[78%]" />
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400">
                  <span>Current Bank Rate: 9.00%</span>
                  <span className="text-emerald-400 font-medium">Potential 2.00% Spread</span>
                </div>
              </div>

              {/* Supporting UI Elements (Requirement 20 & 21) */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-royal-400/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white">Personal Loan Balance Transfer</div>
                    <div className="text-[11px] text-slate-400 truncate">Lower ROI → Potentially Lower EMI</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-royal-400/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-royal-400/10 border border-royal-400/30 flex items-center justify-center text-royal-400 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white">270+ Institutional Network</div>
                    <div className="text-[11px] text-slate-400 truncate">Government + Private Institutions</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-royal-400/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white">CIBIL Cases Handled</div>
                    <div className="text-[11px] text-slate-400 truncate">Loan profile assistance available</div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-5 pt-4 border-t border-navy-700/80">
                <button
                  type="button"
                  onClick={() => scrollToSection('savings-calculator')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-royal-800/40 hover:bg-royal-700/50 border border-royal-500/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Calculate Potential Savings</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-navy-950 px-3.5 py-1.5 rounded-xl shadow-xl font-bold text-xs flex items-center gap-1.5 border border-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Since 2012</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators Grid with Animated Counters + CIBIL (Requirement 14) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-navy-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {heroStats.map((stat, idx) => (
              <CounterItem key={idx} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
