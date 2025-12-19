import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-pop-purple text-pop-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
           <h2 className="font-display font-black text-4xl md:text-6xl uppercase mb-4">
             Don't Just Take <br/>
             <span className="text-pop-pink">Our Word For It</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
               <div className="flex items-center gap-4 mb-6">
                 <img 
                   src={`https://picsum.photos/100/100?random=${i + 30}`} 
                   className="w-12 h-12 rounded-full border-2 border-pop-yellow" 
                   alt="Avatar"
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <h4 className="font-bold font-display text-lg">Sarah Jenkins</h4>
                   <p className="text-xs font-sans text-gray-300">CEO, Plantify</p>
                 </div>
               </div>
               <p className="font-sans text-lg italic leading-relaxed">
                 "Absolutely transformed our Pinterest presence. We went from 10k monthly views to over 1M in just 3 months. The quirky vibe matches our brand perfectly!"
               </p>
               <div className="mt-6 flex gap-1">
                 {[...Array(5)].map((_, idx) => (
                   <span key={idx} className="text-pop-yellow">★</span>
                 ))}
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;