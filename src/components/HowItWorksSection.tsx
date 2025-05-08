
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Como funciona na prática?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-muted p-6 rounded-lg h-full">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Step 1</h3>
              <p className="text-center">Envie o print da sua aposta no WhatsApp.</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#004A2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="bg-muted p-6 rounded-lg h-full">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="6" height="16" x="4" y="4" rx="2"></rect>
                  <rect width="6" height="9" x="14" y="4" rx="2"></rect>
                  <path d="M22 11h-4c-1 0-2 .6-2 1.5S15 14 14 14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Step 2</h3>
              <p className="text-center">A IA do Stake Tracker lê, interpreta e salva todos os detalhes automaticamente.</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#004A2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Step 3 */}
          <div>
            <div className="bg-muted p-6 rounded-lg h-full">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Step 3</h3>
              <p className="text-center">Receba relatórios, controles e alertas no próprio WhatsApp, de forma instantânea.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary text-white hover:bg-primary/90">
            Veja um exemplo real
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
