import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Mail,
  RefreshCw,
  ArrowUpRight,
} from 'lucide-react';
import { contactInfo } from '../data/loanData';
import { GoldButton, EASE } from './ui/Primitives';

const loanTypes = [
  'Home Loan',
  'Home Loan Transfer',
  'Personal Loan',
  'Personal Loan Balance Transfer',
  'Business Loan',
  'Fresh Property Purchase',
  'CIBIL Profile Assessment',
  'Other',
];

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-[#FBF7EC] px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 transition-all duration-300 focus:outline-none ${
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-ink/10 focus:border-gold-500/70 focus:ring-1 focus:ring-gold-400/40'
  }`;

const labelClass = 'mb-2 block font-mono text-[9px] uppercase tracking-widest2 text-ink-muted';

export default function ContactForm({ selectedLoanCategory }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    loanType: 'Home Loan Transfer',
    requiredAmount: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  useEffect(() => {
    if (selectedLoanCategory) {
      setFormData((prev) => ({ ...prev, loanType: selectedLoanCategory }));
    }
  }, [selectedLoanCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.loanType) newErrors.loanType = 'Please select a loan type';
    if (!formData.requiredAmount.trim()) newErrors.requiredAmount = 'Please enter required loan amount';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const refCode = `SYR-${Math.floor(100000 + Math.random() * 900000)}`;
    setEnquiryRef(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      loanType: 'Home Loan Transfer',
      requiredAmount: '',
      message: '',
    });
    setErrors({});
  };

  const getWhatsAppMessage = () => {
    const text = `Hello Siyaram Loans & Finance,\nI would like to apply for loan assistance.\n\n*Name:* ${formData.fullName}\n*Mobile:* ${formData.mobileNumber}\n*Email:* ${formData.email}\n*Loan Type:* ${formData.loanType}\n*Required Amount:* ${formData.requiredAmount}\n*Message:* ${formData.message || 'Kindly contact me for assessment.'}\n*Ref Code:* ${enquiryRef}`;
    return encodeURIComponent(text);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Loan Consultation Request - ${formData.fullName} (${formData.loanType})`
    );
    const body = encodeURIComponent(
      `Hello Siyaram Loans & Finance Team,\n\nPlease find my consultation details below:\n\nFull Name: ${formData.fullName}\nMobile Number: ${formData.mobileNumber}\nEmail Address: ${formData.email}\nSelected Loan Category: ${formData.loanType}\nRequired Loan Amount: ${formData.requiredAmount}\nMessage/Notes: ${formData.message || 'N/A'}\nReference: ${enquiryRef}\n\nLooking forward to hearing from your desk.`
    );
    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-ink/[0.07] bg-white shadow-lift-light">


      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative space-y-7 px-7 py-12 text-center sm:px-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-600/30 bg-emerald-500/10 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div>
              <span className="rounded-full border border-gold-500/40 bg-gold-400/10 px-3.5 py-1 font-mono text-[9px] uppercase tracking-widest2 text-gold-700">
                Enquiry Registered
              </span>
              <h3 className="mt-4 font-display text-3xl text-ink">
                Thank You, {formData.fullName}.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                Your consultation request has been prepared under reference{' '}
                <strong className="font-mono text-gold-700">{enquiryRef}</strong>. Dispatch it
                instantly to the advisory desk:
              </p>
            </div>

            <div className="mx-auto max-w-md space-y-3">
              <a
                href={`https://wa.me/${contactInfo.whatsappClean || '919594139192'}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:bg-emerald-500"
              >
                <MessageSquare className="h-4 w-4" />
                Forward via WhatsApp
              </a>
              <a
                href={getMailtoLink()}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/10 bg-[#FBF7EC] py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-gold-500/60"
              >
                <Mail className="h-4 w-4 text-gold-600" />
                Send Pre-Filled Email
              </a>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted transition-colors hover:text-ink"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Submit Another Requirement
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative space-y-6 px-7 py-8 sm:px-9 sm:py-10"
          >
            <div className="border-b border-ink/[0.08] pb-6">
              <h3 className="font-display text-2xl text-ink sm:text-3xl">
                Request Free <em className="text-gradient-gold italic">Consultation</em>
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Zero customer fees · Strictly confidential · Direct institutional matching
              </p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={inputClass(errors.fullName)}
              />
              {errors.fullName && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Mobile + Email */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="mobileNumber" className={labelClass}>
                  Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-ink-muted">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="95941 39192"
                    className={`${inputClass(errors.mobileNumber)} pl-14`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.mobileNumber}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={inputClass(errors.email)}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Loan type + amount */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="loanType" className={labelClass}>
                  Loan Type *
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className={`${inputClass(false)} cursor-pointer appearance-none`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A87B12' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  {loanTypes.map((type) => (
                    <option key={type} value={type} className="bg-white text-ink">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="requiredAmount" className={labelClass}>
                  Required Amount *
                </label>
                <input
                  type="text"
                  id="requiredAmount"
                  name="requiredAmount"
                  value={formData.requiredAmount}
                  onChange={handleChange}
                  placeholder="e.g. ₹50 Lakhs"
                  className={inputClass(errors.requiredAmount)}
                />
                {errors.requiredAmount && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                    <AlertCircle className="h-3 w-3" /> {errors.requiredAmount}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Message / Existing Loan Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention current bank, existing ROI, or top-up requirement…"
                className={`${inputClass(false)} resize-none`}
              />
            </div>

            {/* Submit */}
            <div>
              <GoldButton className="w-full" type="submit">
                Submit Enquiry
              </GoldButton>
            </div>

            <p className="flex items-center justify-center gap-1.5 text-center font-mono text-[9px] uppercase tracking-widest2 text-ink-muted/80">
              <Send className="h-3 w-3" />
              No fee is ever charged to you · Assessed promptly
              <ArrowUpRight className="h-3 w-3 text-gold-600/70" />
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
