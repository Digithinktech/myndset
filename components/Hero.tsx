import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import { Pin, TrendingUp, MousePointer2, Maximize2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-pop-pink pt-24 pb-12 md:pt-32 md:pb-20 rounded-b-[3rem] md:rounded-b-[6rem]">
      {/* Background Parallax Elements - Subtler on mobile */}
      <div 
        className="absolute top-10 right-0 pointer-events-none transform translate-z-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="w-48 h-48 md:w-64 md:h-64 bg-pop-yellow rounded-full blur-3xl opacity-30 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-4 md:mb-6 flex flex-wrap justify-center items-center gap-3">
             <span className="px-3 py-1.5 md:px-4 md:py-2 bg-pop-cream rounded-full font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-pop-purple shadow-md border-2 border-pop-purple">
               The Pinterest Authority
             </span>
             <span className="text-white font-display font-bold text-[10px] md:text-base">★ High-Aesthetic Marketing</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-pop-cream mb-6 md:mb-8 tracking-tighter mix-blend-hard-light">
            ELEVATE YOUR <br />
            <span className="text-pop-purple relative inline-block">
               PRESENCE
               <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-pop-yellow" viewBox="0 0 100 20" preserveAspectRatio="none">
                 <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
               </svg>
            </span>
          </h1>

          <p className="max-w-2xl font-sans text-sm md:text-xl lg:text-2xl text-white font-medium mb-8 md:mb-10 leading-relaxed px-2">
            The Pinterest marketing agency for <span className="bg-pop-yellow text-pop-purple px-1.5 rotate-1 inline-block font-bold">visionary & aesthetic brands</span>. 
            Transforming inspiration into consistent revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 w-full sm:w-auto px-4 max-w-sm sm:max-w-none">
            <Button variant="secondary" size="lg" withIcon className="w-full sm:w-auto">
              Apply to Partner
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pop-purple w-full sm:w-auto">
              Explore Services
            </Button>
          </div>

          {/* Hero Visual Container */}
          <div className="relative w-full max-w-5xl mt-4 md:mt-8 px-2 md:px-0">
            <div className="relative z-20 mx-auto w-full max-w-4xl h-[300px] sm:h-[450px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-pop-cream shadow-2xl bg-pop-cream group cursor-default">
              
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" 
                alt="Visual Discovery Moodboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] opacity-80"
                loading="eager"
              />

              {/* SAVE Button - Adjusted for mobile */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30 pointer-events-auto scale-75 md:scale-100">
                <button className="bg-red-600 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full font-black flex items-center gap-2 shadow-2xl transform transition-transform hover:scale-110 active:scale-95 group/btn">
                  <Pin size={18} fill="white" className="group-hover/btn:rotate-12 transition-transform" /> SAVE
                </button>
              </div>

              {/* Growth Stats Overlay - Simplified/Scaled for mobile */}
              <div className="absolute bottom-4 left-4 md:bottom-12 md:left-8 z-30 bg-white/95 backdrop-blur-lg p-3 md:p-8 rounded-[1.2rem] md:rounded-[2.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-white/20 max-w-[140px] md:max-w-[280px] animate-float">
                 <div className="flex items-center justify-between mb-1 md:mb-4">
                    <span className="text-[7px] md:text-[11px] font-black uppercase tracking-widest text-gray-400">Reach</span>
                    <TrendingUp size={12} className="text-green-500 md:w-5 md:h-5" />
                 </div>
                 <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-xl md:text-5xl font-display font-black text-pop-purple">12.8M</span>
                    <span className="text-[7px] md:text-sm font-bold text-green-500">+142%</span>
                 </div>
                 <div className="mt-2 md:mt-6 h-1 md:h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-pop-pink w-3/4 animate-pulse"></div>
                 </div>
              </div>

              {/* 3D Growth Arrow - Repositioned to center-top on mobile */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:right-1/4 md:left-auto md:translate-x-0 md:translate-y-0 z-40 pointer-events-none select-none">
                <div className="relative group/arrow transform -rotate-12 animate-float scale-50 sm:scale-75 md:scale-100">
                   <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                      <defs>
                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFD966" />
                          <stop offset="100%" stopColor="#F0A04B" />
                        </linearGradient>
                        <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="12" dy="12" stdDeviation="6" floodColor="#2D2727" floodOpacity="0.5" />
                        </filter>
                      </defs>
                      <path d="M40 160 C 60 120, 100 120, 140 80" stroke="url(#arrowGradient)" strokeWidth="18" strokeLinecap="round" filter="url(#shadow3d)" className="animate-pulse" />
                      <path d="M120 80 L 140 80 L 140 100" stroke="url(#arrowGradient)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" filter="url(#shadow3d)" />
                   </svg>
                   <div className="absolute top-0 right-0 bg-pop-yellow text-pop-purple px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl font-display font-black text-sm md:text-2xl shadow-2xl transform translate-x-1/3 -translate-y-1/3 rotate-12 border-2 md:border-4 border-pop-purple">
                     SCALING
                   </div>
                </div>
              </div>

              {/* Branding Badge - Cornered on mobile */}
              <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-30 bg-pop-yellow p-3 md:p-8 rounded-full shadow-2xl rotate-12 border-2 md:border-4 border-pop-purple group-hover:rotate-0 transition-transform duration-500 scale-75 md:scale-100">
                 <div className="text-center text-pop-purple">
                    <p className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1">REVENUE</p>
                    <p className="text-lg md:text-3xl font-display font-black leading-none">FOCUS</p>
                 </div>
              </div>

            </div>

            {/* Impact Badges - Hidden on small mobile to prevent massive overlap */}
            <div className="absolute -top-6 -left-4 md:-top-12 md:-left-12 z-30 animate-float hidden sm:block">
               <div className="bg-pop-blue p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-2 border-white rotate-[-8deg] transform hover:rotate-0 transition-all scale-75 md:scale-100">
                  <MousePointer2 className="text-white mb-2 md:mb-3 w-6 h-6 md:w-10 md:h-10" />
                  <p className="font-display font-black text-xl md:text-3xl text-white">HI-INTENT</p>
                  <p className="font-sans text-[8px] md:text-[11px] text-white/90 uppercase font-bold tracking-widest">Traffic Generation</p>
               </div>
            </div>

             <div className="absolute -bottom-6 -right-4 md:-bottom-12 md:-right-12 z-30 animate-float hidden sm:block" style={{animationDelay: '1.5s'}}>
               <div className="bg-pop-orange p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-2 border-white rotate-[8deg] transform hover:rotate-0 transition-all scale-75 md:scale-100">
                  <Maximize2 className="text-white mb-2 md:mb-3 w-6 h-6 md:w-10 md:h-10" />
                  <p className="font-display font-black text-xl md:text-3xl text-white">VISUAL</p>
                  <p className="font-sans text-[8px] md:text-[11px] text-white/90 uppercase font-bold tracking-widest">Marketing Mastery</p>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;