
import { AnimatedElement } from './AnimatedElement';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/ikram-bouhada", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ikram-bouhada", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/ikram_bouhada", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/ikram.bouhada", label: "Instagram" }
  ];
  
  return (
    <footer className="py-8 bg-portfolio-blue-dark text-white">
      <div className="container mx-auto px-4">
        <AnimatedElement className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Ikram Bouhada</p>
            <p className="text-sm opacity-80">Élève ingénieure en Smart Supply Chain And Logistics</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          
          <div className="text-sm opacity-80">
            &copy; {currentYear} Tous droits réservés
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};
