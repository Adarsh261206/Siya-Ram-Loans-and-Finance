import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Phone, Mail, ArrowRight, RefreshCw } from 'lucide-react';
import { contactInfo } from '../data/loanData';

const loanTypes = [
  "Home Loan",
  "Home Loan Transfer",
  "Personal Loan",
  "Personal Loan Balance Transfer",
  "Business Loan",
  "Fresh Property Purchase",
  "CIBIL Profile Assessment",
  "Other"
];

export default function ContactForm({ selectedLoanCategory }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    loanType: 'Home Loan Transfer',
    requiredAmount: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  // Update loan type if passed from external buttons
  useEffect(() => {
    if (selectedLoanCategory) {
      setFormData(prev => ({
        ...prev,
        loanType: selectedLoanCategory
      }));
    }
  }, [selectedLoanCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.loanType) {
      newErrors.loanType = "Please select a loan type";
    }

    if (!formData.requiredAmount.trim()) {
      newErrors.requiredAmount = "Please enter required loan amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference code
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
      message: ''
    });
    setErrors({});
  };

  // Pre-formatted WhatsApp text
  const getWhatsAppMessage = () => {
    const text = `Hello Siyaram Loans & Finance,\nI would like to apply for loan assistance.\n\n*Name:* ${formData.fullName}\n*Mobile:* ${formData.mobileNumber}\n*Email:* ${formData.email}\n*Loan Type:* ${formData.loanType}\n*Required Amount:* ${formData.requiredAmount}\n*Message:* ${formData.message || 'Kindly contact me for assessment.'}\n*Ref Code:* ${enquiryRef}`;
    return encodeURIComponent(text);
  };

  // Pre-formatted Mailto link
  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Loan Consultation Request - ${formData.fullName} (${formData.loanType})`);
    const body = encodeURIComponent(
      `Hello Siyaram Loans & Finance Team,\n\nPlease find my consultation details below:\n\nFull Name: ${formData.fullName}\nMobile Number: ${formData.mobileNumber}\nEmail Address: ${formData.email}\nSelected Loan Category: ${formData.loanType}\nRequired Loan Amount: ${formData.requiredAmount}\nMessage/Notes: ${formData.message || 'N/A'}\nReference: ${enquiryRef}\n\nLooking forward to hearing from your desk.`
    );
    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-8 md:p-10 border border-royal-500/30 shadow-2xl backdrop-blur-xl relative">
      {isSubmitted ? (
        <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-glow">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-wider">
              Enquiry Registered
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-heading">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
              Your consultation request has been prepared under Ref ID: <strong className="text-amber-400 font-mono">{enquiryRef}</strong>.
            </p>
          </div>

          {/* Quick Connect Action Buttons */}
          <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-700/80 max-w-md mx-auto space-y-3 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Instant Dispatch Options:
            </div>

            <a
              href={`https://wa.me/${contactInfo.whatsappClean || '919594139192'}?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Directly via WhatsApp</span>
            </a>

            <a
              href={getMailtoLink()}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-royal-700 hover:bg-royal-600 text-white flex items-center justify-center gap-2 transition-all border border-royal-500/40"
            >
              <Mail className="w-4 h-4" />
              <span>Send Pre-Filled Email</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Requirement</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-navy-800 pb-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              Request Free Consultation
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Zero customer fees • Strictly confidential • Direct institutional matching
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-xl bg-navy-950/80 border ${
                errors.fullName ? 'border-red-500 focus:border-red-400' : 'border-navy-700 focus:border-amber-400'
              } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Grid: Mobile & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Mobile Number *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3.5 text-xs font-bold text-slate-500">+91</span>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="95941 39192"
                  className={`w-full pl-12 pr-4 py-3 rounded-xl bg-navy-950/80 border ${
                    errors.mobileNumber ? 'border-red-500 focus:border-red-400' : 'border-navy-700 focus:border-amber-400'
                  } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all`}
                />
              </div>
              {errors.mobileNumber && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.mobileNumber}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-navy-950/80 border ${
                  errors.email ? 'border-red-500 focus:border-red-400' : 'border-navy-700 focus:border-amber-400'
                } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Grid: Loan Type & Required Amount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="loanType" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Loan Type *
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-navy-700 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer"
              >
                {loanTypes.map((type) => (
                  <option key={type} value={type} className="bg-navy-950 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="requiredAmount" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Required Amount *
              </label>
              <input
                type="text"
                id="requiredAmount"
                name="requiredAmount"
                value={formData.requiredAmount}
                onChange={handleChange}
                placeholder="e.g. ₹50 Lakhs"
                className={`w-full px-4 py-3 rounded-xl bg-navy-950/80 border ${
                  errors.requiredAmount ? 'border-red-500 focus:border-red-400' : 'border-navy-700 focus:border-amber-400'
                } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all`}
              />
              {errors.requiredAmount && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.requiredAmount}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Message / Existing Loan Details (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Mention current bank, existing ROI, or top-up requirement..."
              className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-navy-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-glow-gold transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 group text-base"
          >
            <span>Submit Enquiry</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-[11px] text-center text-slate-400">
            By submitting, you agree to receive institutional loan advisory assistance. No fee is charged to you.
          </p>
        </form>
      )}
    </div>
  );
}
