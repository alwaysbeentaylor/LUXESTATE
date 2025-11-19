import React from 'react';
import { Navbar } from '../components/Navbar';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';
import { Users, Home, CalendarCheck, DollarSign, AlertCircle, Check } from 'lucide-react';

const data = [
  { name: 'Week 1', listings: 4, revenue: 240 },
  { name: 'Week 2', listings: 7, revenue: 450 },
  { name: 'Week 3', listings: 12, revenue: 980 },
  { name: 'Week 4', listings: 18, revenue: 1450 },
];

const kycRequests = [
  { id: 1, name: 'Immo Brugge Center', type: 'Agency', status: 'Pending', date: '2023-11-14' },
  { id: 2, name: 'Jan Desmet', type: 'Private', status: 'Verified', date: '2023-11-13' },
  { id: 3, name: 'SeaSide Estates', type: 'Agency', status: 'Pending', date: '2023-11-12' },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-6 max-w-7xl mx-auto pb-12">
        <h1 className="text-3xl font-serif text-dark-900 mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Totale Listings</p>
                <h3 className="text-2xl font-bold text-dark-900 mt-1">42</h3>
              </div>
              <div className="bg-blue-50 p-2 rounded text-blue-600"><Home size={20} /></div>
            </div>
          </div>
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Nieuwe Users</p>
                <h3 className="text-2xl font-bold text-dark-900 mt-1">15</h3>
              </div>
              <div className="bg-green-50 p-2 rounded text-green-600"><Users size={20} /></div>
            </div>
          </div>
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Afspraken</p>
                <h3 className="text-2xl font-bold text-dark-900 mt-1">89</h3>
              </div>
              <div className="bg-purple-50 p-2 rounded text-purple-600"><CalendarCheck size={20} /></div>
            </div>
          </div>
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Omzet (Deze maand)</p>
                <h3 className="text-2xl font-bold text-dark-900 mt-1">€ 3.120</h3>
              </div>
              <div className="bg-gold-50 p-2 rounded text-gold-600"><DollarSign size={20} /></div>
            </div>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart */}
          <div className="bg-white p-6 shadow-sm border border-gray-100 lg:col-span-2 rounded-sm">
            <h3 className="font-serif text-xl mb-6">Omzet & Listings</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#C5A059" strokeWidth={3} dot={{r: 4}} />
                  <Line type="monotone" dataKey="listings" stroke="#1A1A1A" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* KYC Queue */}
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl">KYC Verificaties</h3>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">2 Wachtend</span>
            </div>
            
            <div className="space-y-4">
              {kycRequests.map(req => (
                <div key={req.id} className="border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-dark-900">{req.name}</p>
                      <p className="text-xs text-gray-400">{req.type} • {req.date}</p>
                    </div>
                    {req.status === 'Pending' ? (
                      <AlertCircle size={18} className="text-orange-500" />
                    ) : (
                      <Check size={18} className="text-green-500" />
                    )}
                  </div>
                  {req.status === 'Pending' && (
                    <div className="flex gap-2 mt-2">
                      <button className="text-xs bg-dark-900 text-white px-3 py-1 hover:bg-dark-800">Review Docs</button>
                      <button className="text-xs border border-gray-200 px-3 py-1 hover:bg-gray-50">Negeer</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Bookings Table (Mock) */}
        <div className="mt-8 bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-serif text-xl">Recente Afspraken</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Pand</th>
                  <th className="px-6 py-4">Kandidaat</th>
                  <th className="px-6 py-4">Datum</th>
                  <th className="px-6 py-4">Docs</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium">Villa Zoute</td>
                  <td className="px-6 py-4">
                    <div>P. Janssen</div>
                    <div className="text-xs text-gray-400">Gezin: 4</div>
                  </td>
                  <td className="px-6 py-4">15 Nov, 10:00</td>
                  <td className="px-6 py-4 text-green-600 flex items-center gap-1"><Check size={14} /> Compleet</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Bevestigd</span></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium">Penthouse Brugge</td>
                  <td className="px-6 py-4">
                    <div>S. De Vries</div>
                    <div className="text-xs text-gray-400">Gezin: 1</div>
                  </td>
                  <td className="px-6 py-4">15 Nov, 11:30</td>
                  <td className="px-6 py-4 text-green-600 flex items-center gap-1"><Check size={14} /> Compleet</td>
                  <td className="px-6 py-4"><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Wachtend</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
