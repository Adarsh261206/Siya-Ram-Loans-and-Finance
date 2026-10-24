import React from 'react';
import { BadgePercent, Building2, Compass, History, Layers, SearchCheck, Landmark, Sparkles, BadgeCheck } from 'lucide-react';
import { whyChooseCards } from '../data/loanData';

const iconMap = {
  BadgePercent: BadgePercent,
  Building2: Building2,
  Compass: Compass,
  History: History,
  Layers: Layers,
  SearchCheck: SearchCheck,
  BadgeCheck: BadgeCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-royal-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-royal-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Competitive Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Why Customers <span className="text-gradient-gold">Choose Siyaram</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Rooted in our verified track record since 2012, facilitating over ₹10,000 Cr in disbursements with unwavering client transparency and 0% customer fees.
          </p>
        </div>

        {/* Central Graphic Layout for Desktop & Clean Grid for Mobile */}
        <div className="relative">
          
          {/* Central Logo Emblem (Visible on Desktop) */}
          <div className="hidden xl:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-tr from-navy-950 via-navy-900 to-royal-950 border-4 border-amber-400/40 shadow-glow-gold flex-col items-center justify-center text-center p-4 z-20 pointer-events-none">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400 mb-2">
              <Landmark className="w-7 h-7" />
            </div>
            <div className="text-sm font-extrabold text-white font-heading leading-tight">SIYARAM</div>
            <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Trusted 2012</div>
            <div className="text-[9px] text-slate-400 mt-0.5">0% Customer Fees</div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseCards.map((item) => {
              const IconComp = iconMap[item.icon] || Landmark;

              return (
                <div
                  key={item.number}
                  className="group relative rounded-2xl p-7 bg-navy-900/85 border border-navy-700/80 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-slate-700 group-hover:text-amber-400/70 transition-colors font-heading">
                        {item.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-royal-600/20 border border-royal-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-slate-400">Verified Metric</span>
                    <span className="text-amber-400/80 font-medium">Siyaram Advantage</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
