import React from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Plus, Eye, Calendar, ChevronRight } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';

export const OwnerDashboard: React.FC = () => {
  // Simulate logged in owner having one property from the mock list
  const myProperties = [MOCK_PROPERTIES[0]]; 

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-28 px-6 max-w-7xl mx-auto pb-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-serif text-dark-900">Mijn Dashboard</h1>
            <p className="text-gray-500 mt-1">Welkom terug, Immo Prestige.</p>
          </div>
          <Link 
            to="/owners/create-listing" 
            className="bg-dark-900 text-white px-6 py-3 flex items-center gap-2 hover:bg-gold-500 transition-colors"
          >
            <Plus size={18} /> Nieuw Pand Plaatsen
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
            <p className="text-gray-400 text-sm mb-1">Actieve Listings</p>
            <p className="text-3xl font-serif text-dark-900">1</p>
          </div>
          <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
            <p className="text-gray-400 text-sm mb-1">Afspraken deze week</p>
            <p className="text-3xl font-serif text-dark-900">4</p>
          </div>
          <div className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm">
            <p className="text-gray-400 text-sm mb-1">Leads in behandeling</p>
            <p className="text-3xl font-serif text-dark-900">8</p>
          </div>
        </div>

        {/* Active Listings */}
        <h2 className="text-xl font-serif text-dark-900 mb-6">Mijn Panden</h2>
        <div className="space-y-4">
          {myProperties.map(prop => (
            <div key={prop.id} className="bg-white border border-gray-100 p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow">
              <img src={prop.image} alt={prop.title} className="w-full md:w-48 h-32 object-cover rounded-sm" />
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded uppercase">Live</span>
                  <span className="text-xs text-gray-400">ID: #{prop.id}</span>
                </div>
                <h3 className="text-lg font-medium text-dark-900 mb-1">{prop.title}</h3>
                <p className="text-gray-500 text-sm">{prop.location}</p>
                
                <div className="flex gap-6 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><Eye size={16}/> 1.2k Views</div>
                  <div className="flex items-center gap-2"><Calendar size={16}/> 12 Boekingen</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full md:w-auto">
                <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-sm font-medium">
                  Bewerk
                </button>
                <Link to={`/listing/${prop.id}`} className="px-4 py-2 bg-dark-900 text-white hover:bg-gold-500 transition-colors text-sm font-medium text-center">
                  Bekijk Live
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Incoming Leads Preview */}
        <h2 className="text-xl font-serif text-dark-900 mb-6 mt-12">Recente Aanvragen</h2>
        <div className="bg-white border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50 flex text-sm font-medium text-gray-500">
            <div className="w-1/4">Naam</div>
            <div className="w-1/4">Pand</div>
            <div className="w-1/4">Datum</div>
            <div className="w-1/4 text-right">Status</div>
          </div>
          <div className="divide-y divide-gray-100">
             <div className="p-4 flex items-center text-sm hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-1/4 font-medium text-dark-900">Sophie Maes</div>
                <div className="w-1/4 text-gray-600">Villa Zoute</div>
                <div className="w-1/4 text-gray-600">Vandaag, 14:30</div>
                <div className="w-1/4 text-right flex items-center justify-end gap-2 text-gray-400 group-hover:text-gold-500">
                   Documenten Inzien <ChevronRight size={16} />
                </div>
             </div>
             <div className="p-4 flex items-center text-sm hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-1/4 font-medium text-dark-900">Jean Dupont</div>
                <div className="w-1/4 text-gray-600">Villa Zoute</div>
                <div className="w-1/4 text-gray-600">Morgen, 09:00</div>
                <div className="w-1/4 text-right flex items-center justify-end gap-2 text-gray-400 group-hover:text-gold-500">
                   Documenten Inzien <ChevronRight size={16} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};