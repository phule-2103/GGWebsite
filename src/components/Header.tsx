import React from 'react';
import EnglishFlag from '../assets/svg/English.svg';

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1 opacity-70"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-[#3F89BD] h-20 flex items-center px-8 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo & Nav */}
        <div className="flex items-center gap-10">
          <div className="text-white text-3xl font-black tracking-tighter cursor-pointer">
            GO-GENIE
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="nav-link">
              Services <ChevronDown />
            </div>
            <div className="nav-link">
              Solutions <ChevronDown />
            </div>
            <div className="nav-link">
              About <ChevronDown />
            </div>
            <div className="nav-link">
              Help & Guides <ChevronDown />
            </div>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="btn-outline">
            Track Your Parcel
          </button>

          <button className="btn-solid">
            Sign In
          </button>

          <div className="flex items-center text-white ml-4 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={EnglishFlag} alt="English Flag" className="w-[20px] h-auto mr-1" />
            <ChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
