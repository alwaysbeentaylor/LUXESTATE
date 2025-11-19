import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { BookingModal } from '../components/BookingModal';
import { MOCK_PROPERTIES, MOCK_SLOTS } from '../constants';
import { MapPin, Bed, Bath, Move, Share2, Heart, CheckCircle2 } from 'lucide-react';

export const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState(MOCK_PROPERTIES[0]); // Fallback to first for demo
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const found = MOCK_PROPERTIES.find(p => p.id === id);
    if (found) setProperty(found);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white pb-24">
      <Navbar />
      
      {/* Listing Hero */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">
                  Te Koop
                </span>
                <h1 className="text-4xl md:text-6xl font-serif mb-2">{property.title}</h1>
                <div className="flex items-center gap-2 text-lg opacity-90">
                  <MapPin size={20} /> {property.location}
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-3xl md:text-5xl font-serif font-medium">€ {property.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Key Specs */}
          <div className="flex justify-between border-b border-gray-100 pb-8">
            <div className="text-center px-4">
              <Bed className="w-6 h-6 mx-auto mb-2 text-gold-600" />
              <span className="block font-bold text-xl text-dark-900">{property.beds}</span>
              <span className="text-sm text-gray-500">Slaapkamers</span>
            </div>
            <div className="w-px bg-gray-100"></div>
            <div className="text-center px-4">
              <Bath className="w-6 h-6 mx-auto mb-2 text-gold-600" />
              <span className="block font-bold text-xl text-dark-900">{property.baths}</span>
              <span className="text-sm text-gray-500">Badkamers</span>
            </div>
            <div className="w-px bg-gray-100"></div>
            <div className="text-center px-4">
              <Move className="w-6 h-6 mx-auto mb-2 text-gold-600" />
              <span className="block font-bold text-xl text-dark-900">{property.sqm}</span>
              <span className="text-sm text-gray-500">Vierkante meter</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-serif text-dark-900 mb-4">Omschrijving</h3>
            <p className="text-gray-600 leading-loose text-lg">
              {property.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-serif text-dark-900 mb-6">Kenmerken</h3>
            <div className="grid grid-cols-2 gap-4">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-gold-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery (Mini) */}
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1).map((img, idx) => (
              <img key={idx} src={img} alt="" className="w-full h-64 object-cover rounded-sm" />
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="relative">
          <div className="sticky top-24 bg-white border border-gray-100 shadow-2xl p-8 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <img src={property.agentAvatar} alt={property.agentName} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-sm text-gray-500">Aangeboden door</p>
                <p className="font-serif text-xl text-dark-900">{property.agentName}</p>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gold-500 text-white font-medium py-4 hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/30 flex items-center justify-center gap-2"
              >
                Plan Bezichtiging
              </button>
              <div className="flex gap-4">
                 <button className="flex-1 border border-gray-200 py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <Share2 size={18} /> Delen
                </button>
                <button className="flex-1 border border-gray-200 py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <Heart size={18} /> Bewaren
                </button>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-4 text-sm text-gray-500 text-center">
              <p>Wij vragen ID + Loonfiches ter verificatie.</p>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        slots={MOCK_SLOTS}
        propertyName={property.title}
      />
    </div>
  );
};
