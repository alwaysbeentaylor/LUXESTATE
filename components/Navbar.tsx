import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, LayoutDashboard } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on route and scroll state
  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
  }`;

  const textClass = scrolled || !isHome ? 'text-dark-900' : 'text-white';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tight flex items-center gap-2 ${textClass}`}>
          <div className="w-8 h-8 bg-gold-500 rounded-none flex items-center justify-center text-white font-sans text-sm">V</div>
          VIMMO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium hover:text-gold-500 transition-colors ${textClass}`}>Woningen</Link>
          <Link to="/verkoop" className={`text-sm font-medium hover:text-gold-500 transition-colors ${textClass}`}>Verkopen</Link>
          <Link to="/huur" className={`text-sm font-medium hover:text-gold-500 transition-colors ${textClass}`}>Verhuren</Link>
          <Link to="/makelaars" className={`text-sm font-medium hover:text-gold-500 transition-colors ${textClass}`}>Makelaars</Link>
          <Link to="/admin" className={`text-sm font-medium hover:text-gold-500 transition-colors ${textClass} flex items-center gap-1`}>
            <LayoutDashboard size={16} /> Admin
          </Link>
          <Link
            to="/owners/register"
            className={`px-6 py-2 rounded-none font-medium text-sm transition-all duration-300 ${
              scrolled || !isHome
                ? 'bg-dark-900 text-white hover:bg-gold-500'
                : 'bg-white text-dark-900 hover:bg-gold-500 hover:text-white'
            }`}
          >
            Start nu
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className={`md:hidden ${textClass}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-6 md:hidden">
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">Woningen</Link>
          <Link to="/verkoop" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">Verkopen</Link>
          <Link to="/huur" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">Verhuren</Link>
          <Link to="/makelaars" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">Makelaars</Link>
          <Link to="/faq" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">FAQ</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">Contact</Link>
          <Link to="/admin" onClick={() => setMobileOpen(false)} className="text-dark-900 font-medium text-lg">Admin Dashboard</Link>
          <Link to="/owners/register" onClick={() => setMobileOpen(false)} className="w-full bg-dark-900 text-white py-3 text-center font-medium hover:bg-gold-500 transition-colors">
            Start nu
          </Link>
        </div>
      )}
    </nav>
  );
};