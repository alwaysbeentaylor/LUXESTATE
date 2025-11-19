import React from 'react';
import { Property } from '../types';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Move } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/listing/${property.id}`} className="group block bg-white transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {property.isPremium && (
          <div className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            Premium
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white font-medium">Bekijk details</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <p className="text-gold-600 font-medium text-sm uppercase tracking-wide">{property.location}</p>
          <p className="text-dark-900 font-serif font-bold text-lg">€ {property.price.toLocaleString()}</p>
        </div>
        
        <h3 className="text-xl font-serif font-medium text-dark-900 mb-4 group-hover:text-gold-600 transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center gap-6 text-gray-500 text-sm border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <Bed size={16} />
            <span>{property.beds} Slp</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={16} />
            <span>{property.baths} Bad</span>
          </div>
          <div className="flex items-center gap-2">
            <Move size={16} />
            <span>{property.sqm} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
