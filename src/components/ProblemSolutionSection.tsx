
import React from 'react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Já se sentiu perdido na sua gestão de banca?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">O problema</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <p className="text-gray-700">Acompanhava tudo em planilhas que davam trabalho?</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <p className="text-gray-700">Nunca sabia, ao certo, quanto estava ganhando ou perdendo?</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">×</span>
                <p className="text-gray-700">Não tinha controle sobre o limite de perdas diárias?</p>
              </li>
            </ul>
          </div>

          {/* Solution Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">A solução</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <p className="text-gray-700">Com o Stake Tracker, basta enviar seu print de aposta pelo WhatsApp.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <p className="text-gray-700">O bot reconhece mercado, odd, valor, resultado e registra na hora.</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <p className="text-gray-700">Você recebe relatórios detalhados e alertas inteligentes direto na conversa.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
