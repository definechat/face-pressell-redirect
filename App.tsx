import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const redirectUrl = './redirect.html';

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header redirectUrl={redirectUrl} />
      <main>
        <HeroSection redirectUrl={redirectUrl} />
        <ProductSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection redirectUrl={redirectUrl} />
      </main>
      <Footer />
    </div>
  );
};

export default App;