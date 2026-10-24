import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustGuarantee from './components/TrustGuarantee';
import RevenueModel from './components/RevenueModel';
import BalanceTransfer from './components/BalanceTransfer';
import SavingsCalculator from './components/SavingsCalculator';
import CaseStudy from './components/CaseStudy';
import LoanSolutions from './components/LoanSolutions';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Partners from './components/Partners';
import About from './components/About';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import LoanSanctionPopup from './components/LoanSanctionPopup';
import Footer from './components/Footer';

export default function App() {
  const [selectedLoanCategory, setSelectedLoanCategory] = useState('Home Loan Transfer');

  const handleSelectLoan = (category) => {
    setSelectedLoanCategory(category);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-navy-950">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Finance Notification Carousel & CIBIL Metric */}
        <Hero />

        {/* 2. Zero-Cost Trust Guarantee & CIBIL Cases Feature Card */}
        <TrustGuarantee />

        {/* 3. Transparent Revenue Model */}
        <RevenueModel />

        {/* 4. Strategic Balance Transfer (Separated Home Loan & Personal Loan Transfer + Example) */}
        <BalanceTransfer onSelectLoan={handleSelectLoan} />

        {/* 5. Interactive Bank Rate Savings Calculator */}
        <section id="calculator" className="bg-slate-900 py-10 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
          <SavingsCalculator onSelectLoan={handleSelectLoan} />
        </section>

        {/* 6. Case Study */}
        <CaseStudy />

        {/* 7. Comprehensive Loan Solutions (6 Core Services) */}
        <LoanSolutions onSelectLoan={handleSelectLoan} />

        {/* 8. Why Customers Choose Siyaram */}
        <WhyChooseUs />

        {/* 9. Simple Application Process */}
        <Process />

        {/* 10. Banking & Financial Network (Government Banks First, Private Banks Second, NBFCs Third) */}
        <Partners />

        {/* 11. About Section */}
        <About />

        {/* 12. Contact / Lead Section */}
        <Contact selectedLoanCategory={selectedLoanCategory} />
      </main>

      {/* Promotional Loan Sanction Floating Notification (Configurable, Responsive) */}
      <LoanSanctionPopup onSelectLoan={handleSelectLoan} />

      {/* Floating CTA Widget (WhatsApp & Call) */}
      <FloatingContact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
