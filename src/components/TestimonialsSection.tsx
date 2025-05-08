
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          O que nossos clientes dizem:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg mr-4">
                LS
              </div>
              <div>
                <p className="font-semibold">Lucas S.</p>
                <p className="text-sm text-gray-600">Profissional de apostas</p>
              </div>
            </div>
            <div className="pl-16">
              <p className="text-gray-700 italic">
                "Nunca mais fiquei no prejuízo sem perceber. O bot me avisa quando chega a hora de parar."
              </p>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg mr-4">
                AM
              </div>
              <div>
                <p className="font-semibold">Ana M.</p>
                <p className="text-sm text-gray-600">Apostadora amadora</p>
              </div>
            </div>
            <div className="pl-16">
              <p className="text-gray-700 italic">
                "Acabou o sofrimento com planilhas confusas. Agora tudo fica registrado. Recomendo demais!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
