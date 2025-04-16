
import { AnimatedElement } from './AnimatedElement';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-portfolio-blue-dark text-white">
      <div className="container mx-auto px-4">
        <AnimatedElement className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Ikram Bouhada</p>
            <p className="text-sm opacity-80">Élève ingénieure en Smart Supply Chain And Logistics</p>
          </div>
          
          <div className="text-sm opacity-80">
            &copy; {currentYear} Tous droits réservés
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};
