
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full border-b border-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Stake Tracker</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#como-funciona" className="text-gray-600 hover:text-primary">Como Funciona</a>
          <a href="#beneficios" className="text-gray-600 hover:text-primary">Benefícios</a>
          <a href="#planos" className="text-gray-600 hover:text-primary">Planos</a>
          <a href="#faq" className="text-gray-600 hover:text-primary">FAQ</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Começar Agora
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
