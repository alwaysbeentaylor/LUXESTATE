import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Shield, Upload, Check, Building2, User } from 'lucide-react';

export const OwnerRegister: React.FC = () => {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for KYC verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would store token/session
    // Redirect to dashboard
    navigate('/owners/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-sm overflow-hidden">
          <div className="bg-dark-900 p-8 text-center">
            <h1 className="text-3xl font-serif text-white mb-2">Start met Verkoop/Verhuur</h1>
            <p className="text-gray-400">Registreer uw account en verifieer uw identiteit om te beginnen.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Account Type */}
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                onClick={() => setIsCompany(false)}
                className={`flex-1 py-4 border flex flex-col items-center gap-2 transition-all ${
                  !isCompany ? 'border-gold-500 bg-gold-50 text-dark-900 ring-1 ring-gold-500' : 'border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                <User size={24} />
                <span className="font-medium">Particulier</span>
              </button>
              <button
                type="button"
                onClick={() => setIsCompany(true)}
                className={`flex-1 py-4 border flex flex-col items-center gap-2 transition-all ${
                  isCompany ? 'border-gold-500 bg-gold-50 text-dark-900 ring-1 ring-gold-500' : 'border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                <Building2 size={24} />
                <span className="font-medium">Professional/Makelaar</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-1">Voornaam</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:border-gold-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-1">Achternaam</label>
                  <input required type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:border-gold-500 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">E-mailadres</label>
                <input required type="email" className="w-full border border-gray-300 p-3 rounded-sm focus:border-gold-500 focus:outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Telefoonnummer</label>
                <input required type="tel" className="w-full border border-gray-300 p-3 rounded-sm focus:border-gold-500 focus:outline-none" />
              </div>

              {isCompany && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-1">Bedrijfsnaam</label>
                    <input required type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:border-gold-500 focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-900 mb-1">KBO / BTW Nummer</label>
                      <input required type="text" placeholder="BE 0..." className="w-full border border-gray-300 p-3 rounded-sm focus:border-gold-500 focus:outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* KYC Upload */}
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-sm font-medium text-dark-900 mb-2">Identiteitsverificatie (Verplicht)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors relative text-center">
                  <input 
                    type="file" 
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center justify-center gap-2">
                    {file ? (
                       <>
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                          <Check size={20} />
                        </div>
                        <span className="text-sm font-medium text-green-700">{file.name}</span>
                       </>
                    ) : (
                      <>
                        <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center">
                          <Shield size={20} />
                        </div>
                        <span className="text-sm text-gray-500">Upload ID Kaart / Paspoort</span>
                        <span className="text-xs text-gray-400">Zonder ID wordt uw account niet geactiveerd.</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gold-500 text-white py-4 font-medium hover:bg-gold-600 transition-colors mt-6"
            >
              {isSubmitting ? 'Verwerken...' : 'Account Aanmaken & Verifiëren'}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Door te registreren gaat u akkoord met onze algemene voorwaarden. <br/>Uw gegevens worden veilig verwerkt conform GDPR.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};