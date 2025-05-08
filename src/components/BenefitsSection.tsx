
import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Por que o Stake Tracker faz diferença?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Registro instantâneo</h3>
            <p className="text-gray-700">Até 5 segundos após enviar o print, tudo já está salvo e organizado.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <line x1="12" x2="12" y1="9" y2="13"></line>
                <line x1="12" x2="12.01" y1="17" y2="17"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Alertas de stop-loss</h3>
            <p className="text-gray-700">Receba um aviso quando bater seu limite diário. Proteja seu capital.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Relatórios claros</h3>
            <p className="text-gray-700">Saiba, dia a dia, como está sua performance: lucro, prejuízo, melhores mercados e mais.</p>
          </div>
          
          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Segurança total</h3>
            <p className="text-gray-700">Nada é compartilhado — seus dados são protegidos com criptografia e privacidade máxima.</p>
          </div>
          
          {/* Benefit 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                <line x1="15" x2="15.01" y1="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fácil para qualquer apostador</h3>
            <p className="text-gray-700">Não importa se é novato ou profissional, nossa inteligência facilita sua rotina.</p>
          </div>
          
          {/* Yellow Box */}
          <div className="bg-accent p-6 rounded-lg shadow-md flex items-center">
            <p className="text-lg font-semibold">Seu único trabalho? Apostar com responsabilidade e nos mandar o print!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
