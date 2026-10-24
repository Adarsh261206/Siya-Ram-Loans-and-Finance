import React from 'react';
import { Phone, Mail, User, ShieldCheck, Clock, MapPin, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/loanData';
import ContactForm from './ContactForm';

export default function Contact({ selectedLoanCategory }) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-royal-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Connect With Advisory Desk
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Let's Find the Right <span className="text-gradient-gold">Financing Option</span> for You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            “Let our extensive network optimize your financial liabilities immediately.”
          </p>
        </div>

        {/* Grid: Direct Contact Details & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Proprietor Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-navy-900/90 border border-royal-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-glow-gold">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Proprietor</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                    {contactInfo.proprietor}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium">Head of Advisory & Institutional Panel</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-navy-800">
                Direct guidance for complex home loan transfers, high-value commercial loans, and personalized institutional rate negotiations.
              </p>
            </div>

            {/* Helpline Card */}
            <div className="p-6 rounded-3xl bg-navy-900/90 border border-navy-700/80 hover:border-amber-400/40 transition-all shadow-xl group">
              <div className="flex items-start sm:items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-royal-600/20 text-royal-400 border border-royal-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:text-amber-300 transition-all shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Direct Helplines</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
                    <a
                      href={`tel:${contactInfo.phoneClean}`}
                      className="text-base sm:text-lg font-black text-white hover:text-amber-300 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <a
                      href={`tel:${contactInfo.phone2Clean}`}
                      className="text-base sm:text-lg font-black text-white hover:text-amber-300 transition-colors"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={`tel:${contactInfo.phoneClean}`}
                  className="py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 1</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone2Clean}`}
                  className="py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 2</span>
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsappClean || '919594139192'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-navy-900/90 border border-navy-700/80 hover:border-royal-400/40 transition-all shadow-xl group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-royal-600/20 text-royal-400 border border-royal-500/30 flex items-center justify-center group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Official Desk Email</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors truncate block"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Send existing sanction letters or queries for swift assessment.
              </p>
            </div>

            {/* Pan India & Zero Fees Guarantee Badges */}
            <div className="p-5 rounded-2xl bg-navy-950/90 border border-royal-500/20 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Zero-Cost Guarantee:</strong> 0% Fees From Customers at all times</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Timely Response:</strong> Inquiries assessed promptly pan-India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Static Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm selectedLoanCategory={selectedLoanCategory} />
          </div>

        </div>

      </div>
    </section>
  );
}
