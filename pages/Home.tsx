import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { PropertyCard } from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { Search, ArrowRight, Heart, X } from 'lucide-react';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if the user has seen the message before
    const hasSeen = localStorage.getItem('hasSeenWelcomeMessage');
    if (!hasSeen) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseWelcome = () => {
    localStorage.setItem('hasSeenWelcomeMessage', 'true');
    setShowWelcome(false);
  };

  // Filter properties (simple client-side implementation)
  const filteredProperties = MOCK_PROPERTIES.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* ONE-TIME WELCOME POPUP */}
      {showWelcome && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" onClick={handleCloseWelcome}></div>
          <div className="relative bg-white p-8 max-w-md w-full shadow-2xl border-t-4 border-gold-500 animate-fade-in-up">
            <button onClick={handleCloseWelcome} className="absolute top-4 right-4 text-gray-400 hover:text-dark-900">
              <X size={24} />
            </button>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gold-50 text-gold-500 rounded-full flex items-center justify-center">
                <Heart fill="currentColor" size={24} />
              </div>
            </div>
            <h2 className="font-serif text-2xl text-dark-900 text-center mb-4">Welkom bij VIMMO</h2>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Het complete platform dat de woningmarkt rustiger, veiliger en duidelijker maakt.
              Ontdek geverifieerde kandidaten en professionele woningpresentaties.
            </p>
            <button
              onClick={handleCloseWelcome}
              className="w-full bg-dark-900 text-white py-3 font-medium hover:bg-gold-500 transition-colors uppercase tracking-wide text-sm"
            >
              Aan de slag
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[85vh] bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Het Complete Platform</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-medium mb-8 leading-tight max-w-4xl animate-fade-in-up delay-100">
            Vastgoed zonder chaos. <br/> <span className="italic text-gold-500">Alleen de juiste mensen.</span>
          </h1>
          
          {/* Search Box */}
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-2 rounded-sm border border-white/20 flex flex-col md:flex-row gap-2 animate-fade-in-up delay-200">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input 
                type="text" 
                placeholder="Zoek op locatie (bv. Zoute, Damme)..." 
                className="w-full bg-transparent text-white placeholder-white/60 pl-12 pr-4 py-4 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 font-medium transition-colors uppercase tracking-wider text-sm">
              Zoeken
            </button>
          </div>
        </div>
      </div>

      {/* Value Prop */}
      <div className="bg-dark-900 text-white py-12 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="p-6 border border-white/5 bg-white/5">
            <h3 className="font-serif text-xl text-gold-400 mb-2">Geverifieerde Kandidaten</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Identiteitscontrole en loonfiches worden vooraf gecontroleerd. U weet precies met wie u spreekt.</p>
          </div>
          <div className="p-6 border border-white/5 bg-white/5">
             <h3 className="font-serif text-xl text-gold-400 mb-2">Automatische Planning</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Afspraken worden automatisch ingepland en dossiers automatisch aangemaakt. Altijd overzicht.</p>
          </div>
          <div className="p-6 border border-white/5 bg-white/5">
             <h3 className="font-serif text-xl text-gold-400 mb-2">Professionele Presentatie</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Strakke en luxe vormgeving die de woning laat spreken zonder ruis eromheen.</p>
          </div>
        </div>
      </div>

      {/* Listings Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-dark-900 mb-4">Recent Aanbod</h2>
            <p className="text-gray-500 max-w-md">Een gecureerde selectie van het meest exclusieve vastgoed in West-Vlaanderen.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium pb-2 border-b border-gold-200 hover:border-gold-600 transition-all">
            Bekijk alle panden <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="bg-dark-900 text-white px-8 py-3 w-full">Bekijk alles</button>
        </div>
      </div>

      {/* CTA for Agents */}
      <div className="bg-gold-50 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-serif text-dark-900 mb-6">Gebouwd voor echte resultaten</h2>
            <p className="text-dark-700 mb-8 leading-relaxed text-lg">
              VIMMO combineert kwaliteit met eenvoud. Het platform filtert ruis weg en brengt alleen de juiste mensen bij elkaar.
              De markt wil geen chaos. De markt wil duidelijkheid. VIMMO levert precies dat.
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="bg-dark-900 text-white px-8 py-4 hover:bg-dark-800 transition-colors">
                Bekijk verkooptarieven
              </button>
              <button className="border border-dark-900 text-dark-900 px-8 py-4 hover:bg-dark-900 hover:text-white transition-colors">
                Bekijk huurabonnementen
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
             <img
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Kitchen"
              className="shadow-2xl w-full aspect-video object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl max-w-xs hidden lg:block">
              <p className="font-serif text-xl mb-2">"Eindelijk alleen serieuze klanten en echte kandidaten."</p>
              <p className="text-gray-500 text-sm">— Makelaar VIMMO Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tight mb-6">VIMMO</div>
            <p className="text-gray-400 max-w-sm">
              Het complete platform voor vastgoed in België en Nederland.
              Wij maken de woningmarkt rustiger, veiliger en duidelijker.
            </p>
          </div>
          <div>
            <h4 className="text-gold-500 font-medium mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">Woningen</Link></li>
              <li><Link to="/verkoop" className="hover:text-white">Verkopen</Link></li>
              <li><Link to="/huur" className="hover:text-white">Verhuren</Link></li>
              <li><Link to="/makelaars" className="hover:text-white">Makelaars</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-500 font-medium mb-6">Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/veiligheid" className="hover:text-white">Veiligheid & Privacy</Link></li>
              <li><Link to="/investeerders" className="hover:text-white">Investeerders</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 text-center md:text-left text-gray-600 text-sm flex justify-between">
          <p>&copy; 2024 VIMMO. Alle rechten voorbehouden.</p>
          <p>Vastgoed zonder chaos.</p>
        </div>
      </footer>
    </div>
  );
};