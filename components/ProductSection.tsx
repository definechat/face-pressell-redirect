import React from 'react';

const ProductSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Conheça o Segredo Por Trás dos Resultados
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          Este é o suplemento 100% natural que está ajudando milhares de pessoas a alcançarem o corpo dos sonhos sem dietas malucas ou exercícios exaustivos.
        </p>
        <div className="flex justify-center">
          <img 
            src="https://i.imgur.com/7MqYVZl.jpeg" 
            alt="Produto de Emagrecimento" 
            className="rounded-lg shadow-2xl max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
