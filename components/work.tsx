import React from 'react';
import { ArrowUpRight, Palette, LineChart, TrendingUp, Sparkles } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal">
          <h4 className="text-pop-pink font-bold uppercase tracking-widest text-xs mb-2">Proven Results</h4>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase text-pop-purple leading-none">
            CASE <br/><span className="text-gray-300">STUDIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="bg-white rounded-[3rem] p-10 border-2 border-transparent hover:border-pop-pink transition-all duration-500 shadow-2xl group relative overflow-hidden">
             {/* Large Result Badge */}
             <div className="absolute top-8 right-8 z-20">
                <div className="bg-pop-pink text-white font-display font-black text-2xl md:text-3xl px-6 py-3 rounded-2xl flex flex-col items-end shadow-[0_10px_30px_rgba(209,77,114,0.3)] rotate-3">
                   <div className="flex items-center gap-2">
                     <TrendingUp size={24} /> <span>+400%</span>
                   </div>
                   <span className="text-[10px] uppercase tracking-widest opacity-80">Traffic Growth</span>
                </div>
             </div>

             <div className="mb-10">
               <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Home Decor • Full Management</span>
               <h3 className="font-display font-black text-4xl md:text-5xl text-pop-purple mt-4 mb-6 uppercase leading-tight group-hover:text-pop-pink transition-colors">
                 Minimalist <br/>Home Collective
               </h3>
               
               <div className="flex gap-2">
                 <span className="px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase text-gray-500">SEO Strategy</span>
                 <span className="px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase text-gray-500">Content Creation</span>
               </div>
             </div>
             
             <p className="font-sans text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
               We transformed a stagnant Pinterest account into a high-converting catalog, focusing on aesthetic visuals that resonated with premium home enthusiasts.
             </p>

             <div className="h-80 md:h-96 rounded-[2rem] overflow-hidden relative bg-gray-200 shadow-inner border border-gray-100">
               {/* Fixed Image Link - Verified Aesthetic Home Visual */}
               <img 
                 src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                 alt="Minimalist Home Interior" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-pop-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-6 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-8 h-8 text-pop-purple" />
                  </div>
               </div>
          </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 border-2 border-transparent hover:border-pop-blue transition-all duration-500 shadow-2xl group lg:mt-32 relative overflow-hidden">
             {/* Large Result Badge */}
             <div className="absolute top-8 right-8 z-20">
                <div className="bg-pop-blue text-white font-display font-black text-2xl md:text-3xl px-6 py-3 rounded-2xl flex flex-col items-end shadow-[0_10px_30px_rgba(116,155,194,0.3)] -rotate-3">
                   <div className="flex items-center gap-2">
                     <Sparkles size={24} /> <span>7.2x ROI</span>
                   </div>
                   <span className="text-[10px] uppercase tracking-widest opacity-80">Pinterest Ads</span>
                </div>
             </div>

             <div className="mb-10">
               <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Wellness • Pinterest Ads</span>
               <h3 className="font-display font-black text-4xl md:text-5xl text-pop-purple mt-4 mb-6 uppercase leading-tight group-hover:text-pop-blue transition-colors">
                 Lumiere <br/>Rituals
               </h3>
               
               <div className="flex gap-2">
                 <span className="px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase text-gray-500">Funnel Scaling</span>
                 <span className="px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold uppercase text-gray-500">A/B Testing</span>
               </div>
             </div>
             
             <p className="font-sans text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
               Scaling a boutique wellness brand to new heights using data-driven Pinterest Ads that maintain a premium, intentional aesthetic.
             </p>

             <div className="h-80 md:h-96 rounded-[2rem] overflow-hidden relative bg-gray-200 shadow-inner border border-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200" 
                 alt="Aesthetic Wellness Study" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-pop-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-6 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-8 h-8 text-pop-purple" />
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
