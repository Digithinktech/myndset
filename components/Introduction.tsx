import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-pop-cream text-pop-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          <div className="lg:col-span-8 text-center lg:text-left">
            <h4 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Intentional Growth</h4>
            <h2 className="font-display font-black text-3xl md:text-5xl lg:text-7xl leading-tight uppercase mb-6 md:mb-8 px-2 lg:px-0">
              We help <span className="text-pop-pink">Aesthetic Brands</span> grow their reach and revenue through <span className="text-pop-blue">Strategy</span>, <span className="text-pop-orange">Data</span>, and <span className="bg-pop-yellow px-2">Visual Mastery</span>.
            </h2>
            <p className="font-sans text-base md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              Pinterest is a long-term investment. We don't just "pin"—we create a visual funnel that drives high-quality traffic to your site while maintaining your brand's unique aesthetic.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end relative px-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square bg-pop-yellow rounded-[2rem] md:rounded-3xl rotate-3 flex items-center justify-center border-4 border-pop-purple p-6 md:p-8 shadow-xl">
               <div className="text-center">
                 <p className="font-display font-black text-5xl md:text-7xl mb-2">100M+</p>
                 <p className="font-sans font-bold text-[10px] md:text-sm uppercase tracking-widest leading-tight">Monthly Views Generated</p>
               </div>
               {/* Decorative corner element - Hidden on very small screens */}
               <div className="absolute -top-3 -right-3 w-10 h-10 bg-pop-pink rounded-full border-2 border-pop-purple hidden sm:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;