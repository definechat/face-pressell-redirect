import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    name: 'Maria S.',
    age: 42,
    result: 'Perdeu 12kg!',
    quote: 'Nunca imaginei que seria tão fácil! Me sinto mais jovem e cheia de energia. Recomendo para todas as minhas amigas.',
  },
  {
    name: 'Juliana P.',
    age: 35,
    result: 'Perdeu 15kg!',
    quote: 'Depois de anos tentando de tudo, finalmente encontrei algo que funciona. Minha autoestima mudou completamente.',
  },
  {
    name: 'Carla M.',
    age: 29,
    result: 'Perdeu 8kg!',
    quote: 'Perdi peso sem abrir mão das comidas que amo. É incrível! O resultado veio muito mais rápido do que eu esperava.',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Veja Quem Já Transformou o Corpo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="italic text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}, {testimonial.age} anos</p>
                <p className="text-emerald-600 font-semibold mt-1">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
