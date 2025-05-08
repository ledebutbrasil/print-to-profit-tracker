
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Escolha o melhor para você
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Gratuito</h3>
            <p className="text-4xl font-bold mb-6">R$ 0,00</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>10 apostas/mês</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Relatórios básicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Registro via WhatsApp</span>
              </li>
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Teste grátis no WhatsApp
            </Button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-accent">
            <div className="bg-accent px-4 py-1 rounded-full text-center w-fit mx-auto mb-4">
              <span className="text-sm font-medium">Recomendado</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">R$ 29,90<span className="text-lg font-normal">/mês</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Apostas ilimitadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Relatórios completos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Alertas personalizados</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Suporte prioritário</span>
              </li>
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Assinar no WhatsApp
            </Button>
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-600">
          Pagamento seguro. Liberdade para cancelar quando quiser.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
