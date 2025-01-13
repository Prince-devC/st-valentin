import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    ticketType: 'standard',
    reserverName: '',
    reserverEmail: '',
    reserverPhone: '',
    partnerName: '',
    address: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailParams = {
      to_email: formData.reserverEmail,
      to_name: formData.reserverName,
      ticket_type: formData.ticketType,
      ...formData
    };

    const adminEmailParams = {
      reserverName: formData.reserverName,
      reserverEmail: formData.reserverEmail,
      reserverPhone: formData.reserverPhone,
      ticket_type: formData.ticketType,
      partnerName: formData.partnerName,
      address: formData.address,
      to_email: 'hivetrad@gmail.com'
    };

    try {
      // Send email to reserver
      await emailjs.send(
        'service_6yh86lb',
        'template_hbpocta',
        emailParams,
        'bikYCQ63NI7pHeWVY'
      );

      // Send email to admin
      await emailjs.send(
        'service_6yh86lb',
        'template_wtto74r',
        adminEmailParams,
        'bikYCQ63NI7pHeWVY'
      );

      toast.success('Réservation effectuée avec succès!');
      setFormData({
        ticketType: 'standard',
        reserverName: '',
        reserverEmail: '',
        reserverPhone: '',
        partnerName: '',
        address: ''
      });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="py-20 bg-pink-50" id="reservation">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Réservation
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Type de ticket
            </label>
            <select
              value={formData.ticketType}
              onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="standard">Standard - 30,000F</option>
              <option value="vip">VIP - 50,000F</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-4">Réservant</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Entrer votre nom et prénom"
                value={formData.reserverName}
                onChange={(e) => setFormData({ ...formData, reserverName: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.reserverEmail}
                onChange={(e) => setFormData({ ...formData, reserverEmail: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={formData.reserverPhone}
                onChange={(e) => setFormData({ ...formData, reserverPhone: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-4">Partenaire</h3>
            <input
              type="text"
              placeholder="Nom complet du partenaire"
              value={formData.partnerName}
              onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Adresse
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full p-3 border rounded-lg"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Confirmer la réservation
          </button>
        </form>
      </div>
    </section>
  );
}