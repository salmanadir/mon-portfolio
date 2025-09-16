import { useState, useEffect } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const menuItems = [
    { name: 'Accueil', anchor: 'home' },
    { name: 'À Propos', anchor: 'about' },
    { name: 'Parcours', anchor: 'education' },
    { name: 'Expérience', anchor: 'experience' },
    { name: 'Projets', anchor: 'projects' },
    { name: 'Compétences', anchor: 'skills' },
    { name: 'Certificats', anchor: 'certificates' },
    { name: 'Engagements', anchor: 'extracurricular' },
    { name: 'Contact', anchor: 'contact' }
  ];

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
            <span className="font-bold text-white">SN</span>
          </div>
          <span className="font-semibold text-gray-800">Salma Nadir</span>
        </AnimatedElement>
        
        {/* Menu pour Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item, i) => (
              <AnimatedElement key={item.anchor} delay={i * 0.1} className="relative group">
                <a 
                  href={`#${item.anchor}`} 
                  className="text-gray-800 font-medium hover:text-portfolio-blue-dark transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-portfolio-blue-dark group-hover:w-full transition-all duration-300"></span>
                </a>
              </AnimatedElement>
            ))}
          </ul>
        </nav>
        
        

        {/* Bouton de menu mobile */}
        <motion.button 
          className="md:hidden text-gray-800"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu de navigation"
        >
          <Menu className="w-6 h-6" />
        </motion.button>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-md rounded-b-xl py-4 mt-1"
          >
            <ul className="flex flex-col space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.anchor}>
                  <a 
                    href={`#${item.anchor}`} 
                    className="block py-2 text-gray-800 font-medium hover:text-portfolio-blue-dark transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};