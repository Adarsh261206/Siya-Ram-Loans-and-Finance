import React, { useState } from 'react';
import { Sparkles, TrendingDown, ArrowDownRight, CheckCircle2, AlertCircle, IndianRupee, BarChart3, Info } from 'lucide-react';
import { caseStudyData } from '../data/loanData';

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'breakdown'

  return (
    <section id="case-study" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-royal-700/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Financial Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Financial Impact: <span className="text-gradient-gold">Case Study</span>
          </h2>
          <p className="mt-3 text-xl font-bold text-royal-300 font-heading">
            {caseStudyData.subtitle}
          </p>
          <p className="mt-2 text-base text-slate-300 italic max-w-2xl mx-auto">
            “{caseStudyData.quote}”
          </p>
        </div>

        {/* Hero Savings Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 rounded-3xl p-6 sm:p-10 border border-royal-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top banner badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-700/80 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Home Loan Balance Transfer Example</h3>
                <p className="text-xs text-slate-400">20-Year Repayment Horizon (₹50 Lakh Principal)</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block">Total Potential Interest Savings</span>
              <span className="text-3xl sm:text-4xl font-black text-gradient-gold font-heading">
                {caseStudyData.totalSavings}
              </span>
            </div>
          </div>

          {/* Visual Comparison Cards (Modern Visuals instead of boring table) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Market Standard Bank Card */}
            <div className="rounded-2xl p-6 bg-navy-950/80 border border-red-500/20 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Baseline Lender</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                  Standard Market Bank
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-400">Assumed Rate of Interest</div>
                  <div className="text-2xl font-extrabold text-white">9.00% ROI</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400">Principal Loan Amount</div>
                  <div className="text-base font-semibold text-slate-200">₹50,00,000</div>
                </div>

                <div className="pt-3 border-t border-navy-800">
                  <div className="text-xs text-slate-400">Total Interest Payable (20 Yrs)</div>
                  <div className="text-xl sm:text-2xl font-bold text-red-400">
                    ₹57,96,000
                  </div>
                </div>

                <div className="h-2 w-full bg-navy-900 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500/70 rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* Optimized Institutional Rate Match Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-royal-900/60 to-navy-900/90 border-2 border-emerald-500/50 shadow-glow relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Optimized Solution</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Institutional Match
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Optimized Bank Rate</div>
                    <div className="text-2xl font-extrabold text-emerald-400">7.00% ROI</div>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    -2.00% Drop
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-400">Principal Loan Amount</div>
                  <div className="text-base font-semibold text-slate-200">₹50,00,000</div>
                </div>

                <div className="pt-3 border-t border-navy-800/80">
                  <div className="text-xs text-slate-400">Total Interest Payable (20 Yrs)</div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                    ₹43,03,000
                  </div>
                </div>

                <div className="h-2 w-full bg-navy-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[74%]" />
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Side-by-side Table */}
          <div className="overflow-x-auto rounded-xl border border-navy-700/80 bg-navy-950/60 mb-6">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-navy-900/90 text-xs uppercase text-slate-400 border-b border-navy-700/80">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-bold">Lending Parameter</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-right text-red-300">Standard Market Bank</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-right text-emerald-300">Optimized Bank Match</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-right text-amber-300">Total Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-800">
                <tr className="hover:bg-navy-900/40">
                  <td className="px-5 py-3.5 font-medium text-white">Principal Loan Value</td>
                  <td className="px-5 py-3.5 text-right font-semibold">₹50,00,000</td>
                  <td className="px-5 py-3.5 text-right font-semibold">₹50,00,000</td>
                  <td className="px-5 py-3.5 text-right text-slate-400 font-medium">—</td>
                </tr>
                <tr className="hover:bg-navy-900/40 bg-royal-950/20">
                  <td className="px-5 py-3.5 font-medium text-white">Assumed Rate of Interest</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate-300">9.00%</td>
                  <td className="px-5 py-3.5 text-right font-bold text-emerald-400">7.00%</td>
                  <td className="px-5 py-3.5 text-right font-bold text-emerald-400">-2.00% ROI Spread</td>
                </tr>
                <tr className="hover:bg-navy-900/40 bg-emerald-950/20">
                  <td className="px-5 py-3.5 font-bold text-white">Total Interest Payable — 20 Yrs</td>
                  <td className="px-5 py-3.5 text-right font-bold text-red-400">₹57,96,000</td>
                  <td className="px-5 py-3.5 text-right font-black text-emerald-400">₹43,03,000</td>
                  <td className="px-5 py-3.5 text-right font-black text-amber-400 text-base">₹14,93,000 Saved (~₹15 Lakhs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Verified Source Disclaimer (Strict adherence to req.md section 7 & 25) */}
          <div className="p-4 rounded-xl bg-navy-900/70 border border-navy-700/80 flex items-start gap-3 text-xs text-slate-400">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-semibold text-slate-300">Source Notice:</span> The figures shown above illustrate a verified case study example from our presentation. Actual interest rates, loan tenure, EMI reductions, and sanction parameters depend on individual borrower credit eligibility, profile documentation, and panel institutional norms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
