import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Check, Shield, Calendar, FileText, Users, Building, ArrowRight } from 'lucide-react';

export const Huur: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      period: '/maand',
      icon: Users,
      features: [
        'Tot 3 actieve panden',
        'Geverifieerde kandidaten',
        'Identiteitscontrole',
        'Automatische afspraken',
        'Email notificaties',
        'Basis statistieken'
      ],
      description: 'Geschikt voor particulieren met een beperkt aantal panden.',
      highlighted: false
    },
    {
      name: 'Pro',
      price: 59,
      period: '/maand',
      icon: Building,
      features: [
        'Tot 15 actieve panden',
        'Alles van Basic',
        'Loonfiche verificatie',
        'Prioriteit in resultaten',
        'Uitgebreide kandidaatprofielen',
        'Export functionaliteit',
        'Telefonische support'
      ],
      description: 'Ideaal voor wie regelmatig panden beheert en vlot wil schakelen.',
      highlighted: true
    },
    {
      name: 'Premium',
      price: 99,
      period: '/maand',
      icon: Shield,
      features: [
        'Onbeperkt panden',
        'Alles van Pro',
        'Volledige documentcontrole',
        'Prioriteit in zichtbaarheid',
        'Dedicated account manager',
        'API toegang',
        'Custom branding',
        'SLA garantie'
      ],
      description: 'Gericht op kantoren die een hoog volume draaien.',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Verhuur</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Screening, verificatie en efficiëntie
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Huren vraagt een andere aanpak dan verkopen. Het gaat niet alleen om interesse,
            maar vooral om betrouwbaarheid.
          </p>
        </div>
      </div>

      {/* Value Props */}
      <div className="bg-gold-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-medium text-dark-900 mb-1">Geverifieerde Identiteit</h3>
              <p className="text-gray-600 text-sm">ID-documenten worden veilig geüpload en gecontroleerd.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-medium text-dark-900 mb-1">Loonfiche Controle</h3>
              <p className="text-gray-600 text-sm">Kandidaten uploaden loonfiches zodat u weet of ze kunnen betalen.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="font-medium text-dark-900 mb-1">Automatische Planning</h3>
              <p className="text-gray-600 text-sm">Afspraken worden automatisch ingepland. Geen no-shows meer.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-dark-900 mb-4">Maandabonnementen</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Altijd toegang tot geverifieerde kandidaten, automatische afsprakenplanning
            en professionele woningpresentaties.
          </p>
        </div>

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
                    Meest Populair
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
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-dark-900">€{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
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
                  Start met {plan.name}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Je kunt op elk moment upgraden wanneer je aanbod groeit.
        </p>
      </div>

      {/* How it Works */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-dark-900 mb-12 text-center">Zo werkt verhuren via VIMMO</h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-dark-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium text-dark-900 mb-2">Plaats uw pand</h3>
                <p className="text-gray-600">
                  Upload foto's en gegevens. VIMMO zorgt voor een professionele presentatie die vertrouwen wekt.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-dark-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium text-dark-900 mb-2">Kandidaten worden geverifieerd</h3>
                <p className="text-gray-600">
                  Voordat kandidaten een afspraak kunnen maken, verifiëren ze hun identiteit en uploaden ze loonfiches.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-dark-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium text-dark-900 mb-2">Automatische afspraken</h3>
                <p className="text-gray-600">
                  Afspraken worden automatisch ingepland. U krijgt alleen kandidaten die ook echt komen opdagen.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="font-medium text-dark-900 mb-2">Complete dossiers</h3>
                <p className="text-gray-600">
                  Dossiers worden automatisch aangemaakt zodat u altijd overzicht hebt zonder dat u iets hoeft op te volgen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">Klaar om zorgeloos te verhuren?</h2>
          <p className="text-gray-400 mb-8">
            Start vandaag en ontvang alleen nog geverifieerde, serieuze kandidaten.
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
