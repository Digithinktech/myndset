
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Introduction from './components/Introduction';
import AIAudit from './components/AIAudit';
import Services from './components/Services';
import Work from './components/Work';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-pop-cream overflow-x-hidden selection:bg-pop-pink selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Introduction />
      <AIAudit />
      <Services />
      <Work />
      <Banner />
      <Testimonials />
      <BlogSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
