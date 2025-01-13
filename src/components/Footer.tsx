import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="text-2xl font-bold">Nuit de l'amour</span>
          </div>
          <p className="text-gray-400 text-center">
            Le gala où l'amour est roi
          </p>
          <div className="mt-8">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-pink-500 transition-colors">Accueil</a>
              <a href="#tickets" className="hover:text-pink-500 transition-colors">Tickets</a>
              <a href="#reservation" className="hover:text-pink-500 transition-colors">Réservation</a>
              <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} Nuit de l'amour. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}