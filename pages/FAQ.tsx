import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'Algemeen',
    question: 'Wat is VIMMO?',
    answer: 'VIMMO is een modern vastgoedplatform waar woningen professioneel gepresenteerd worden en kandidaten vooraf geverifieerd worden. Het platform maakt de woningmarkt rustiger, veiliger en duidelijker door alleen de juiste mensen bij elkaar te brengen.'
  },
  {
    category: 'Algemeen',
    question: 'Voor wie is VIMMO bedoeld?',
    answer: 'VIMMO is gebouwd voor mensen die klaar zijn om te verhuizen, te verkopen of te starten met investeren. Het werkt voor particulieren, makelaars en professionele verhuurders die waarde hechten aan kwaliteit en efficiëntie.'
  },
  {
    category: 'Algemeen',
    question: 'In welke regio\'s is VIMMO actief?',
    answer: 'VIMMO richt zich op de Belgische en Nederlandse vastgoedmarkt. We breiden geleidelijk uit om meer regio\'s te bedienen.'
  },
  {
    category: 'Verificatie',
    question: 'Hoe werkt de screening van kandidaten?',
    answer: 'Screening werkt via identiteitscontrole en loonfiche-upload. Kandidaten verifiëren eerst hun identiteit door hun ID-document te uploaden. Bij huur uploaden ze ook loonfiches zodat verhuurders weten of kandidaten kunnen betalen.'
  },
  {
    category: 'Verificatie',
    question: 'Zijn mijn gegevens veilig?',
    answer: 'Alle gegevens worden beveiligd verwerkt en automatisch verwijderd volgens GDPR-richtlijnen. Documenten worden versleuteld verzonden en tijdelijk bewaard. Na verificatie worden ze automatisch verwijderd uit ons systeem.'
  },
  {
    category: 'Verificatie',
    question: 'Waarom moet ik mijn identiteit verifiëren?',
    answer: 'Verificatie zorgt voor rust en veiligheid voor zowel verhuurders als huurders. Het voorkomt onnodige bezichtigingen, afzeggingen en onrealistische profielen. Elke eigenaar en makelaar weet precies met wie hij spreekt.'
  },
  {
    category: 'Verkoop',
    question: 'Hoe werkt verkopen via VIMMO?',
    answer: 'Verkoop werkt via zichtbaarheidspakketten. U kiest een niveau van zichtbaarheid dat bij uw pand past: Standaard, Premium of Featured. Elke woning krijgt een strakke en professionele voorstelling die kopers het juiste gevoel geeft.'
  },
  {
    category: 'Verkoop',
    question: 'Wat kosten de verkooptarieven?',
    answer: 'Tijdens de lancering: Standaard €39, Premium €69, Featured €119 voor 30 dagen. Reguliere tarieven: Standaard €49, Premium €89, Featured €149. U kunt op elk moment upgraden als u meer zichtbaarheid nodig heeft.'
  },
  {
    category: 'Verkoop',
    question: 'Kan ik mijn vermelding upgraden?',
    answer: 'Ja, verkopers kunnen hun zichtbaarheid op elk moment upgraden als ze merken dat ze extra aandacht nodig hebben. Alles is gemaakt om flexibel te werken.'
  },
  {
    category: 'Huur',
    question: 'Hoe werkt verhuren via VIMMO?',
    answer: 'Huur werkt via maandabonnementen. U krijgt toegang tot geverifieerde kandidaten, automatische afsprakenplanning en professionele woningpresentaties. Kandidaten worden vooraf geverifieerd voordat ze een bezichtiging kunnen vastleggen.'
  },
  {
    category: 'Huur',
    question: 'Wat kosten de huurabonnementen?',
    answer: 'Basic kost €29 per maand (tot 3 panden), Pro kost €59 per maand (tot 15 panden), Premium kost €99 per maand (onbeperkt). U kunt op elk moment upgraden wanneer uw aanbod groeit.'
  },
  {
    category: 'Huur',
    question: 'Wat als een kandidaat niet komt opdagen?',
    answer: 'Dankzij de verificatie en automatische planning is de kans op no-shows veel kleiner. Kandidaten hebben al moeite gedaan om hun identiteit te verifiëren en documenten te uploaden, wat serieuze intentie toont.'
  },
  {
    category: 'Particulieren',
    question: 'Kan ik als particulier ook VIMMO gebruiken?',
    answer: 'Ja, particulieren kunnen zowel huren, verhuren als verkopen via VIMMO. Het platform is ontworpen voor zowel professionals als particuliere gebruikers.'
  },
  {
    category: 'Particulieren',
    question: 'Moet ik een makelaar zijn om te verkopen?',
    answer: 'Nee, iedereen kan een woning verkopen via VIMMO. U kiest simpelweg een zichtbaarheidspakket en plaatst uw woning met een professionele presentatie.'
  }
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Alle');

  const categories = ['Alle', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = activeCategory === 'Alle'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="bg-dark-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold-400 font-medium tracking-[0.2em] uppercase mb-4">Support</p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Veelgestelde vragen
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Duidelijke antwoorden op de meest voorkomende vragen over VIMMO.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-dark-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={index} className="border border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-xs text-gold-600 font-medium uppercase tracking-wide">{item.category}</span>
                    <h3 className="text-lg font-medium text-dark-900 mt-1">{item.question}</h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="text-gray-400 shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-dark-900 mb-4">Vraag niet gevonden?</h2>
          <p className="text-gray-600 mb-6">
            Neem contact met ons op. We beantwoorden elke vraag met aandacht.
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
