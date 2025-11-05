import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const whatsappUrl = 'https://chat.whatsapp.com/Ey8YDUZXrI7AWaY9EU7gi0';
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      setShowRedirectMessage(true);
      window.location.href = whatsappUrl;
    }, 5000); // Redireciona após 5 segundos

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(redirectTimer);
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header redirectUrl={whatsappUrl} />
      <main>
        <HeroSection redirectUrl={whatsappUrl} />
        <ProductSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection redirectUrl={whatsappUrl} />
      </main>
      <Footer />
      {showRedirectMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-full shadow-lg z-50">
          Você está sendo redirecionado(a) para o grupo VIP...
        </div>
      )}
    </div>
  );
};

export default App;