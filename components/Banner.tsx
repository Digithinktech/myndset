import React from 'react';
import Button from './ui/Button';
import { Calendar, Layout, Lightbulb, Sparkles } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <section className="relative py-16 md:py-32 bg-pop-pink overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-pop-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-pop-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Visual Content - Scaled down on small screens */}
        <div className="w-full max-w-[400px] lg:w-1/2 flex justify-center lg:justify-start relative">
          <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[480px]">
             {/* Main Image */}
             <div className="w-full h-full rounded-[2rem] md:rounded-[4rem] overflow-hidden border-4 md:border-8 border-pop-yellow shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 relative bg-pop-cream">
               <img 
                 src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full h-full object-cover"
                 alt="Aesthetic Pinterest Curation"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pop-purple/60 to-transparent"></div>
             </div>
             
             {/* Idea Bulb Badge - Smaller on mobile */}
             <div className="absolute -top-4 -right-4 md:-top-10 md:-right-6 w-20 h-20 md:w-44 md:h-44 bg-white rounded-full shadow-2xl flex items-center justify-center p-3 md:p-6 rotate-12 animate-float z-40 border-2 md:border-4 border-pop-purple">
                <div className="bg-pop-yellow p-3 md:p-8 rounded-full text-pop-purple shadow-inner">
                  <Lightbulb size={20} className="md:w-12 md:h-12 fill-pop-purple" />
                </div>
             </div>
             
             {/* Partner Badge - Responsive positioning */}
             <div className="absolute -bottom-4 -left-2 md:-bottom-10 md:-left-6 bg-pop-purple text-white px-4 py-2.5 md:px-8 md:py-5 rounded-xl md:rounded-3xl shadow-2xl border-2 border-white/10 z-30 scale-90 md:scale-100">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-3 bg-pop-yellow rounded-lg md:rounded-xl text-pop-purple"><Layout size={14} className="md:w-6 md:h-6" /></div>
                  <div>
                    <p className="text-[6px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Active Management</p>
                    <p className="text-xs md:text-xl font-display font-black">Limited Openings</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Text Content - Responsive sizes */}
        <div className="lg:w-1/2 text-center lg:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
             <Sparkles size={12} className="text-pop-yellow" /> Application Only Partnership
           </div>
           <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase mb-6 md:mb-8 leading-[0.95] tracking-tighter">
             Ready to <span className="text-pop-yellow underline decoration-pop-purple decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">Scale</span>?
           </h2>
           <p className="text-white font-sans text-base md:text-2xl mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-light px-4 lg:px-0">
             We turn high-aesthetic visual content into <span className="font-bold border-b-2 border-pop-yellow">revenue-driving assets</span>. Apply today for a full audit.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-6 lg:px-0">
             <Button variant="secondary" size="lg" className="px-8 shadow-2xl uppercase tracking-widest text-[10px] md:text-sm py-4 md:py-5 w-full sm:w-auto" onClick={() => window.open('https://calendly.com', '_blank')}>
               <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Book Discovery Session
             </Button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;