import React from 'react';
import { MessageSquare, FileSearch, GitCompare, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { processSteps } from '../data/loanData';

const stepIcons = {
  MessageSquare: MessageSquare,
  FileSearch: FileSearch,
  GitCompare: GitCompare,
  CheckCircle: CheckCircle,
};

export default function Process() {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-royal-700/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/50 border border-royal-500/30 text-royal-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Simple 4-Step Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Simple <span className="text-gradient-gold">Application Process</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From your initial query to institutional sanction, experience an efficient, structured, and completely hassle-free process.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {processSteps.map((step, idx) => {
            const IconComp = stepIcons[step.icon] || MessageSquare;
            const isLast = idx === processSteps.length - 1;

            return (
              <div key={step.step} className="relative group">
                <div className="h-full rounded-2xl p-7 bg-navy-900/90 border border-navy-700/80 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover flex flex-col justify-between">
                  <div>
                    {/* Step indicator header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-extrabold text-base group-hover:scale-105 group-hover:bg-amber-400/20 transition-all">
                        {step.step}
                      </div>
                      <span className="text-xs font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                        {step.duration}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className="w-10 h-10 rounded-lg bg-royal-600/20 text-royal-400 flex items-center justify-center mb-4 group-hover:text-amber-300 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-navy-800 flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                    <span>Phase 0{idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Arrow connector between steps on desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-navy-800 border border-navy-600 text-amber-400 items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-glow-gold transition-all duration-300 hover:scale-105"
          >
            <span>Start Step 1: Share Your Requirement</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
