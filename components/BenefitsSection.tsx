import React from 'react';

const ForkKnifeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);
const MoonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);
const RocketIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const SealIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const benefits = [
  {
    icon: <ForkKnifeIcon />,
    title: 'Sem Dietas Restritivas',
    description: 'Conquiste o corpo dos seus sonhos com a liberdade de comer o que você mais gosta, sem culpa.',
  },
  {
    icon: <MoonIcon />,
    title: 'Sem Exercícios Exaustivos',
    description: 'Nossa fórmula potente atua na queima de gordura até mesmo enquanto você descansa.',
  },
  {
    icon: <RocketIcon />,
    title: 'Resultados Rápidos e Visíveis',
    description: 'Sinta a diferença na balança e no espelho já na primeira semana de uso contínuo.',
  },
  {
    icon: <SealIcon />,
    title: '100% Natural e Seguro',
    description: 'Produto com fórmula natural, aprovado pela ANVISA e sem relatos de efeitos colaterais.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Por Que Nosso Método é Infalível?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
              {benefit.icon}
              <h3 className="text-xl font-bold mt-6 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
