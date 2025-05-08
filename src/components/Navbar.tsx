
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full border-b border-gray-100 py-4 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">S</span>
            Stake Tracker
          </h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#como-funciona" className="text-gray-600 hover:text-primary transition-colors">Como Funciona</a>
          <a href="#beneficios" className="text-gray-600 hover:text-primary transition-colors">Benefícios</a>
          <a href="#planos" className="text-gray-600 hover:text-primary transition-colors">Planos</a>
          <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all">
          Começar Agora
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
