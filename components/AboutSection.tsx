
import React from 'react';
import { Icons } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative group">
               <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 border border-blue-500/20"></div>
               <img 
                 src="https://picsum.photos/id/119/800/800" 
                 alt="Factory Floor" 
                 className="relative w-full aspect-square object-cover rounded-[2.5rem] shadow-xl border border-white/10"
               />
               <div className="absolute bottom-8 -right-8 bg-brand-primary text-white p-8 rounded-3xl shadow-2xl hidden md:block border border-white/10">
                 <p className="text-4xl font-extrabold mb-1">15+</p>
                 <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Experience</p>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Our Legacy</h2>
            <p className="text-4xl font-extrabold text-white mb-6">Excellence in Industrial Labeling</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              AR International was founded with a single mission: to provide the manufacturing sector with labeling solutions that withstand the rigors of production and distribution. 
              Today, we serve hundreds of clients across the spice, food processing, and logistics sectors, ensuring their brand identity and critical information remain intact.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Icons.Check />
                   </div>
                   <span className="font-bold text-slate-200">ISO Certified</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Icons.Check />
                   </div>
                   <span className="font-bold text-slate-200">Custom Tooling</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Icons.Check />
                   </div>
                   <span className="font-bold text-slate-200">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                     <Icons.Check />
                   </div>
                   <span className="font-bold text-slate-200">Global Reach</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-blue-400 font-extrabold hover:text-blue-300 transition-colors"
            >
              <span className="text-lg">Meet our Technical Team</span>
              <div className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
