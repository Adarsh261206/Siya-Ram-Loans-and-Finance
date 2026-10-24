import React, { useState } from 'react';
import { Calculator, IndianRupee, TrendingDown, ArrowRight, Info, Sparkles, CheckCircle2, ArrowDownRight } from 'lucide-react';

export default function SavingsCalculator({ onSelectLoan }) {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs default
  const [currentRate, setCurrentRate] = useState(9.0);
  const [newRate, setNewRate] = useState(7.0);
  const [tenureYears, setTenureYears] = useState(20);

  // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return Math.round(principal / months);
    const factor = Math.pow(1 + monthlyRate, months);
    const emi = (principal * monthlyRate * factor) / (factor - 1);
    return Math.round(emi);
  };

  const currentEMI = calculateEMI(loanAmount, currentRate, tenureYears);
  const newEMI = calculateEMI(loanAmount, newRate, tenureYears);
  const monthlySavings = Math.max(0, currentEMI - newEMI);

  const totalCurrentInterest = Math.max(0, (currentEMI * tenureYears * 12) - loanAmount);
  const totalNewInterest = Math.max(0, (newEMI * tenureYears * 12) - loanAmount);
  const totalInterestDifference = Math.max(0, totalCurrentInterest - totalNewInterest);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApply = () => {
    if (onSelectLoan) {
      onSelectLoan('Home Loan Transfer');
    }
    const target = document.getElementById('contact');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="savings-calculator" className="my-10 p-6 sm:p-9 rounded-3xl bg-navy-950/95 border border-royal-500/30 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-navy-800">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold shadow-md">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              Balance Transfer Savings Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Compare your Current Bank Rate against a New Bank Rate benchmark
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-royal-600/20 text-royal-300 border border-royal-500/40">
            0% Client Fees
          </span>
        </div>
      </div>

      {/* Main Grid: Controls + Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Sliders & Inputs Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Outstanding Loan Amount */}
          <div className="bg-navy-900/60 p-4 sm:p-5 rounded-2xl border border-navy-800">
            <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
              <span className="uppercase tracking-wider">Outstanding Loan Amount</span>
              <span className="text-amber-400 font-mono text-base font-extrabold">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="500000"
              max="20000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label="Outstanding Loan Amount"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
              <button type="button" onClick={() => setLoanAmount(800000)} className="hover:text-amber-400">₹8 Lakhs (PL)</button>
              <button type="button" onClick={() => setLoanAmount(2500000)} className="hover:text-amber-400">₹25 Lakhs</button>
              <button type="button" onClick={() => setLoanAmount(5000000)} className="hover:text-amber-400 text-amber-300 font-bold">₹50 Lakhs (HL)</button>
              <button type="button" onClick={() => setLoanAmount(10000000)} className="hover:text-amber-400">₹1 Crore</button>
              <button type="button" onClick={() => setLoanAmount(20000000)} className="hover:text-amber-400">₹2 Crores</button>
            </div>
          </div>

          {/* Current Bank Rate vs New Bank Rate (Side by Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Current Bank Rate */}
            <div className="bg-navy-900/60 p-4 rounded-2xl border border-red-500/20">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span className="uppercase tracking-wider text-red-300">Current Bank Rate</span>
                <span className="text-red-400 font-mono text-base font-extrabold">{currentRate.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min="7.5"
                max="18.0"
                step="0.25"
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-red-400"
                aria-label="Current Bank Rate"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                <span>7.5%</span>
                <span>9.0% (HL Avg)</span>
                <span>14.0% (PL Avg)</span>
                <span>18.0%</span>
              </div>
            </div>

            {/* New Bank Rate */}
            <div className="bg-navy-900/60 p-4 rounded-2xl border border-emerald-500/30">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span className="uppercase tracking-wider text-emerald-300">New Bank Rate</span>
                <span className="text-emerald-400 font-mono text-base font-extrabold">{newRate.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min="6.5"
                max="14.0"
                step="0.25"
                value={newRate}
                onChange={(e) => setNewRate(Number(e.target.value))}
                className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="New Bank Rate"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                <span>6.5%</span>
                <span>7.0% (HL Target)</span>
                <span>10.0% (PL Target)</span>
                <span>14.0%</span>
              </div>
            </div>

          </div>

          {/* Remaining Tenure */}
          <div className="bg-navy-900/60 p-4 sm:p-5 rounded-2xl border border-navy-800">
            <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
              <span className="uppercase tracking-wider">Remaining Loan Tenure</span>
              <span className="text-amber-400 font-mono text-base font-extrabold">{tenureYears} Years ({tenureYears * 12} Months)</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label="Remaining Loan Tenure"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
              <button type="button" onClick={() => setTenureYears(3)} className="hover:text-amber-400">3 Yrs (PL)</button>
              <button type="button" onClick={() => setTenureYears(5)} className="hover:text-amber-400">5 Yrs</button>
              <button type="button" onClick={() => setTenureYears(10)} className="hover:text-amber-400">10 Yrs</button>
              <button type="button" onClick={() => setTenureYears(20)} className="hover:text-amber-400 text-amber-300 font-bold">20 Yrs (HL)</button>
              <button type="button" onClick={() => setTenureYears(30)} className="hover:text-amber-400">30 Yrs</button>
            </div>
          </div>

        </div>

        {/* Comparison & Results Column (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-navy-900 to-navy-950 rounded-2xl p-6 border border-royal-500/30 flex flex-col justify-between shadow-xl">
          <div className="space-y-5">
            
            {/* Direct Comparison Header */}
            <div className="grid grid-cols-2 gap-3 text-center pb-4 border-b border-navy-800">
              <div className="p-2.5 rounded-xl bg-navy-950/80 border border-red-500/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Current Loan</span>
                <span className="text-xs font-mono font-bold text-red-300">{currentRate.toFixed(2)}% ROI</span>
                <div className="text-[10px] text-slate-500">{tenureYears} Yrs</div>
              </div>
              <div className="p-2.5 rounded-xl bg-navy-950/80 border border-emerald-500/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">New Bank Rate</span>
                <span className="text-xs font-mono font-bold text-emerald-400">{newRate.toFixed(2)}% ROI</span>
                <div className="text-[10px] text-emerald-400/80 font-bold">-{(currentRate - newRate).toFixed(2)}% Spread</div>
              </div>
            </div>

            {/* EMI Comparison */}
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">
                Estimated Monthly EMI
              </div>
              <div className="flex items-baseline justify-between gap-2 mt-1">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono">{formatINR(newEMI)}</span>
                  <span className="text-xs text-slate-400 ml-1">/ mo</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-red-400 line-through font-mono block">{formatINR(currentEMI)}</span>
                  <span className="text-[10px] text-slate-500">Current EMI</span>
                </div>
              </div>

              <div className="mt-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs font-bold text-emerald-400">
                <span>Estimated Monthly Difference:</span>
                <span className="font-mono text-sm font-extrabold">{formatINR(monthlySavings)} / Month</span>
              </div>
            </div>

            {/* Total Interest Difference */}
            <div className="pt-3 border-t border-navy-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                Estimated Interest Difference
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gradient-gold font-mono mt-1">
                {formatINR(totalInterestDifference)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Calculated over {tenureYears} years with a {(currentRate - newRate).toFixed(2)}% ROI difference on {formatINR(loanAmount)}.
              </p>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-navy-800">
            <button
              type="button"
              onClick={handleApply}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-xs sm:text-sm shadow-glow-gold transition-all flex items-center justify-center gap-2 group"
            >
              <span>Check Eligibility For Lower Rate</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="text-[10px] text-center text-slate-500 mt-2">
              Pan-India consultation with 0% customer fees
            </div>
          </div>

        </div>

      </div>

      {/* Mandatory Financial Disclaimer (Requirement 16) */}
      <div className="mt-6 p-4 rounded-xl bg-navy-900/60 border border-navy-800 flex items-start gap-3 text-xs text-slate-400">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-300">Disclaimer:</strong> This calculator provides an illustrative estimate. Actual EMI, interest and savings depend on lender terms, customer eligibility, remaining tenure, processing fees, foreclosure charges and other applicable costs.
        </p>
      </div>

    </div>
  );
}
