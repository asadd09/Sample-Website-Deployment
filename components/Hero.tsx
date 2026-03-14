
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold tracking-wide uppercase mb-6 animate-fade-in border border-blue-500/30">
              Premium Label Manufacturing
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Industrial Grade <span className="text-blue-400">Labeling Solutions</span> For Your Business
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AR International specializes in high-durability labels for spice manufacturers, food producers, and logistics. From precision manufacturing to TTR ribbons and printer support, we are your end-to-end labeling partner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Inquire Now
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm text-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:border-blue-400 hover:text-blue-400 transition-all shadow-sm"
              >
                Explore Services
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold">Trusted by Industry Leaders</span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://picsum.photos/id/101/800/600" 
                  alt="Industrial label manufacturing process" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-blue-500/20 backdrop-blur-md p-3 rounded-lg border border-white/10">
                       <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold opacity-90">Precision Quality</p>
                      <p className="text-lg font-bold">Zero-Defect Standard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
