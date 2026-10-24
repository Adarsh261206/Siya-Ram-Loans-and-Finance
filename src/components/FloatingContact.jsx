import React, { useState } from 'react';
import { Phone, MessageSquare, X, ChevronUp, Sparkles } from 'lucide-react';
import { contactInfo } from '../data/loanData';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP FLOATING WIDGET (hidden on mobile) ================= */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        
        {/* Expanded panel on click/toggle */}
        {isOpen && (
          <div className="mb-3 w-72 rounded-2xl p-4 bg-navy-950/95 border border-royal-500/40 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-navy-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Advisory Desk Active
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
                aria-label="Close Floating Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 text-xs text-slate-300">
              Zero customer fees. Speak directly with our advisory specialists.
            </div>

            <div className="space-y-2">
              <a
                href={`tel:${contactInfo.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-navy-950 transition-all shadow-md group"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Call: {contactInfo.phone}</span>
              </a>

              <a
                href={`tel:${contactInfo.phone2Clean}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-400/90 hover:bg-amber-300 text-navy-950 transition-all shadow-md group"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Call: {contactInfo.phone2}</span>
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsappClean || '919594139192'}?text=Hello%20Siyaram%20Loans%20%26%20Finance%2C%20I%20would%20like%20to%20inquire%20about%20a%20loan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Circular Floating Trigger Button */}
        <div className="flex items-center gap-2">
          {!isOpen && (
            <div className="px-3 py-1.5 rounded-xl bg-navy-900/90 border border-royal-500/30 text-xs font-bold text-slate-200 shadow-xl backdrop-blur-md animate-bounce">
              Quick Contact
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-navy-950 shadow-glow-gold hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-amber-200"
            aria-label="Contact options"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="relative">
                <Phone className="w-6 h-6 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-navy-950" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE FIXED BOTTOM CTA BAR (visible only on mobile) ================= */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950/98 border-t border-navy-800 p-2.5 px-3 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${contactInfo.phoneClean}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-400 active:bg-amber-300 text-navy-950 font-extrabold text-[11px] shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 1</span>
          </a>

          <a
            href={`tel:${contactInfo.phone2Clean}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-400 active:bg-amber-300 text-navy-950 font-extrabold text-[11px] shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 2</span>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsappClean || '919594139192'}?text=Hello%20Siyaram%20Loans%20%26%20Finance%2C%20I%20would%20like%20to%20inquire%20about%20a%20loan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 active:bg-emerald-500 text-white font-extrabold text-[11px] shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
