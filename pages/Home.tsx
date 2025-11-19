import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { PropertyCard } from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { Search, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter properties (simple client-side implementation)
  const filteredProperties = MOCK_PROPERTIES.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
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
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Exclusief Wonen</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-medium mb-8 leading-tight max-w-4xl animate-fade-in-up delay-100">
            Vind uw droomhuis in <br/> <span className="italic text-gold-500">Brugge & Knokke</span>
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
            <h3 className="font-serif text-xl text-gold-400 mb-2">Geen Tijdverlies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Alleen serieuze kandidaten. Geautomatiseerde screening vooraf.</p>
          </div>
          <div className="p-6 border border-white/5 bg-white/5">
             <h3 className="font-serif text-xl text-gold-400 mb-2">100% Geverifieerd</h3>
            <p className="text-gray-400 text-sm leading-relaxed">ID en inkomensbewijzen zijn verplicht voor elke bezichtiging.</p>
          </div>
          <div className="p-6 border border-white/5 bg-white/5">
             <h3 className="font-serif text-xl text-gold-400 mb-2">Direct Contact</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Eigenaars ontvangen dossiers rechtstreeks in hun inbox.</p>
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
            <h2 className="text-4xl font-serif text-dark-900 mb-6">Verkoop of verhuur zonder zorgen</h2>
            <p className="text-dark-700 mb-8 leading-relaxed text-lg">
              Sluit u aan bij het meest exclusieve platform van België. Wij filteren de kandidaten, u focust op de deal. 
              Start vandaag met uw eerste premium listing.
            </p>
            <div className="flex gap-4">
               <button className="bg-dark-900 text-white px-8 py-4 hover:bg-dark-800 transition-colors">
                Start als Makelaar
              </button>
              <button className="border border-dark-900 text-dark-900 px-8 py-4 hover:bg-dark-900 hover:text-white transition-colors">
                Meer info
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
              <p className="font-serif text-xl mb-2">"Eindelijk alleen serieuze klanten over de vloer."</p>
              <p className="text-gray-500 text-sm">— Immo Prestige Knokke</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tight mb-6">LUXESTATE</div>
            <p className="text-gray-400 max-w-sm">
              Het premium platform voor vastgoed in Brugge en Knokke. 
              Wij verbinden exclusieve panden met gescreende kandidaten.
            </p>
          </div>
          <div>
            <h4 className="text-gold-500 font-medium mb-6">Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Aanbod</a></li>
              <li><a href="#" className="hover:text-white">Makelaars</a></li>
              <li><a href="#" className="hover:text-white">Tarieven</a></li>
              <li><a href="#" className="hover:text-white">Inloggen</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold-500 font-medium mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Algemene Voorwaarden</a></li>
              <li><a href="#" className="hover:text-white">Cookiebeleid</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 text-center md:text-left text-gray-600 text-sm flex justify-between">
          <p>&copy; 2023 LuxeEstate. All rights reserved.</p>
          <p>Made with precision.</p>
        </div>
      </footer>
    </div>
  );
};
