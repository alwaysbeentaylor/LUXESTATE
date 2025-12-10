import React from 'react';
import { Navbar } from '../components/Navbar';
import { Shield, Lock, Eye, Clock, FileCheck, Server, Check } from 'lucide-react';

export const Veiligheid: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Identiteitsverificatie',
      description: 'Identiteitsdocumenten worden geüpload via een beveiligde omgeving. We controleren de authenticiteit van elk document.'
    },
    {
      icon: FileCheck,
      title: 'Loonfiche controle',
      description: 'Loonfiches worden gecontroleerd op basisinformatie om de financiële betrouwbaarheid van kandidaten te waarborgen.'
    },
    {
      icon: Lock,
      title: 'Versleutelde overdracht',
      description: 'Alle documenten worden versleuteld verzonden via beveiligde verbindingen (SSL/TLS encryptie).'
    },
    {
      icon: Clock,
      title: 'Tijdelijke opslag',
      description: 'Gegevens worden tijdelijk bewaard en daarna automatisch verwijderd volgens de GDPR-richtlijnen.'
    },
    {
      icon: Eye,
      title: 'Beperkte toegang',
      description: 'Documenten worden enkel gedeeld met de relevante eigenaar of makelaar na verificatie.'
    },
    {
      icon: Server,
      title: 'Veilige infrastructuur',
      description: 'Onze servers voldoen aan de hoogste beveiligingsstandaarden en worden regelmatig geaudit.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Privacy & Veiligheid</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Veiligheid en verificatie
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            VIMMO werkt met een veilige verificatiestap voor elke kandidaat.
            Uw gegevens worden met de hoogste zorg behandeld.
          </p>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="bg-gold-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-medium flex items-center justify-center gap-2">
            <Shield size={18} />
            100% GDPR-compliant — Uw privacy is onze prioriteit
          </p>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-serif text-dark-900 mb-12 text-center">Hoe wij uw gegevens beschermen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="p-6 border border-gray-200">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-dark-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verification Process */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-dark-900 mb-12 text-center">Het verificatieproces</h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-dark-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div className="flex-1 bg-white p-6 border border-gray-200">
                <h3 className="font-medium text-dark-900 mb-2">Identiteitsdocument uploaden</h3>
                <p className="text-gray-600">
                  Kandidaten uploaden hun identiteitskaart (voor- en achterkant) via onze beveiligde uploadomgeving.
                  Het document wordt automatisch gecontroleerd op geldigheid.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-dark-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div className="flex-1 bg-white p-6 border border-gray-200">
                <h3 className="font-medium text-dark-900 mb-2">Loonfiche verificatie (bij huur)</h3>
                <p className="text-gray-600">
                  Voor huurwoningen uploaden kandidaten hun recente loonfiches.
                  Wij controleren de basisinformatie om de financiële geschiktheid te beoordelen.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-dark-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div className="flex-1 bg-white p-6 border border-gray-200">
                <h3 className="font-medium text-dark-900 mb-2">Veilige deling met eigenaar</h3>
                <p className="text-gray-600">
                  Na verificatie worden beveiligde links naar de documenten gedeeld met de eigenaar of makelaar.
                  Alleen zij hebben toegang tot deze informatie.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                4
              </div>
              <div className="flex-1 bg-white p-6 border border-gray-200">
                <h3 className="font-medium text-dark-900 mb-2">Automatische verwijdering</h3>
                <p className="text-gray-600">
                  Na 14 dagen worden alle documenten automatisch en permanent verwijderd uit ons systeem,
                  in overeenstemming met de GDPR-richtlijnen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GDPR Compliance */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-dark-900 text-white p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="text-gold-500" size={32} />
              <h2 className="text-2xl font-serif">GDPR Compliance</h2>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              VIMMO voldoet volledig aan de Algemene Verordening Gegevensbescherming (AVG/GDPR).
              Wij nemen uw privacy uiterst serieus en garanderen dat uw gegevens veilig worden verwerkt.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check size={20} className="text-gold-500" />
                <span className="text-gray-300">Recht op inzage in uw gegevens</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-gold-500" />
                <span className="text-gray-300">Recht op rectificatie van onjuiste gegevens</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-gold-500" />
                <span className="text-gray-300">Recht op verwijdering van uw gegevens</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-gold-500" />
                <span className="text-gray-300">Recht op beperking van verwerking</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-gold-500" />
                <span className="text-gray-300">Recht op overdraagbaarheid van gegevens</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gold-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-dark-900 mb-4">Vragen over privacy?</h2>
          <p className="text-gray-600 mb-6">
            Heeft u vragen over hoe wij met uw gegevens omgaan? Neem gerust contact met ons op.
          </p>
          <a
            href="/contact"
            className="inline-block bg-dark-900 text-white px-8 py-3 hover:bg-dark-800 transition-colors"
          >
            Contact opnemen
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
