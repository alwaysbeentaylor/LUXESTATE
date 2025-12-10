import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Mail, MessageSquare, Clock, Send, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Neem contact op
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            VIMMO staat klaar voor vragen en ondersteuning. We beantwoorden elke vraag met aandacht.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-medium text-dark-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">info@vimmo.be</p>
          </div>
          <div className="bg-white p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-medium text-dark-900 mb-2">Support</h3>
            <p className="text-gray-600 text-sm">Via uw account dashboard</p>
          </div>
          <div className="bg-white p-6 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-medium text-dark-900 mb-2">Reactietijd</h3>
            <p className="text-gray-600 text-sm">Binnen 24 uur</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h2 className="text-3xl font-serif text-dark-900 mb-4">Bericht verzonden!</h2>
            <p className="text-gray-600 mb-8">
              Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="text-gold-600 hover:text-gold-700 font-medium"
            >
              Nog een bericht versturen
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-serif text-dark-900 mb-8 text-center">Stuur ons een bericht</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">Naam</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 p-3 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Uw naam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">E-mailadres</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-300 p-3 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="uw@email.be"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-900 mb-2">Onderwerp</label>
                <select
                  required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-gray-300 p-3 focus:border-gold-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Selecteer een onderwerp</option>
                  <option value="algemeen">Algemene vraag</option>
                  <option value="verkoop">Vraag over verkopen</option>
                  <option value="verhuur">Vraag over verhuren</option>
                  <option value="technisch">Technisch probleem</option>
                  <option value="partnership">Partnership / Samenwerking</option>
                  <option value="investeren">Interesse in investeren</option>
                  <option value="anders">Anders</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-900 mb-2">Bericht</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 p-3 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Hoe kunnen we u helpen?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-dark-900 text-white py-4 hover:bg-gold-500 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Verstuur bericht
              </button>
            </form>
          </>
        )}
      </div>

      {/* FAQ Link */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-dark-900 mb-4">Misschien vindt u het antwoord al</h2>
          <p className="text-gray-600 mb-6">
            Bekijk onze veelgestelde vragen voor directe antwoorden.
          </p>
          <a
            href="/faq"
            className="inline-block border border-dark-900 text-dark-900 px-8 py-3 hover:bg-dark-900 hover:text-white transition-colors"
          >
            Bekijk FAQ
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>&copy; 2024 VIMMO. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
};
