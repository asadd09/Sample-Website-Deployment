
import React, { useState } from 'react';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    onHomeClick();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
            <div className="bg-brand-primary text-white p-2 rounded font-bold text-xl">AR</div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-slate-900 tracking-tight text-xl">INTERNATIONAL</span>
              <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-widest">Industrial Label Solutions</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-brand-primary font-medium transition-colors">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-brand-primary font-medium transition-colors">About Us</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
          <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-600 hover:text-brand-primary font-medium py-2">Services</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 hover:text-brand-primary font-medium py-2">About Us</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold text-center"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
