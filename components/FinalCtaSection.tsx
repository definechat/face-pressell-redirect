import React from 'react';

interface FinalCtaSectionProps {
  redirectUrl: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ redirectUrl }) => {
  return (
    <section className="bg-emerald-600 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Sua Vaga no Grupo VIP Está Expirando!</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Clique no botão abaixo e garanta seu acesso ao grupo exclusivo. Lá você receberá o link de compra com desconto especial e frete grátis.
        </p>
        <p className="text-yellow-300 font-bold text-2xl animate-pulse mb-8">
          Restam Apenas 17 Vagas Com o Valor Promocional!
        </p>
        <a
          href={redirectUrl}
          className="inline-block bg-white text-emerald-700 font-bold text-xl py-4 px-12 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          SIM, QUERO GARANTIR MINHA VAGA!
        </a>
        <p className="mt-4 font-semibold">
          A partir de R$197 com frete grátis!
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
