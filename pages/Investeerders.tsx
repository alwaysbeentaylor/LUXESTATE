import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { TrendingUp, Target, Shield, Globe, Zap, BarChart3, ArrowRight, Check } from 'lucide-react';

export const Investeerders: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Groot marktgat',
      description: 'Waar bestaande platforms focussen op massa, richt VIMMO zich op kwaliteit en tijdswinst.'
    },
    {
      icon: Shield,
      title: 'Unieke propositie',
      description: 'Geen enkel ander platform biedt screening en verificatie van kandidaten op deze manier.'
    },
    {
      icon: TrendingUp,
      title: 'Stabiele inkomsten',
      description: 'Maandelijkse huurabonnementen zorgen voor voorspelbare, terugkerende inkomsten.'
    },
    {
      icon: Zap,
      title: 'Schaalbaar model',
      description: 'De technologie is licht en makkelijk schaalbaar naar heel België en Nederland.'
    }
  ];

  const revenue = [
    {
      category: 'Verhuur',
      model: 'Maandabonnementen',
      prices: ['Basic €29/maand', 'Pro €59/maand', 'Premium €99/maand'],
      description: 'Stabiele, terugkerende inkomsten van verhuurders en makelaars.'
    },
    {
      category: 'Verkoop',
      model: 'Vermeldingstarieven',
      prices: ['Standaard €39-€49', 'Premium €69-€89', 'Featured €119-€149'],
      description: 'Flexibele inkomsten die groeien met het volume van het platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Investeerders</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Investering en groei
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            VIMMO vult een groot gat in de Belgische en Nederlandse vastgoedmarkt met een
            unieke combinatie van verificatie, screening en professionele presentatie.
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-gold-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-dark-900 mb-4">Het probleem</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Makelaars verliezen wekelijks uren aan kandidaten die niet passen of niet komen opdagen.
            Bestaande platforms focussen op massale bezoekersaantallen en ongefilterde leads.
            <span className="font-medium text-dark-900"> VIMMO lost dit op.</span>
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-serif text-dark-900 mb-12 text-center">Waarom investeren in VIMMO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-6 p-6 border border-gray-200">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Revenue Model */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-dark-900 mb-4 text-center">Businessmodel</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Een stevig en schaalbaar model met meerdere inkomstenstromen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {revenue.map((item) => (
              <div key={item.category} className="bg-white p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="text-gold-500" size={24} />
                  <h3 className="text-xl font-serif text-dark-900">{item.category}</h3>
                </div>
                <p className="text-gold-600 font-medium mb-4">{item.model}</p>
                <ul className="space-y-2 mb-4">
                  {item.prices.map((price) => (
                    <li key={price} className="text-gray-700 text-sm flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      {price}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Strategy */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-dark-900 mb-6">Groeistrategie</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-medium text-dark-900 mb-1">Lancering met aantrekkelijke tarieven</h3>
                    <p className="text-gray-600 text-sm">De lanceertarieven versnellen onboarding en bouwen een kritische massa op.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-medium text-dark-900 mb-1">Doorgroei naar volwassen tarieven</h3>
                    <p className="text-gray-600 text-sm">Tarieven die nog steeds aantrekkelijker zijn dan traditionele spelers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-medium text-dark-900 mb-1">Uitbreiding naar heel België en Nederland</h3>
                    <p className="text-gray-600 text-sm">De technologie is licht en makkelijk schaalbaar naar nieuwe markten.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-900 p-8 text-white">
              <Globe className="text-gold-500 mb-6" size={48} />
              <h3 className="text-2xl font-serif mb-4">Marktpotentieel</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                De markt is bewezen groot, de behoefte is duidelijk en de concurrentie biedt
                geen alternatief met screening en verificatie.
              </p>
              <p className="text-gold-400 font-medium">
                VIMMO is gebouwd om een vaste positie te claimen in de digitale vastgoedwereld.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="bg-dark-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-8">Wat ons onderscheidt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10">
              <h3 className="text-gold-400 font-medium mb-2">Verificatie</h3>
              <p className="text-gray-400 text-sm">Geen enkel ander platform verifieert kandidaten vooraf</p>
            </div>
            <div className="p-6 border border-white/10">
              <h3 className="text-gold-400 font-medium mb-2">Screening</h3>
              <p className="text-gray-400 text-sm">Loonfiches en ID-controle zorgen voor kwaliteit</p>
            </div>
            <div className="p-6 border border-white/10">
              <h3 className="text-gold-400 font-medium mb-2">Automatisering</h3>
              <p className="text-gray-400 text-sm">Afspraken en dossiers worden automatisch beheerd</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gold-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-dark-900 mb-6">Interesse in VIMMO?</h2>
          <p className="text-gray-600 mb-8">
            Neem contact op om de mogelijkheden te bespreken.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-dark-900 text-white px-8 py-4 hover:bg-dark-800 transition-colors"
          >
            Neem contact op <ArrowRight size={18} />
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
