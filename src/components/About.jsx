import React from 'react';
import { UserCheck, Award, Calendar, Compass, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Landmark, Phone } from 'lucide-react';
import { contactInfo } from '../data/loanData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-royal-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Info + Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: About Text & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Verified Institutional Background
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              About <span className="text-gradient-gold">Siyaram Loans & Finance</span>
            </h2>

            <blockquote className="p-4 rounded-2xl bg-white/5 border-l-4 border-amber-400 text-slate-200 text-base sm:text-lg italic font-normal leading-relaxed">
              “Siyaram Loans & Finance provides professional loan consulting and financing assistance, connecting customer requirements with an extensive network of banking and financial institutions.”
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Founded under the leadership of proprietor <strong className="text-white font-bold">Ramesh Sawant</strong>, Siyaram Loans & Finance operates with an uncompromising principle: <span className="text-amber-400 font-semibold">0% customer fees</span>. By acting as a direct institutional facilitator, we match retail, MSME, and corporate borrowers with premier lenders without billing consulting fees to the client.
            </p>

            {/* 4 Core Verified Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-700/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Proprietorship</div>
                  <div className="text-sm font-bold text-white">{contactInfo.proprietor}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-700/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-royal-400/10 text-royal-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Track Record</div>
                  <div className="text-sm font-bold text-white">{contactInfo.experience} (14+ Yrs)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-700/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Case Reach</div>
                  <div className="text-sm font-bold text-white">{contactInfo.coverage}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-700/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Volume Facilitation</div>
                  <div className="text-sm font-bold text-white">{contactInfo.disbursement}</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-sm shadow-glow-gold transition-all"
              >
                <span>Connect With Ramesh Sawant</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Ramesh Sawant Profile Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-navy-850 to-navy-950 border border-royal-500/40 shadow-2xl relative overflow-hidden group">
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5] bg-navy-900 border border-royal-500/30 shadow-lg">
                <img
                  src="/ramesh-sawant.jpg"
                  alt="Ramesh Sawant - Proprietor, Siyaram Loans & Finance"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                {/* Floating Official Logo Badge on the photo */}
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 w-16 h-16 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Siyaram Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title badge overlay on photo bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 px-2.5 py-1 rounded-full bg-navy-950/80 border border-amber-400/40 backdrop-blur-md">
                    Proprietor & Banker
                  </span>
                  <h3 className="text-2xl font-black text-white font-heading mt-2">
                    Ramesh Sawant
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Financial Advisor & Loan Consultant
                  </p>
                </div>
              </div>

              {/* Verified Contact Bar */}
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-700/80 space-y-2.5">
                <div className="text-[10px] uppercase font-bold text-slate-400">Direct Contact Helplines</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${contactInfo.phoneClean}`}
                    className="p-2.5 rounded-lg bg-navy-950/70 border border-navy-700/70 hover:border-amber-400/50 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {contactInfo.phone}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Call</span>
                  </a>

                  <a
                    href={`tel:${contactInfo.phone2Clean}`}
                    className="p-2.5 rounded-lg bg-navy-950/70 border border-navy-700/70 hover:border-amber-400/50 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {contactInfo.phone2}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Call</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
