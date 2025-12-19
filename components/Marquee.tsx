import React from 'react';

const niches = [
  "HOME DECOR", "WELLNESS", "FASHION", "E-COMMERCE", "CREATIVE AGENCIES", "LIFESTYLE", "SKINCARE", "INTERIOR DESIGN"
];

const Marquee: React.FC = () => {
  return (
    <div className="relative bg-pop-purple py-6 overflow-hidden -mt-10 md:-mt-14 z-20 rotate-1 transform">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...niches, ...niches, ...niches].map((niche, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-3xl md:text-5xl font-display font-black text-transparent stroke-text uppercase hover:text-pop-yellow transition-colors duration-300 cursor-default">
              {niche}
            </span>
            <div className="w-3 h-3 bg-pop-pink rounded-full ml-8"></div>
          </div>
        ))}
      </div>
      
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #FEFBF6;
        }
        .stroke-text:hover {
          -webkit-text-stroke: 2px #FFD966;
          color: #FFD966;
        }
      `}</style>
    </div>
  );
};

export default Marquee;