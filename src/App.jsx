import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
import Cursor from './components/Cursor';
import { Sheet } from './components/ui/Primitives';
import { initSmoothScroll, destroySmoothScroll } from './lib/scroll';

export default function App() {
  const [selectedLoanCategory, setSelectedLoanCategory] = useState('Home Loan Transfer');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.3 });

  useEffect(() => {
    initSmoothScroll();
    return () => destroySmoothScroll();
  }, []);

  const handleSelectLoan = (category) => {
    setSelectedLoanCategory(category);
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-ink selection:bg-gold-400 selection:text-navy-950">
      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600"
        style={{ scaleX: progress }}
      />

      {/* Custom cursor ring (desktop) */}
      <Cursor />

      <Navbar />

      {/* Continuous curved canvas — every section slips over the previous one */}
      <main className="relative z-0 flex-grow">
        <Hero />

        <Sheet tone="white" z={10}>
          <TrustGuarantee />
        </Sheet>

        <Sheet tone="blue" z={20}>
          <RevenueModel />
        </Sheet>

        <Sheet tone="white" z={30}>
          <BalanceTransfer onSelectLoan={handleSelectLoan} />
        </Sheet>

        <Sheet tone="blue" z={40}>
          <section id="savings-calculator">
            <SavingsCalculator onSelectLoan={handleSelectLoan} />
          </section>
        </Sheet>

        <Sheet tone="white" z={50}>
          <CaseStudy />
        </Sheet>

        <Sheet tone="blue" z={60}>
          <LoanSolutions onSelectLoan={handleSelectLoan} />
        </Sheet>

        <Sheet tone="white" z={70}>
          <WhyChooseUs />
        </Sheet>

        <Sheet tone="blue" z={80}>
          <Process />
        </Sheet>

        <Sheet tone="white" z={90}>
          <Partners />
        </Sheet>

        <Sheet tone="blue" z={100}>
          <About />
        </Sheet>

        <Sheet tone="white" z={110}>
          <Contact selectedLoanCategory={selectedLoanCategory} />
        </Sheet>

        <Sheet tone="cream" z={120} className="mb-8 sm:mb-12">
          <Footer />
        </Sheet>
      </main>

      <LoanSanctionPopup onSelectLoan={handleSelectLoan} />
      <FloatingContact />
    </div>
  );
}
