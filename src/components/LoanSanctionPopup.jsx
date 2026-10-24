import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, Bell } from 'lucide-react';
import { popupConfig } from '../data/loanData';
import { EASE } from './ui/Primitives';
import { scrollToId } from '../lib/scroll';

export default function LoanSanctionPopup({ onSelectLoan }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('sy_loan_popup_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return undefined;
    }
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('sy_loan_popup_dismissed', 'true');
  };

  const handleReopen = () => {
    setIsVisible(true);
    setIsDismissed(false);
  };

  const handleAction = () => {
    if (onSelectLoan) onSelectLoan(popupConfig.targetLoan || 'Home Loan');
    handleClose();
    scrollToId('contact');
  };

  return (
    <>
      {/* Reopen pill */}
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={handleReopen}
            aria-label="Reopen loan assistance notification"
            className="group fixed bottom-24 left-5 z-40 flex items-center gap-2 rounded-full border border-gold-500/40 bg-[#FFFDF8]/95 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest2 text-gold-700 shadow-lift-light backdrop-blur-md transition-colors hover:border-gold-500/80 sm:bottom-7 sm:left-7"
          >
            <Bell className="h-3.5 w-3.5 transition-transform duration-300 group-hover:animate-bounce" />
            Need Loan Help?
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            role="dialog"
            aria-labelledby="promo-popup-title"
            initial={{ opacity: 0, y: 44, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 44, scale: 0.97 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed bottom-24 left-5 right-5 z-50 mx-auto max-w-sm overflow-hidden rounded-3xl border border-gold-500/40 bg-[#FFFDF8] shadow-lift-light sm:bottom-7 sm:left-7 sm:right-auto sm:mx-0 sm:max-w-md"
          >
            {/* top gold line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />

            <div className="p-6">
              <div className="flex items-center justify-between gap-3 border-b border-ink/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-700">
                    {popupConfig.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="hidden rounded-full border border-emerald-600/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-emerald-700 sm:inline">
                    {popupConfig.badge}
                  </span>
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close notification"
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <h4 id="promo-popup-title" className="font-display text-xl text-ink sm:text-2xl">
                  {popupConfig.title}
                </h4>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                  {popupConfig.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {popupConfig.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAction}
                  className="btn-shine group flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 py-3 text-sm font-bold text-navy-950 shadow-gold-soft transition-all duration-300 hover:shadow-gold-glow"
                >
                  <span className="relative z-10">{popupConfig.buttonText}</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted transition-colors hover:text-ink"
                >
                  Later
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-ink/[0.07] pt-4 font-mono text-[9px] uppercase tracking-widest2 text-ink-muted/80">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                Advisory assistance across 270+ institutional lenders
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
