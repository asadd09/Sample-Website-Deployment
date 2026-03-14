
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid, { services } from './components/ServicesGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ServiceDetail from './components/ServiceDetail';
import PortfolioSection from './components/PortfolioSection';
import AiConsultant from './components/AiConsultant';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'detail'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setView('detail');
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedServiceId(null);
  };

  const currentService = services.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen relative">
      {/* Background Component */}
      <Galaxy 
        starSpeed={0.3} 
        density={1.2} 
        hueShift={210} 
        glowIntensity={0.2}
        repulsionStrength={3}
      />
      
      <Navbar onHomeClick={handleBackToHome} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <Hero />
            
            <div className="bg-slate-900/40 backdrop-blur-sm">
              <ServicesGrid onSelectService={handleSelectService} />
            </div>

            <div className="bg-slate-950/30 py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AiConsultant />
              </div>
            </div>

            <PortfolioSection />

            <div className="bg-slate-950/20">
              <AboutSection />
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md">
              <ContactSection />
            </div>
          </>
        ) : (
          currentService && (
            <div className="bg-slate-900/80 min-h-screen">
              <ServiceDetail 
                service={currentService} 
                onBack={handleBackToHome} 
              />
            </div>
          )
        )}
      </main>
      
      <Footer />
      
      {/* Sticky Quick Contact CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => {
            if (view !== 'home') handleBackToHome();
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-brand-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
