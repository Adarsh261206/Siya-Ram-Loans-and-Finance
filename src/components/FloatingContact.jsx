import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X, Headset } from 'lucide-react';
import { contactInfo } from '../data/loanData';
import { EASE } from './ui/Primitives';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = `https://wa.me/${
    contactInfo.whatsappClean || '919594139192'
  }?text=${encodeURIComponent(
    'Hello Siyaram Loans & Finance, I would like to inquire about a loan.'
  )}`;

  return (
    <>
      {/* ================= DESKTOP WIDGET ================= */}
      <div className="fixed bottom-7 right-7 z-50 hidden sm:block">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="mb-4 w-80 overflow-hidden rounded-3xl border border-gold-500/30 bg-[#FFFDF8] shadow-lift-light"
            >
              <div className="flex items-center justify-between border-b border-ink/[0.08] px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink">
                    Advisory Desk Active
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close contact menu"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-5 py-4 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                0% customer fees · Speak directly with our specialists
              </div>

              <div className="space-y-2.5 px-5 pb-5">
                <a
                  href={`tel:${contactInfo.phoneClean}`}
                  className="flex items-center gap-3 rounded-2xl border border-ink/[0.08] bg-white px-4 py-3 transition-all duration-300 hover:border-gold-500/50"
                >
                  <Phone className="h-4 w-4 text-gold-600" />
                  <span className="font-mono text-xs font-semibold text-ink">{contactInfo.phone}</span>
                </a>
                <a
                  href={`tel:${contactInfo.phone2Clean}`}
                  className="flex items-center gap-3 rounded-2xl border border-ink/[0.08] bg-white px-4 py-3 transition-all duration-300 hover:border-gold-500/50"
                >
                  <Phone className="h-4 w-4 text-gold-600" />
                  <span className="font-mono text-xs font-semibold text-ink">{contactInfo.phone2}</span>
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-emerald-600 px-4 py-3 transition-all duration-300 hover:bg-emerald-500"
                >
                  <MessageSquare className="h-4 w-4 text-white" />
                  <span className="text-xs font-bold text-white">Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-end gap-3">
          <AnimatePresence>
            {!isOpen && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="rounded-full border border-ink/[0.08] bg-white/90 px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-soft shadow-soft backdrop-blur-md"
              >
                Quick Contact
              </motion.span>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Contact options"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-navy-950 shadow-gold-glow transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/30 [animation-duration:2.4s]" />
            {isOpen ? <X className="relative h-5 w-5" /> : <Headset className="relative h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink/[0.06] bg-[#FBF7EC]/95 backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-3 gap-2 p-3">
          <a
            href={`tel:${contactInfo.phoneClean}`}
            className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 py-3 text-[11px] font-bold text-navy-950 active:scale-95"
          >
            <Phone className="h-3.5 w-3.5" />
            Call 1
          </a>
          <a
            href={`tel:${contactInfo.phone2Clean}`}
            className="flex items-center justify-center gap-1.5 rounded-full border border-gold-500/50 bg-white/70 py-3 text-[11px] font-bold text-gold-700 active:scale-95"
          >
            <Phone className="h-3.5 w-3.5" />
            Call 2
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-600 py-3 text-[11px] font-bold text-white active:scale-95"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
