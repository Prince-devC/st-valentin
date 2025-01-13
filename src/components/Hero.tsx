import React from 'react';
import { Heart } from 'lucide-react';
import backgroundImage from '../assets/soiree.jpeg';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center px-4">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-12 h-12 text-pink-500 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Nuit de l'amour
        </h1>
        <p className="text-xl md:text-2xl text-pink-200 italic">
          Le gala où l'amour est roi
        </p>
        <div className="mt-8">
          <a
            href="#reservation"
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Réserver maintenant
          </a>
        </div>
      </div>
    </div>
  );
}