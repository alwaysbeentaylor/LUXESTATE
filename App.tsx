import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ListingDetail } from './pages/ListingDetail';
import { AdminDashboard } from './pages/AdminDashboard';
import { OwnerRegister } from './pages/OwnerRegister';
import { OwnerDashboard } from './pages/OwnerDashboard';
import { CreateListing } from './pages/CreateListing';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        
        {/* Super Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Owner / Agent Flow */}
        <Route path="/owners/register" element={<OwnerRegister />} />
        <Route path="/owners/dashboard" element={<OwnerDashboard />} />
        <Route path="/owners/create-listing" element={<CreateListing />} />
      </Routes>
    </HashRouter>
  );
};

export default App;