
import React, { useEffect } from 'react';
import { Service } from '../types';
import { Icons } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </button>
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed opacity-90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">In-Depth Capability</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                {service.longDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-brand-primary flex items-center justify-center">
                       <Icons.Check />
                    </span>
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-brand-primary flex items-center justify-center">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </span>
                    Industry Use Cases
                  </h3>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-industrial p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Information</h3>
                <p className="text-sm text-slate-500 mb-8">Get a tailored quote for our {service.title} solutions.</p>
                
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Work Email" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <input type="text" value={service.title} readOnly className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed" />
                  </div>
                  <div>
                    <textarea rows={3} placeholder="Requirements..." className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
                  </div>
                  <button className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
