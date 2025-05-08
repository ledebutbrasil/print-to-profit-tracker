
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
              Controle absoluto das suas apostas, direto no WhatsApp
            </h1>
            <p className="text-xl text-gray-700">
              Envie seus prints de apostas, receba análises automáticas e alcance o próximo nível na gestão da sua banca.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-primary">✓</span> Registro 100% automático
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-primary">✓</span> Alertas de stop-loss personalizados
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-primary">✓</span> Relatórios práticos e inteligentes
              </li>
            </ul>
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg">
                Começar pelo WhatsApp
              </Button>
              <div className="mt-2 bg-accent py-1 px-3 rounded-lg inline-block">
                <p className="text-sm font-medium">Teste grátis por 7 dias — sem compromisso!</p>
              </div>
            </div>
          </div>

          <div className="flex-1 animate-fade-in">
            <div className="bg-gray-50 p-4 rounded-2xl shadow-lg max-w-sm mx-auto border border-gray-200">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">S</div>
                  <div className="ml-3">
                    <p className="font-medium">Stake Tracker</p>
                    <p className="text-xs opacity-75">Online</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 p-3 bg-[#E5F7D8] h-96 overflow-y-auto">
                {/* Mock conversation */}
                <div className="flex justify-end">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                    <p className="text-sm">Olá! Quero acompanhar minhas apostas</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                    <p className="text-sm">Olá! Sou o bot do Stake Tracker. Envie o print da sua aposta para começar.</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                    <div className="w-48 h-32 bg-gray-300 rounded-md flex items-center justify-center text-sm text-gray-500">
                      [Print da aposta]
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                    <p className="text-sm">✅ Aposta registrada!</p>
                    <div className="bg-green-50 border border-green-100 rounded p-2 mt-2">
                      <p className="text-xs font-medium">Detalhes:</p>
                      <p className="text-xs">Valor: R$ 100,00</p>
                      <p className="text-xs">Odd: 1.85</p>
                      <p className="text-xs">Mercado: Over 2.5</p>
                      <p className="text-xs">Jogo: Barcelona x Real Madrid</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                    <p className="text-sm">Quero um relatório das minhas apostas</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                    <p className="text-sm">📊 <strong>Seu relatório diário:</strong></p>
                    <div className="bg-blue-50 border border-blue-100 rounded p-2 mt-2">
                      <p className="text-xs">Apostas: 5</p>
                      <p className="text-xs">Lucro: R$ 250,00</p>
                      <p className="text-xs">Melhor mercado: Over 2.5</p>
                      <p className="text-xs">ROI: 18%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-b-lg border-t border-gray-200">
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-100 rounded-full h-10"></div>
                  <div className="w-10 h-10 ml-2 rounded-full bg-green-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
