
import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <AnimatedElement animation="fadeInLeft" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              <span className="text-portfolio-blue-dark">IKRAM</span> BOUHADA
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInLeft" delay={0.4} className="mb-6">
            <h2 className="text-xl md:text-2xl text-gray-600">
              Élève ingénieure en <span className="text-portfolio-blue-dark font-medium">Smart Supply Chain</span> And Logistics
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInLeft" delay={0.6} className="mb-8">
            <p className="text-gray-600 max-w-lg">
              À la recherche d'un stage de fin d'année d'une durée de 2 mois à partir de mi-Juin.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInLeft" delay={0.8} className="flex flex-wrap gap-4">
            <motion.a 
              href="#contact" 
              className="px-6 py-2.5 bg-portfolio-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
            <motion.a 
              href="#experience" 
              className="px-6 py-2.5 border border-portfolio-blue rounded-full text-portfolio-blue-dark hover:bg-portfolio-blue-light/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mon expérience
            </motion.a>
          </AnimatedElement>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <AnimatedElement animation="scaleIn" delay={0.4} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue-light to-portfolio-blue-dark rounded-full opacity-30 blur-3xl transform scale-110"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
              <img 
                src="/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" 
                alt="Ikram Bouhada" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 mb-2">Scroll</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-portfolio-blue-dark" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
