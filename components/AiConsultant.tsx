
import React, { useState } from 'react';
import { getLabelConsultation } from '../services/geminiService';
import { Icons } from '../constants';

const AiConsultant: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [requirements, setRequirements] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !requirements) return;
    
    setLoading(true);
    const recommendation = await getLabelConsultation(industry, requirements);
    setResult(recommendation);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Icons.Bot />
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            AI Labeling Expert
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Instant Solution Consultant</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Need help choosing the right material for your environment? Use our AI-powered assistant to get an instant recommendation based on your industry needs.
          </p>
          
          <form onSubmit={handleConsult} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Industry</label>
              <input 
                type="text" 
                placeholder="e.g., Spice Manufacturing, Frozen Food"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Specific Requirements</label>
              <textarea 
                rows={3}
                placeholder="e.g., Moisture resistant, freezer safe, high-speed application..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white resize-none"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-brand-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Icons.Bot />
                  Get Expert Advice
                </>
              )}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 flex flex-col">
          <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-[2rem] p-6 lg:p-8 relative min-h-[300px]">
            {result ? (
              <div className="animate-fade-in">
                <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                  <Icons.Check />
                  AI Recommendation
                </h4>
                <div className="text-slate-200 text-sm leading-relaxed prose prose-invert max-w-none">
                  {result.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <Icons.Bot />
                <p className="mt-4 text-sm font-medium">Enter your details to generate a customized labeling strategy</p>
              </div>
            )}
          </div>
          <p className="mt-4 text-[10px] text-slate-500 text-center">
            *This is an AI generated recommendation. Please consult with our sales team for finalized specifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
