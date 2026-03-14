
import React, { useState } from 'react';
import { Icons } from '../constants';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <p className="text-4xl font-extrabold text-white mb-8">Ready to start your project?</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center text-blue-400 border border-white/5 flex-shrink-0">
                  <Icons.Phone />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-lg font-bold text-slate-100">+91 98765 43210</p>
                  <p className="text-sm text-slate-400">Mon - Sat, 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center text-blue-400 border border-white/5 flex-shrink-0">
                  <Icons.Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-lg font-bold text-slate-100">sales@arinternational.com</p>
                  <p className="text-sm text-slate-400">Fast response guaranteed</p>
                </div>
              </div>

              <div className="p-8 bg-blue-500/5 backdrop-blur-xl rounded-3xl border border-blue-500/20">
                <h4 className="font-bold text-blue-400 mb-2">Visit Our Factory</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Industrial Estate Phase 2, <br />
                  Plot No. 45-B, Sector 12,<br />
                  NCR Region, India.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-900/40 backdrop-blur-md p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                    <Icons.Check />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
                  <p className="text-slate-400">Thank you for your interest. A technical specialist will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="John Doe" />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Company Name</label>
                    <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="Acme Corp" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="john@company.com" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="+91 00000 00000" />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Service Interest</label>
                    <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white appearance-none">
                      <option className="bg-slate-900">Label Manufacturing</option>
                      <option className="bg-slate-900">TTR Ribbon Sales</option>
                      <option className="bg-slate-900">Printer AMC & Support</option>
                      <option className="bg-slate-900">Custom Industrial Solution</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Your Message</label>
                    <textarea required rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none" placeholder="Tell us about your project requirements..."></textarea>
                  </div>

                  <div className="col-span-2 pt-4">
                    <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20">
                      Send Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
