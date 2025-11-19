export enum UserRole {
  ADMIN = 'ADMIN',
  AGENT = 'AGENT',
  APPLICANT = 'APPLICANT'
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  images: string[];
  beds: number;
  baths: number;
  sqm: number;
  description: string;
  features: string[];
  isPremium?: boolean;
  agentName: string;
  agentAvatar: string;
}

export interface TimeSlot {
  id: string;
  date: string; // ISO Date string
  time: string;
  available: boolean;
}

export interface BookingDraft {
  propertyId: string;
  slotId: string;
  name: string;
  email: string;
  phone: string;
  householdSize: number;
  income: number;
  idDoc?: File | null;
  payslipDocs?: File[] | null;
}