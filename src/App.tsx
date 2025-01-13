import React from 'react';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Tickets from './components/Tickets';
import ReservationForm from './components/ReservationForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Toaster position="top-center" />
      <Hero />
      <Activities />
      <Tickets />
      <ReservationForm />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;