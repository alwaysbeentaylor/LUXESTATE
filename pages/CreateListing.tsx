import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Lock, Image as ImageIcon, ChevronRight, ChevronLeft } from 'lucide-react';

export const CreateListing: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  // Mock Form Data
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    address: '',
    description: '',
    package: 'monthly' // monthly | quarterly | premium
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    // Simulate Payment Gateway (Stripe/Mollie) delay
    console.log("Initiating Payment Intent...");
    console.log(`Charging: ${formData.package === 'monthly' ? '€29.99' : '€79.00'}`);
    
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsProcessingPayment(false);
    setStep(4); // Success
    setTimeout(() => {
      navigate('/owners/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between mb-8 px-4">
             <div className={`flex items-center gap-2 ${step >= 1 ? 'text-dark-900' : 'text-gray-400'}`}>
                <span className="w-8 h-8 rounded-full bg-dark-900 text-white flex items-center justify-center text-sm">1</span>
                <span className="hidden md:inline font-medium">Details</span>
             </div>
             <div className="h-px bg-gray-300 flex-1 mx-4"></div>
             <div className={`flex items-center gap-2 ${step >= 2 ? 'text-dark-900' : 'text-gray-400'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 2 ? 'bg-dark-900 text-white' : 'bg-gray-200'}`}>2</span>
                <span className="hidden md:inline font-medium">Media</span>
             </div>
             <div className="h-px bg-gray-300 flex-1 mx-4"></div>
             <div className={`flex items-center gap-2 ${step >= 3 ? 'text-dark-900' : 'text-gray-400'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${step >= 3 ? 'bg-dark-900 text-white' : 'bg-gray-200'}`}>3</span>
                <span className="hidden md:inline font-medium">Betaling</span>
             </div>
          </div>

          <div className="bg-white shadow-lg rounded-sm overflow-hidden">
            
            {/* STEP 1: DETAILS */}
            {step === 1 && (
              <div className="p-8 animate-fade-in">
                <h2 className="text-2xl font-serif text-dark-900 mb-6">Basisgegevens</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Titel van het pand</label>
                    <input 
                      type="text" 
                      className="w-full border p-3 rounded-sm" 
                      placeholder="Bv. Luxueuze villa in 't Zoute"
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prijs (€)</label>
                      <input type="number" className="w-full border p-3 rounded-sm" placeholder="0.00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type</label>
                      <select className="w-full border p-3 rounded-sm bg-white">
                        <option>Te Koop</option>
                        <option>Te Huur</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Adres</label>
                    <input type="text" className="w-full border p-3 rounded-sm" placeholder="Straat, Nr, Postcode, Gemeente" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Omschrijving</label>
                    <textarea className="w-full border p-3 rounded-sm h-32" placeholder="Beschrijf de troeven..."></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: MEDIA */}
            {step === 2 && (
              <div className="p-8 animate-fade-in">
                 <h2 className="text-2xl font-serif text-dark-900 mb-6">Foto's & Media</h2>
                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <ImageIcon size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="font-medium text-dark-900">Sleep foto's hierheen</p>
                    <p className="text-sm text-gray-500 mt-1">of klik om te bladeren (JPG, PNG max 10MB)</p>
                 </div>
                 <div className="mt-6 grid grid-cols-4 gap-4 opacity-50 pointer-events-none">
                    {/* Mock placeholders */}
                    <div className="bg-gray-100 aspect-square rounded"></div>
                    <div className="bg-gray-100 aspect-square rounded"></div>
                    <div className="bg-gray-100 aspect-square rounded"></div>
                 </div>
              </div>
            )}

            {/* STEP 3: PAYMENT */}
            {step === 3 && (
              <div className="p-8 animate-fade-in">
                 <h2 className="text-2xl font-serif text-dark-900 mb-6">Kies uw Publicatiepakket</h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div 
                      onClick={() => setFormData({...formData, package: 'monthly'})}
                      className={`border p-6 cursor-pointer transition-all ${formData.package === 'monthly' ? 'border-gold-500 bg-gold-50 ring-1 ring-gold-500' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className="font-bold text-lg mb-2">Standaard</div>
                      <div className="text-2xl font-serif mb-4">€ 29,99</div>
                      <ul className="text-sm space-y-2 text-gray-600">
                        <li className="flex gap-2"><Check size={16} className="text-gold-500"/> 30 Dagen online</li>
                        <li className="flex gap-2"><Check size={16} className="text-gold-500"/> Basis statistieken</li>
                      </ul>
                    </div>
                    
                    <div 
                      onClick={() => setFormData({...formData, package: 'quarterly'})}
                      className={`border p-6 cursor-pointer transition-all ${formData.package === 'quarterly' ? 'border-gold-500 bg-gold-50 ring-1 ring-gold-500' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className="font-bold text-lg mb-2">Pro Kwartaal</div>
                      <div className="text-2xl font-serif mb-4">€ 79,00</div>
                      <ul className="text-sm space-y-2 text-gray-600">
                        <li className="flex gap-2"><Check size={16} className="text-gold-500"/> 90 Dagen online</li>
                        <li className="flex gap-2"><Check size={16} className="text-gold-500"/> "Featured" label</li>
                      </ul>
                    </div>

                    <div className="border p-6 opacity-50 cursor-not-allowed border-gray-200">
                      <div className="font-bold text-lg mb-2">Enterprise</div>
                      <div className="text-sm text-gray-500 mb-4">Voor &gt; 10 panden</div>
                      <p className="text-sm">Neem contact op voor API toegang.</p>
                    </div>
                 </div>

                 <div className="bg-gray-50 p-6 rounded border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-medium">Totaal te betalen</span>
                      <span className="text-2xl font-bold">€ {formData.package === 'monthly' ? '29,99' : '79,00'}</span>
                    </div>

                    {!isProcessingPayment ? (
                      <button 
                        onClick={handlePayment}
                        className="w-full bg-dark-900 text-white py-4 font-medium hover:bg-gold-500 transition-colors flex items-center justify-center gap-2"
                      >
                        <CreditCard size={20} /> Veilig Betalen
                      </button>
                    ) : (
                      <button disabled className="w-full bg-gray-100 text-gray-400 py-4 font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Verwerken...
                      </button>
                    )}
                    
                    <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-400">
                      <Lock size={12} /> Beveiligde transactie via Stripe/Mollie
                    </div>
                 </div>
              </div>
            )}

            {/* SUCCESS */}
            {step === 4 && (
               <div className="p-12 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} />
                  </div>
                  <h2 className="text-3xl font-serif text-dark-900 mb-2">Betaling Geslaagd!</h2>
                  <p className="text-gray-500">Uw pand staat nu online. U ontvangt de factuur per mail.</p>
                  <p className="text-sm text-gray-400 mt-8">U wordt doorgestuurd naar uw dashboard...</p>
               </div>
            )}

            {/* Footer Navigation */}
            {step < 3 && (
              <div className="bg-gray-50 px-8 py-4 flex justify-between border-t border-gray-100">
                {step > 1 ? (
                  <button onClick={handleBack} className="text-gray-600 font-medium hover:text-dark-900 flex items-center gap-1">
                    <ChevronLeft size={16} /> Vorige
                  </button>
                ) : <div></div>}
                <button onClick={handleNext} className="bg-dark-900 text-white px-6 py-2 font-medium hover:bg-gold-500 transition-colors flex items-center gap-1">
                  Volgende <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};