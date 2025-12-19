import React from 'react';
import { Pin, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pop-purple text-pop-cream pt-20 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="bg-pop-cream p-2 rounded-full text-pop-purple">
                  <Pin className="w-5 h-5 fill-current" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter text-white">
                  THE MYNDSET
                </span>
             </div>
             <p className="font-sans text-gray-400 leading-relaxed">
               The Pinterest marketing agency for aesthetic and intentional brands. Elevating your brand through visual search strategy.
             </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-pop-yellow uppercase">Offerings</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-pop-pink transition-colors">Pinterest Management</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-pop-pink transition-colors">Pinterest Ads</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-pop-pink transition-colors">Strategy Audit</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-pop-pink transition-colors">VIP Day</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-pop-yellow uppercase">Company</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-pop-pink transition-colors">About Us</a></li>
              <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-pop-pink transition-colors">Our Results</a></li>
              <li><a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="hover:text-pop-pink transition-colors">The Journal</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-pop-pink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-pop-yellow uppercase">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:bg-pop-pink hover:shadow-[0_0_20px_rgba(209,77,114,0.5)] group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:bg-pop-blue hover:shadow-[0_0_20px_rgba(116,155,194,0.5)] group"
                aria-label="Twitter"
              >
                <Twitter size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-115 hover:bg-pop-orange hover:shadow-[0_0_20px_rgba(240,160,75,0.5)] group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-white transition-colors" />
              </a>
            </div>
            <button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-pop-cream text-pop-purple font-bold px-6 py-3 rounded-full hover:bg-pop-yellow transition-all duration-300 w-full uppercase text-sm tracking-widest shadow-lg hover:-translate-y-1"
            >
              Apply to Work
            </button>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 text-center">
            <h2 className="font-display font-black text-[12vw] leading-none text-white/5 select-none uppercase">
              INTENTIONAL
            </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-gray-500 font-sans uppercase tracking-widest">
          <p>© 2024 The Myndset. All Rights Reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">Built for <Heart size={14} className="text-pop-pink fill-current" /> Intentional Brands</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;