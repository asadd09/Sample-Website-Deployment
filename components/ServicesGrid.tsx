
import React from 'react';
import { Icons } from '../constants';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'labels',
    title: 'Custom Label Manufacturing',
    description: 'High-quality, durable labels designed for challenging industrial and food-grade environments.',
    icon: <Icons.Label />,
    details: ['Food & Spice Grade Materials', 'Moisture & Oil Resistant', 'Variable Data Printing', 'Custom Die-Cut Shapes'],
    longDescription: 'Our state-of-the-art manufacturing facility produces labels that serve as the face of your brand. We understand the unique challenges of the food and spice industry, where labels must withstand varying temperatures, moisture, and handling while maintaining pristine legibility and adhesion.',
    benefits: [
      'Industrial-grade adhesives for various surfaces',
      'Compliance with international food safety standards',
      'High-resolution multi-color printing',
      'Rapid prototyping and short-run capabilities'
    ],
    useCases: [
      'Spice Bottle & Jar Labeling',
      'Frozen Food Packaging',
      'Chemical Drum Labeling',
      'Logistics & Warehouse Tracking'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ttr',
    title: 'TTR Ribbon Sales',
    description: 'Premium Thermal Transfer Ribbons for crisp, smudge-free printing on all substrates.',
    icon: <Icons.Ribbon />,
    details: ['Wax Ribbons', 'Wax-Resin Blends', 'Full Resin for Durability', 'Various Sizes & Colors'],
    longDescription: 'Choosing the right ribbon is critical for the longevity of your printed information. We provide premium Thermal Transfer Ribbons (TTR) that ensure your barcodes remain scanable and your text stays sharp, even in abrasive industrial environments.',
    benefits: [
      'Smudge and scratch resistance',
      'Consistent print quality at high speeds',
      'Compatibility with all major printer brands',
      'Optimized to extend the life of your printhead'
    ],
    useCases: [
      'High-Speed Production Lines',
      'Shipping & Receiving Labels',
      'Pharmacy & Laboratory Samples',
      'Outdoor Equipment Identification'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'printer',
    title: 'Printer Support & AMC',
    description: 'Expert technical support and Annual Maintenance Contracts for all major barcode printer brands.',
    icon: <Icons.Printer />,
    details: ['On-site Maintenance', 'Spare Parts Replacement', 'Printer Setup & Configuration', 'Software Integration Support'],
    longDescription: 'A halted printer is a halted production line. Our expert technicians provide comprehensive Annual Maintenance Contracts (AMC) and on-demand support to keep your operations running smoothly. We specialize in preventative maintenance that stops issues before they start.',
    benefits: [
      'Priority on-site emergency response',
      'Genuine manufacturer-approved spare parts',
      'Regular cleaning and calibration services',
      'Training for your operational staff'
    ],
    useCases: [
      'Manufacturing Facility Support',
      'Retail Distribution Centers',
      'Logistics Hub Operations',
      'Printing Software Troubleshooting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1200'
  }
];

interface ServicesGridProps {
  onSelectService: (id: string) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">What We Offer</h2>
          <p className="text-3xl lg:text-4xl font-extrabold text-white mb-6">Full-Spectrum Labeling Ecosystem</p>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-10">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <div className="text-blue-400">
                      <Icons.Check />
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onSelectService(service.id)}
                className="w-full py-3 px-4 bg-slate-800 border border-slate-700 text-blue-400 font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
