import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ListingDetail } from './pages/ListingDetail';
import { AdminDashboard } from './pages/AdminDashboard';
import { OwnerRegister } from './pages/OwnerRegister';
import { OwnerDashboard } from './pages/OwnerDashboard';
import { CreateListing } from './pages/CreateListing';
import { Verkoop } from './pages/Verkoop';
import { Huur } from './pages/Huur';
import { Makelaars } from './pages/Makelaars';
import { Investeerders } from './pages/Investeerders';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Veiligheid } from './pages/Veiligheid';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />

        {/* VIMMO Info Pages */}
        <Route path="/verkoop" element={<Verkoop />} />
        <Route path="/huur" element={<Huur />} />
        <Route path="/makelaars" element={<Makelaars />} />
        <Route path="/investeerders" element={<Investeerders />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/veiligheid" element={<Veiligheid />} />

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
