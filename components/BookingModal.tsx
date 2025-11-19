import React, { useState, useCallback } from 'react';
import { X, Calendar, Check, Upload, FileText, Shield, Lock, Mail } from 'lucide-react';
import { TimeSlot } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  slots: TimeSlot[];
  propertyName: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, slots, propertyName }) => {
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    householdSize: 1,
    idDoc: null as File | null,
    payslipDocs: null as FileList | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !selectedSlot) return;
    setStep(step + 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'id' | 'payslip') => {
    if (e.target.files && e.target.files.length > 0) {
      if (type === 'id') {
        setFormData({ ...formData, idDoc: e.target.files[0] });
      } else {
        setFormData({ ...formData, payslipDocs: e.target.files });
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API Process
    // 1. Upload files to secure S3 bucket
    // 2. Generate time-limited signed URLs
    // 3. Trigger SendGrid/Mailgun API
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Console logs to demonstrate email system logic
    console.log(`[EMAIL SYSTEM] Sending Owner Notification to owner@luxestate.be`);
    console.log(`[EMAIL SYSTEM] Payload: Candidate ${formData.name}, Slot ID ${selectedSlot}`);
    console.log(`[EMAIL SYSTEM] Attachments: Secure Links generated [ID_DOC_URL], [PAYSLIP_URL]`);
    console.log(`[EMAIL SYSTEM] Sending Confirmation to Candidate ${formData.email}`);
    
    setIsSubmitting(false);
    setStep(4); // Success state
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-dark-900 text-white p-6 flex justify-between items-center shrink-0">
          <div>
            <h3 className="font-serif text-xl">Plan Bezichtiging</h3>
            <p className="text-gray-400 text-sm">{propertyName}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="w-full bg-gray-100 h-1 shrink-0">
            <div 
              className="bg-gold-500 h-full transition-all duration-500 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Content Area - Scrollable */}
        <div className="p-8 overflow-y-auto">
          
          {/* Step 1: Select Time */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-serif text-dark-900 mb-2">Kies een moment</h4>
                <p className="text-gray-500">Selecteer een beschikbaar tijdslot dat voor u past.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {slots.map(slot => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`p-4 border text-center transition-all ${
                      !slot.available 
                        ? 'bg-gray-50 text-gray-300 cursor-not-allowed border-gray-100'
                        : selectedSlot === slot.id
                          ? 'border-gold-500 bg-gold-50 text-gold-700 ring-1 ring-gold-500'
                          : 'border-gray-200 hover:border-gold-300 text-dark-900'
                    }`}
                  >
                    <div className="font-medium">{slot.time}</div>
                    <div className="text-xs mt-1">{new Date(slot.date).toLocaleDateString('nl-BE', { weekday: 'short', day: 'numeric', month: 'short' })}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-serif text-dark-900 mb-2">Uw Gegevens</h4>
                <p className="text-gray-500">Wie komt er bezichtigen?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark-700">Volledige Naam</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent"
                    placeholder="Jan Peeters"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark-700">E-mailadres</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent"
                    placeholder="jan@voorbeeld.be"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark-700">Telefoonnummer</label>
                  <input 
                    type="tel" 
                    className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent"
                    placeholder="+32 4..."
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-dark-700">Gezinssamenstelling</label>
                  <select 
                    className="w-full border-b border-gray-300 py-2 focus:border-gold-500 focus:outline-none transition-colors bg-transparent"
                    value={formData.householdSize}
                    onChange={e => setFormData({...formData, householdSize: parseInt(e.target.value)})}
                  >
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} persoon{n>1?'en':''}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Verification (The Key Feature) */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} />
                </div>
                <h4 className="text-2xl font-serif text-dark-900 mb-2">Verificatie Vereist</h4>
                <p className="text-gray-500 max-w-sm mx-auto">Om de kwaliteit en veiligheid te waarborgen vragen wij voorafgaande documenten. <span className="font-medium text-dark-900">Uw gegevens worden veilig verwerkt.</span></p>
              </div>

              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors group relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange(e, 'id')}
                  />
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                      {formData.idDoc ? <Check className="text-green-500" size={20} /> : <Upload className="text-gray-400" size={20} />}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-dark-900">Identiteitskaart (Voor/Achter)</h5>
                      <p className="text-xs text-gray-400">{formData.idDoc ? formData.idDoc.name : 'Sleep bestand of klik om te uploaden'}</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors group relative">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*,.pdf"
                    multiple
                    onChange={(e) => handleFileChange(e, 'payslip')}
                  />
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                       {formData.payslipDocs ? <Check className="text-green-500" size={20} /> : <FileText className="text-gray-400" size={20} />}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-dark-900">Loonfiches (Laatste 2 maanden)</h5>
                      <p className="text-xs text-gray-400">
                        {formData.payslipDocs 
                          ? `${formData.payslipDocs.length} bestand(en) geselecteerd` 
                          : 'Vereist voor bevestiging afspraak'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 bg-blue-50 p-4 rounded text-xs text-blue-800">
                  <Lock size={14} className="shrink-0 mt-0.5" />
                  <p>Uw documenten worden versleuteld verzonden en enkel gedeeld met de eigenaar na verificatie. Na 14 dagen worden deze automatisch verwijderd uit ons systeem.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Check size={40} />
              </div>
              <h4 className="text-3xl font-serif text-dark-900 mb-4">Aanvraag Verstuurd!</h4>
              
              <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto mb-8 text-left border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <Mail className="text-gold-500 mt-1" size={18} />
                  <div>
                    <p className="font-medium text-sm text-dark-900">E-mail naar eigenaar verzonden</p>
                    <p className="text-xs text-gray-500">Bevat uw profielschets en veilige links naar uw documenten.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-gold-500 mt-1" size={18} />
                  <div>
                    <p className="font-medium text-sm text-dark-900">Bevestiging naar {formData.email}</p>
                    <p className="text-xs text-gray-500">Bevat de afspraakdetails en een link om te herplannen.</p>
                  </div>
                </div>
              </div>

              <button onClick={onClose} className="bg-dark-900 text-white px-8 py-3 hover:bg-gold-500 transition-colors">
                Terug naar overzicht
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step < 4 && (
          <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-white shrink-0">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="text-gray-500 hover:text-dark-900 font-medium">
                Terug
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <button 
                onClick={handleNext}
                disabled={step === 1 && !selectedSlot}
                className={`px-8 py-3 transition-all font-medium ${
                   step === 1 && !selectedSlot 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-dark-900 text-white hover:bg-gold-500'
                }`}
              >
                Volgende stap
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={!formData.idDoc || !formData.payslipDocs || isSubmitting}
                className={`px-8 py-3 transition-all font-medium flex items-center gap-2 ${
                   !formData.idDoc || !formData.payslipDocs || isSubmitting
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg shadow-gold-500/20'
                }`}
              >
                {isSubmitting ? 'Verwerken...' : 'Bevestig Afspraak'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};