import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Check, Clock, Shield, TrendingUp, Users, FileCheck, ArrowRight } from 'lucide-react';

export const Makelaars: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Geverifieerde profielen',
      description: 'Elk profiel dat via het platform binnenkomt, is geverifieerd en voorzien van identiteitscontrole en financiële basisinformatie.'
    },
    {
      icon: Clock,
      title: 'Geen tijdverlies',
      description: 'Beoordeel vooraf of een kandidaat geschikt is, zonder eindeloze telefoongesprekken of verspilde tijd.'
    },
    {
      icon: FileCheck,
      title: 'Complete dossiers',
      description: 'Ontvang automatisch samengestelde dossiers met alle relevante informatie van kandidaten.'
    },
    {
      icon: Users,
      title: 'Echte kandidaten',
      description: 'Plan geen afspraken meer met mensen die uiteindelijk niet komen opdagen.'
    },
    {
      icon: TrendingUp,
      title: 'Premium zichtbaarheid',
      description: 'Kopers komen sneller tot actie wanneer een woning stijlvol, overzichtelijk en modern wordt gepresenteerd.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Voor Makelaars</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Efficiëntie en kwaliteit
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            VIMMO geeft makelaars wat ze nodig hebben: duidelijkheid, controle en echte kandidaten.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="p-6 border border-gray-200 hover:border-gold-300 transition-colors">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* For Rental Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-dark-900 mb-6">Voor verhuur betekent VIMMO rust</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Je plant geen afspraken meer met mensen die uiteindelijk niet komen opdagen.
                Elke kandidaat is vooraf geverifieerd met identiteitscontrole en loonfiche-upload.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Geen no-shows meer</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Vooraf gescreende kandidaten</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Automatische afsprakenplanning</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Complete dossiers op aanvraag</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 shadow-xl border border-gray-100">
              <blockquote className="font-serif text-2xl text-dark-900 mb-4 italic">
                "Voor verhuur zorgt de verificatie ervoor dat elke afspraak waardevol is."
              </blockquote>
              <p className="text-gray-500">— VIMMO</p>
            </div>
          </div>
        </div>
      </div>

      {/* For Sales Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-dark-900 p-8 text-white">
              <blockquote className="font-serif text-2xl mb-4 italic">
                "Voor verkoop zorgt de presentatie en zichtbaarheid voor meer aanvragen en betere matches."
              </blockquote>
              <p className="text-gold-400">— VIMMO</p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif text-dark-900 mb-6">Voor verkoop betekent het betrouwbaarheid</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kopers komen sneller tot actie wanneer een woning stijlvol, overzichtelijk en modern
                wordt gepresenteerd. Premium zichtbaarheid zorgt voor duidelijke aanvragen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Professionele woningpresentaties</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Flexibele zichtbaarheidsniveaus</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Duidelijke en directe aanvragen</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500" />
                  <span className="text-gray-700">Geen onnodige complexiteit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Quick Links */}
      <div className="bg-gold-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-dark-900 mb-8 text-center">Ontdek onze tarieven</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link
              to="/verkoop"
              className="bg-white p-8 border border-gray-200 hover:border-gold-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl font-serif text-dark-900 mb-2 group-hover:text-gold-600">Verkooptarieven</h3>
              <p className="text-gray-600 mb-4">Vanaf €39 per vermelding</p>
              <span className="text-gold-600 flex items-center gap-2">
                Bekijk tarieven <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              to="/huur"
              className="bg-white p-8 border border-gray-200 hover:border-gold-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl font-serif text-dark-900 mb-2 group-hover:text-gold-600">Huurabonnementen</h3>
              <p className="text-gray-600 mb-4">Vanaf €29 per maand</p>
              <span className="text-gold-600 flex items-center gap-2">
                Bekijk abonnementen <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">Klaar om professioneel te werken?</h2>
          <p className="text-gray-400 mb-8">
            Sluit u aan bij VIMMO en ervaar het verschil van een platform dat speciaal
            gebouwd is voor makelaars.
          </p>
          <Link
            to="/owners/register"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 hover:bg-gold-600 transition-colors"
          >
            Word partner <ArrowRight size={18} />
          </Link>
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
