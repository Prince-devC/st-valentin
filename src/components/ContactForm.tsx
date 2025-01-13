import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_6yh86lb',
        'template_wtto74r',
        {
          reserverName: formData.name,
          reserverEmail: formData.email,
          address: formData.message,
          to_email: 'hivetrad@gmail.com'
        },
        'bikYCQ63NI7pHeWVY'
      );
      
      toast.success('Message envoyé avec succès!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contactez-nous
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>hivetrad@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p>+229 01 40 53 23 32</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p>Salle des fêtes Lucide Palace, Godomey (en face de la boulangerie Saint Daniel)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="font-semibold">Date de l'événement</h3>
                  <p>Samedi 15 février 2025 à 20h30</p> {/* Update the date as needed */}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border rounded-lg"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}