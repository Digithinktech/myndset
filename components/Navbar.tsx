import React, { useState, useEffect } from 'react';
import { Menu, X, Pin } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Intelligence', href: '#lab' },
    { name: 'Journal', href: '#blog' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-pop-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-pop-purple p-2 rounded-full text-white">
              <Pin className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-pop-purple">
              THE MYNDSET
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans font-medium text-pop-purple hover:text-pop-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="secondary" size="sm" withIcon onClick={() => {
              const target = document.querySelector('#services');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}>
              Apply to Work
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-pop-purple">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-pop-cream border-b border-pop-purple/10 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-display text-xl font-bold text-pop-purple hover:text-pop-pink"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full justify-center" withIcon onClick={() => setIsOpen(false)}>
              Apply to Work
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;