
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent"></div>
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="h-2 w-2 rounded-full bg-white" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            ></div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div 
              key={`line-${i}`} 
              className="absolute h-px bg-white/30"
              style={{
                top: `${20 + (i * 30)}%`,
                left: "0",
                right: "0",
                transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (Math.random() * 5)}deg)`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Comece agora a transformar sua gestão de apostas!
          </h2>
          <p className="text-xl mb-8 text-white/90 md:max-w-2xl mx-auto">
            Envie seu print, receba seu relatório, domine a sua banca.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-black text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300">
            Quero testar grátis no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
