import React from 'react';
import { Check } from 'lucide-react';

const tickets = [
  {
    name: "Standard",
    price: "30,000F",
    features: [
      "Accès à la scène",
      "Buffet",
      "1 vin",
      "4 bouteilles de boisson"
    ]
  },
  {
    name: "VIP",
    price: "50,000F",
    features: [
      "Places près de la scène",
      "Buffet VIP",
      "1 Champagne",
      "4 bouteilles de boisson",
      "Coffret surprise"
    ]
  }
];

export default function Tickets() {
  return (
    <section className="py-20 bg-white" id="tickets">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nos Tickets
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ticket {ticket.name}
              </h3>
              <p className="text-4xl font-bold text-pink-500 mb-6">
                {ticket.price}
              </p>
              <ul className="space-y-3">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#reservation"
                className="mt-8 block w-full text-center bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Réserver
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}