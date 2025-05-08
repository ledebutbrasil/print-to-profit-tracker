
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Como faço para registrar uma aposta?
              </AccordionTrigger>
              <AccordionContent>
                Você simplesmente envia o print da aposta no WhatsApp do Stake Tracker. A IA faz o resto!
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                O site é seguro?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Nunca compartilhamos suas informações e seguimos as melhores práticas de segurança.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                É compatível com todas as casas?
              </AccordionTrigger>
              <AccordionContent>
                Trabalhamos com prints das principais casas do Brasil e do mundo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Preciso instalar algo?
              </AccordionTrigger>
              <AccordionContent>
                Não! Tudo funciona pelo seu WhatsApp.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Consigo cancelar a assinatura a qualquer momento?
              </AccordionTrigger>
              <AccordionContent>
                Sim, sem pegadinhas nem burocracia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
