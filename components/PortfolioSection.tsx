
import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: '1', title: 'Spice Bottle Labels', category: 'Food', industry: 'Spice Manufacturing', imageUrl: 'https://picsum.photos/id/102/400/500' },
  { id: '2', title: 'Industrial Logistics Stickers', category: 'Logistics', industry: 'Courier & Shipping', imageUrl: 'https://picsum.photos/id/103/400/500' },
  { id: '3', title: 'Pharmaceutical Grade Labels', category: 'Healthcare', industry: 'Medical', imageUrl: 'https://picsum.photos/id/104/400/500' },
  { id: '4', title: 'Beverage Packaging Labels', category: 'Beverage', industry: 'FMCG', imageUrl: 'https://picsum.photos/id/106/400/500' },
  { id: '5', title: 'TTR Printing Samples', category: 'Supplies', industry: 'Manufacturing', imageUrl: 'https://picsum.photos/id/107/400/500' },
  { id: '6', title: 'Thermal Labels', category: 'Retail', industry: 'Retail & POS', imageUrl: 'https://picsum.photos/id/108/400/500' },
];

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioItems.map(i => i.category))];

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(i => i.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 text-center lg:text-left">Our Work</h2>
            <p className="text-3xl lg:text-4xl font-extrabold text-white text-center lg:text-left">Precision In Every Print</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all text-sm ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-white/5 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
