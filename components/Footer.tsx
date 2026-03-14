
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-primary text-white p-2 rounded font-bold text-xl">AR</div>
              <span className="font-extrabold text-white tracking-tight text-xl">INTERNATIONAL</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Premium manufacturer of industrial self-adhesive labels and thermal transfer ribbons. Providing expert printer support and maintenance since 2008.
            </p>
            <div className="flex gap-4">
               {['fb', 'ln', 'tw', 'ig'].map(icon => (
                 <div key={icon} className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors cursor-pointer">
                    <span className="uppercase text-[10px] font-bold">{icon}</span>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Food & Spice Labels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TTR Ribbons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Printer AMC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Labels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AR International. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
