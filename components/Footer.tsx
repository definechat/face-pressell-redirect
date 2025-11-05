import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-10 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Corpo Ideal. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-4 max-w-4xl mx-auto">
          Disclaimer: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa. Para obter mais informações, consulte nossos termos de serviço.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
