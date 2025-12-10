import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

export const Verkoop: React.FC = () => {
  const plans = [
    {
      name: 'Standaard',
      launchPrice: 39,
      regularPrice: 49,
      duration: '30 dagen',
      icon: Check,
      features: [
        'Vermelding in zoekresultaten',
        'Professionele presentatie',
        'Tot 10 foto\'s',
        'Basis statistieken',
        'Email notificaties'
      ],
      description: 'Ideaal voor woningen die zichzelf al goed verkopen.',
      highlighted: false
    },
    {
      name: 'Premium',
      launchPrice: 69,
      regularPrice: 89,
      duration: '30 dagen',
      icon: Star,
      features: [
        'Alles van Standaard',
        'Groter & prominenter in zoeklijst',
        'Tot 20 foto\'s',
        'Uitgebreide statistieken',
        'Prioriteit in resultaten',
        'Social media boost'
      ],
      description: 'Meer zichtbaarheid, meer kliks, meer kandidaten.',
      highlighted: true
    },
    {
      name: 'Featured',
      launchPrice: 119,
      regularPrice: 149,
      duration: '30 dagen',
      icon: Crown,
      features: [
        'Alles van Premium',
        'Bovenaan in zoekresultaten',
        'Onbeperkt foto\'s',
        'Video integratie',
        'Homepage spotlight',
        'Dedicated account manager',
        'Maximale exposure'
      ],
      description: 'Kopers kunnen uw woning niet missen.',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Verkoop</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Zichtbaarheid op maat
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Een woning verkopen vraagt een evenwicht tussen helderheid en bereik.
            Kies het niveau van zichtbaarheid dat bij uw pand past.
          </p>
        </div>
      </div>

      {/* Launch Banner */}
      <div className="bg-gold-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-medium flex items-center justify-center gap-2">
            <Zap size={18} />
            Lanceertarieven actief — Profiteer nu van speciale prijzen tijdens onze lancering
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative border rounded-sm p-8 ${
                  plan.highlighted
                    ? 'border-gold-500 shadow-xl shadow-gold-500/10 scale-105'
                    : 'border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-white px-4 py-1 text-sm font-medium">
                    Meest Gekozen
                  </div>
                )}

                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                  plan.highlighted ? 'bg-gold-100 text-gold-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-serif text-dark-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-dark-900">€{plan.launchPrice}</span>
                    <span className="text-gray-400 line-through">€{plan.regularPrice}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/owners/register"
                  className={`block w-full py-3 text-center font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-gold-500 text-white hover:bg-gold-600'
                      : 'bg-dark-900 text-white hover:bg-dark-800'
                  }`}
                >
                  Kies {plan.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-dark-900 mb-8 text-center">Hoe het werkt</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-medium text-dark-900 mb-2">Professionele uitstraling</h3>
              <p className="text-gray-600">
                Elke woning op VIMMO krijgt een strakke en professionele voorstelling die kopers
                meteen het juiste gevoel geeft. Vertrouwen begint bij de eerste indruk.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-medium text-dark-900 mb-2">Flexibele zichtbaarheid</h3>
              <p className="text-gray-600">
                U kiest zelf welk niveau van zichtbaarheid bij het pand past. Verkopers kunnen
                hun zichtbaarheid op elk moment upgraden als ze merken dat ze extra aandacht nodig hebben.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-medium text-dark-900 mb-2">Transparante tarieven</h3>
              <p className="text-gray-600">
                Het platform blijft altijd goedkoper en transparanter dan de traditionele grote huizenwebsites,
                maar biedt dezelfde professionele uitstraling en een rustiger gebruikerservaring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">Klaar om te verkopen?</h2>
          <p className="text-gray-400 mb-8">
            Start vandaag met uw eerste listing en ontdek hoe krachtig VIMMO werkt.
          </p>
          <Link
            to="/owners/register"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 hover:bg-gold-600 transition-colors"
          >
            Start nu <ArrowRight size={18} />
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
