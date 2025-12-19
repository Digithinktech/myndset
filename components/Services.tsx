import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { id: '01', title: 'Full Management', color: 'text-pop-pink' },
  { id: '02', title: 'Pinterest Ads', color: 'text-pop-blue' },
  { id: '03', title: 'Strategy & Audit', color: 'text-pop-orange' },
  { id: '04', title: 'VIP Intensive', color: 'text-pop-purple' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-pop-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Decorative Circles - Stacked on mobile */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col items-center justify-center gap-6 md:gap-8">
             <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-pop-purple flex items-center justify-center overflow-hidden bg-white shadow-xl group hover:scale-105 transition-transform">
                <div className="absolute bottom-0 w-full bg-pop-yellow h-[40%] group-hover:h-[50%] transition-all"></div>
                <span className="relative z-10 font-display font-black text-xl sm:text-2xl md:text-5xl text-pop-purple">ADS</span>
                <span className="absolute bottom-2 md:bottom-4 z-10 font-sans text-[8px] md:text-xs font-bold uppercase tracking-widest">ROI Mastery</span>
             </div>
             
             <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-pop-purple flex items-center justify-center overflow-hidden bg-pop-purple shadow-xl group hover:scale-105 transition-transform">
                <div className="absolute top-0 w-full bg-pop-blue h-[25%] group-hover:h-[35%] transition-all"></div>
                <span className="relative z-10 font-display font-black text-lg sm:text-xl md:text-3xl text-white tracking-widest uppercase">
                  SCALE
                </span>
                <div className="absolute top-1 md:top-4 z-10">
                   <span className="font-sans text-[7px] md:text-[10px] font-black uppercase tracking-[0.15em] text-pop-purple bg-white px-2.5 py-1 md:px-4 md:py-1.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-pop-purple">
                     STRATEGY
                   </span>
                </div>
             </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 md:mb-8 text-center lg:text-left">How we help you scale:</h3>
            <div className="space-y-3 md:space-y-4">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="group flex items-center border-b border-gray-100 pb-3 md:pb-4 hover:pl-2 md:hover:pl-4 transition-all duration-300 cursor-pointer relative"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1 overflow-hidden">
                    <span className={`font-display font-black text-xl sm:text-4xl md:text-5xl lg:text-6xl uppercase ${service.color} transition-all duration-300 group-hover:tracking-tight whitespace-nowrap`}>
                      {service.title}
                    </span>
                    <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                      <div className={`p-1.5 md:p-2 rounded-full bg-gray-50 border border-gray-100 ${service.color}`}>
                        <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>
                  <span className="ml-2 font-display font-bold text-sm md:text-xl text-gray-300 group-hover:text-pop-purple transition-colors duration-300">
                    {service.id}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 md:mt-12 p-6 md:p-10 bg-pop-purple rounded-[2rem] md:rounded-3xl text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-pop-pink/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
               <h4 className="font-display font-bold text-xl md:text-2xl mb-3 md:mb-4">In a hurry for results?</h4>
               <p className="font-sans text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-lg">Our Pinterest VIP Strategy Day is designed for aesthetic brands that want a professional roadmap in under 24 hours.</p>
               <button className="w-full sm:w-auto bg-pop-yellow text-pop-purple px-8 py-3.5 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
                 Book Your VIP Day
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;