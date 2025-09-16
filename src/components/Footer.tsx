import { AnimatedElement } from './AnimatedElement';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/salma-nadir", // À remplacer par votre vrai lien LinkedIn
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:G134794268@um5.ac.ma", 
      label: "Email" 
    },
    { 
      icon: Github, 
      href: "https://github.com/salmanadir", 
      label: "Github" 
    },
  ];
  
  return (
    <footer className="py-8 bg-portfolio-blue-dark text-white">
      <div className="container mx-auto px-4">
        <AnimatedElement className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-lg font-semibold">Salma Nadir</p>
            <p className="text-sm opacity-80">Élève ingénieure en Génie Logiciel à l'ENSIAS</p>
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
          
          <div className="text-sm opacity-80 text-center md:text-right">
            &copy; {currentYear} Tous droits réservés - Développé avec amour par Salma Nadir
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};