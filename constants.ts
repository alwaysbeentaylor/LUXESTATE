import { Property, TimeSlot } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa Zoute',
    location: 'Knokke-Heist, Zoute',
    price: 2850000,
    image: 'https://images.unsplash.com/photo-1600596542815-6057be2728f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-6057be2728f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    beds: 5,
    baths: 4,
    sqm: 450,
    description: 'Exclusieve villa gelegen in het hart van het Zoute, op wandelafstand van de Royal Zoute Golf Club. Hoogwaardige afwerking, zuidgerichte tuin en absolute privacy.',
    features: ['Zwembad', 'Zuidgerichte tuin', 'Domotica', 'Garage voor 3 wagens', 'Wijnkelder'],
    isPremium: true,
    agentName: 'Immo Prestige',
    agentAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    title: 'Penthouse met Zicht',
    location: 'Brugge, Centrum',
    price: 1250000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    beds: 3,
    baths: 2,
    sqm: 210,
    description: 'Uniek penthouse met 360 graden zicht over de Brugse reien. Directe lift in het appartement, luxueuze materialen en ruim terras.',
    features: ['Terras 80m2', 'Privé lift', 'Parketvloeren', 'Airconditioning'],
    isPremium: true,
    agentName: 'Luxury Living',
    agentAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    title: 'Modern Landhuis',
    location: 'Damme',
    price: 1950000,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ],
    beds: 4,
    baths: 3,
    sqm: 380,
    description: 'Strakke lijnen ontmoeten landelijke rust. Dit architecturale pareltje in Damme biedt weidse uitzichten over de polders.',
    features: ['Warmtepomp', 'Zonnepanelen', 'Polderzicht', 'Atelier'],
    isPremium: false,
    agentName: 'Architectural Homes',
    agentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

export const MOCK_SLOTS: TimeSlot[] = [
  { id: 's1', date: '2023-11-15', time: '10:00', available: true },
  { id: 's2', date: '2023-11-15', time: '11:30', available: true },
  { id: 's3', date: '2023-11-15', time: '14:00', available: false }, // Taken
  { id: 's4', date: '2023-11-16', time: '09:30', available: true },
  { id: 's5', date: '2023-11-16', time: '15:00', available: true },
];
