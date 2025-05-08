
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comece agora a transformar sua gestão de apostas!
        </h2>
        <p className="text-xl mb-8 md:max-w-2xl mx-auto">
          Envie seu print, receba seu relatório, domine a sua banca.
        </p>
        <Button className="bg-accent hover:bg-accent/90 text-black text-lg px-8 py-6">
          Quero testar grátis no WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
