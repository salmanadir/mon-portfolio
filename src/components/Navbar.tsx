
import { useState, useEffect } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-md bg-white/80 shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <AnimatedElement animation="fadeInLeft" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-portfolio-blue-light to-portfolio-blue-dark flex items-center justify-center">
            <span className="font-bold text-white">IB</span>
          </div>
          <span className="font-semibold text-lg text-portfolio-blue-dark">Ikram Bouhada</span>
        </AnimatedElement>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <AnimatedElement key={item} delay={i * 0.1} className="relative group">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-800 font-medium hover:text-portfolio-blue-dark transition-colors"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-portfolio-blue-dark group-hover:w-full transition-all duration-300"></span>
                </a>
              </AnimatedElement>
            ))}
          </ul>
        </nav>
        
        <motion.button 
          className="md:hidden text-gray-800"
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </header>
  );
};
