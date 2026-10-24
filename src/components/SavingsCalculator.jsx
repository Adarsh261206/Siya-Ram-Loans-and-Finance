import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Calculator, TrendingDown, Info } from 'lucide-react';
import { GoldButton, Reveal } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

function formatINR(val) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
}

/* Smoothly animates any currency figure as the sliders move */
function AnimatedINR({ value, className = '' }) {
  const spring = useSpring(value, { stiffness: 120, damping: 26, mass: 0.6 });
  const display = useTransform(spring, (v) => formatINR(v));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className={className}>{display}</motion.span>;
}

function Preset({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide transition-all duration-300 ${
        active
          ? 'border-gold-500/70 bg-gold-400/20 text-gold-700'
          : 'border-ink/10 bg-white/60 text-ink-muted hover:border-ink/25 hover:text-ink'
      }`}
    >
      {label}
    </button>
  );
}

const amountPresets = [
  { label: '₹8 L (PL)', value: 800000 },
  { label: '₹25 L', value: 2500000 },
  { label: '₹50 L (HL)', value: 5000000 },
  { label: '₹1 Cr', value: 10000000 },
  { label: '₹2 Cr', value: 20000000 },
];

const tenurePresets = [
  { label: '3 Yrs (PL)', value: 3 },
  { label: '5 Yrs', value: 5 },
  { label: '10 Yrs', value: 10 },
  { label: '20 Yrs (HL)', value: 20 },
  { label: '30 Yrs', value: 30 },
];

export default function SavingsCalculator({ onSelectLoan }) {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [currentRate, setCurrentRate] = useState(9.0);
  const [newRate, setNewRate] = useState(7.0);
  const [tenureYears, setTenureYears] = useState(20);

  const calculateEMI = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return Math.round(principal / months);
    const factor = Math.pow(1 + monthlyRate, months);
    return Math.round((principal * monthlyRate * factor) / (factor - 1));
  };

  const currentEMI = calculateEMI(loanAmount, currentRate, tenureYears);
  const newEMI = calculateEMI(loanAmount, newRate, tenureYears);
  const monthlySavings = Math.max(0, currentEMI - newEMI);

  const totalCurrentInterest = Math.max(0, currentEMI * tenureYears * 12 - loanAmount);
  const totalNewInterest = Math.max(0, newEMI * tenureYears * 12 - loanAmount);
  const totalInterestDifference = Math.max(0, totalCurrentInterest - totalNewInterest);
  const spread = (currentRate - newRate).toFixed(2);

  const handleApply = () => {
    if (onSelectLoan) onSelectLoan('Home Loan Transfer');
    scrollToId('contact');
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 border-b border-ink/[0.08] pb-8 sm:flex-row sm:items-end">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold-500/40 bg-gold-400/15 text-gold-700">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              Balance Transfer <em className="text-gradient-gold italic">Savings Calculator</em>
            </h3>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              Compare your current bank rate against a new benchmark
            </p>
          </div>
        </div>
        <span className="w-fit rounded-full border border-emerald-600/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-widest2 text-emerald-700">
          0% Client Fees
        </span>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        {/* ---------- Controls ---------- */}
        <div className="space-y-10 lg:col-span-7">
          {/* Amount */}
          <div>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Outstanding Loan Amount
              </span>
              <AnimatedINR value={loanAmount} className="font-mono text-lg font-bold text-gold-700" />
            </div>
            <input
              type="range"
              min="500000"
              max="20000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="slider mt-3"
              aria-label="Outstanding loan amount"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {amountPresets.map((p) => (
                <Preset
                  key={p.value}
                  label={p.label}
                  active={loanAmount === p.value}
                  onClick={() => setLoanAmount(p.value)}
                />
              ))}
            </div>
          </div>

          {/* Rates */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-red-500">
                  Current Bank Rate
                </span>
                <span className="font-mono text-base font-bold text-red-500">
                  {currentRate.toFixed(2)}%
                </span>
              </div>
              <input
                type="range"
                min="7.5"
                max="18.0"
                step="0.25"
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="slider slider-red mt-3"
                aria-label="Current bank rate"
              />
              <div className="mt-3 flex justify-between font-mono text-[9px] text-ink-muted/70">
                <span>7.5%</span>
                <span>9.0% HL</span>
                <span>14.0% PL</span>
                <span>18.0%</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-emerald-600">
                  New Bank Rate
                </span>
                <span className="font-mono text-base font-bold text-emerald-600">
                  {newRate.toFixed(2)}%
                </span>
              </div>
              <input
                type="range"
                min="6.5"
                max="14.0"
                step="0.25"
                value={newRate}
                onChange={(e) => setNewRate(Number(e.target.value))}
                className="slider slider-green mt-3"
                aria-label="New bank rate"
              />
              <div className="mt-3 flex justify-between font-mono text-[9px] text-ink-muted/70">
                <span>6.5%</span>
                <span>7.0% HL</span>
                <span>10.0% PL</span>
                <span>14.0%</span>
              </div>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Remaining Loan Tenure
              </span>
              <span className="font-mono text-base font-bold text-gold-700">
                {tenureYears} Yrs{' '}
                <span className="text-xs text-ink-muted">/ {tenureYears * 12} mo</span>
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="slider mt-3"
              aria-label="Remaining loan tenure"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {tenurePresets.map((p) => (
                <Preset
                  key={p.value}
                  label={p.label}
                  active={tenureYears === p.value}
                  onClick={() => setTenureYears(p.value)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Results (single navy accent panel) ---------- */}
        <Reveal className="lg:col-span-5" y={30}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-navy-800 to-navy-900 p-7 text-white shadow-lift">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/[0.14] blur-[80px]" />

            {/* Comparison header */}
            <div className="relative grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-red-400/25 bg-red-400/[0.08] p-3.5">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-slate-400">
                  Current
                </div>
                <div className="mt-1 font-mono text-sm font-bold text-red-300">
                  {currentRate.toFixed(2)}% ROI
                </div>
                <div className="mt-0.5 text-[10px] text-slate-500">{tenureYears} Yrs</div>
              </div>
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/[0.1] p-3.5">
                <div className="font-mono text-[9px] uppercase tracking-widest2 text-slate-400">
                  New Benchmark
                </div>
                <div className="mt-1 font-mono text-sm font-bold text-emerald-300">
                  {newRate.toFixed(2)}% ROI
                </div>
                <div className="mt-0.5 text-[10px] font-semibold text-emerald-300">
                  −{spread}% spread
                </div>
              </div>
            </div>

            {/* EMI */}
            <div className="relative mt-7">
              <div className="font-mono text-[10px] uppercase tracking-widest2 text-slate-400">
                Estimated Monthly EMI
              </div>
              <div className="mt-2 flex items-baseline justify-between gap-3">
                <div className="flex items-baseline">
                  <AnimatedINR value={newEMI} className="font-mono text-3xl font-bold text-white" />
                  <span className="ml-1.5 text-xs text-slate-400">/mo</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-red-300/80 line-through">
                    {formatINR(currentEMI)}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-500">current EMI</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-400/25 bg-emerald-400/[0.1] px-4 py-3">
                <span className="text-[11px] font-semibold text-emerald-200">
                  Estimated Monthly Difference
                </span>
                <AnimatedINR
                  value={monthlySavings}
                  className="font-mono text-sm font-bold text-emerald-200"
                />
              </div>
            </div>

            {/* Total interest difference */}
            <div className="relative mt-7 border-t border-white/[0.1] pt-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-slate-400">
                <TrendingDown className="h-3.5 w-3.5 text-gold-300" />
                Estimated Interest Difference
              </div>
              <AnimatedINR
                value={totalInterestDifference}
                className="text-gradient-gold mt-2 block font-mono text-4xl font-bold"
              />
              <p className="mt-2.5 text-[11px] leading-relaxed text-slate-400">
                Calculated over {tenureYears} years with a {spread}% ROI difference on{' '}
                {formatINR(loanAmount)}.
              </p>
            </div>

            {/* CTA */}
            <div className="relative mt-auto pt-7">
              <GoldButton className="w-full" onClick={handleApply}>
                Check Eligibility For Lower Rate
              </GoldButton>
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-widest2 text-slate-500">
                Pan-India consultation · 0% customer fees
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 flex items-start gap-3 border-t border-ink/[0.08] pt-6">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
        <p className="text-xs leading-relaxed text-ink-muted">
          <strong className="text-ink-soft">Disclaimer:</strong> This calculator provides an
          illustrative estimate. Actual EMI, interest and savings depend on lender terms, customer
          eligibility, remaining tenure, processing fees, foreclosure charges and other applicable
          costs.
        </p>
      </div>
    </div>
  );
}
