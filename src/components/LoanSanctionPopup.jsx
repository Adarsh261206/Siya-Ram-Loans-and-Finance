import React, { useState, useEffect } from 'react';
import { Sparkles, X, ArrowRight, ShieldCheck, HelpCircle, Bell } from 'lucide-react';
import { popupConfig } from '../data/loanData';

export default function LoanSanctionPopup({ onSelectLoan }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('sy_loan_popup_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Appears after short delay (2.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

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
    if (onSelectLoan) {
      onSelectLoan(popupConfig.targetLoan || 'Home Loan');
    }
    handleClose();
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
    <>
      {/* Small subtle reopening pill when closed */}
      {!isVisible && (
        <button
          type="button"
          onClick={handleReopen}
          className="fixed bottom-20 sm:bottom-6 left-4 z-40 px-3.5 py-2 rounded-full bg-navy-900/90 border border-royal-500/40 text-amber-300 text-xs font-bold shadow-xl backdrop-blur-md hover:bg-navy-850 hover:border-amber-400 transition-all flex items-center gap-2 group"
          aria-label="Reopen Loan Assistance Notification"
        >
          <Bell className="w-3.5 h-3.5 text-amber-400 group-hover:animate-bounce" />
          <span>Need Loan Help?</span>
        </button>
      )}

      {/* Floating Notification Popup */}
      {isVisible && (
        <div
          role="dialog"
          aria-labelledby="promo-popup-title"
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-sm sm:max-w-md w-[calc(100%-2rem)] sm:w-auto bg-navy-950/98 border border-amber-400/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Top Row: Tag, Badge & Close Button */}
          <div className="flex items-center justify-between gap-3 mb-3 border-b border-navy-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 font-heading">
                {popupConfig.tag}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {popupConfig.badge}
              </span>
              <button
                type="button"
                onClick={handleClose}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-1.5 mb-4">
            <h4 id="promo-popup-title" className="text-base sm:text-lg font-black text-white font-heading">
              {popupConfig.title}
            </h4>
            <p className="text-xs font-semibold text-royal-200">
              {popupConfig.subtitle}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {popupConfig.description}
            </p>
          </div>

          {/* Action CTA & Micro Notice */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={handleAction}
              className="w-full sm:flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-glow-gold transition-all flex items-center justify-center gap-1.5"
            >
              <span>{popupConfig.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="w-full sm:w-auto py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-navy-900 transition-colors"
            >
              Later
            </button>
          </div>

          <div className="mt-3 pt-2 border-t border-navy-900 flex items-center gap-1.5 text-[10px] text-slate-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Advisory assistance across 270+ institutional lenders.</span>
          </div>
        </div>
      )}
    </>
  );
}
