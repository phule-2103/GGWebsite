import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#3F89BD] sticky top-0 z-50">
      <div className="h-20 flex items-center px-8">
        <div className="container mx-auto flex items-center justify-between w-full">
          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-10">
            <Link to="/" className="text-white text-3xl font-black tracking-tighter cursor-pointer hover:opacity-80 transition">
              HQL GROUP
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/services" className="nav-link hover:opacity-80 transition">
                Services 
              </Link>
              <div className="nav-link">
                Solutions 
              </div>
              <Link to="/about" className="nav-link hover:opacity-80 transition">
                About 
              </Link>
              <Link to="/get-in-touch" className="nav-link hover:opacity-80 transition">
                Help & Guides 
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-[#2f6a99] px-8 py-4 flex flex-col gap-4 animate-in fade-in">
          <Link to="/services" className="text-white hover:opacity-80 transition flex items-center py-2">
            Services 
          </Link>
          <div className="text-white hover:opacity-80 transition flex items-center py-2 cursor-pointer">
            Solutions 
          </div>
          <Link to="/about" className="text-white hover:opacity-80 transition flex items-center py-2">
            About 
          </Link>
          <Link to="/get-in-touch" className="text-white hover:opacity-80 transition flex items-center py-2">
            Help & Guides 
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
