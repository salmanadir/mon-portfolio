
import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const experiences = [
    {
      title: "Stagiaire en développement de front-end d'une application web ROCKO",
      company: "TechForTrade",
      location: "Rabat",
      period: "Juillet 2024 - Août 2024",
      description: [
        "Collaboration avec l'équipe UX/UI pour transformer les maquettes Figma en composants interactifs et responsives.",
        "Développement du front-end d'une interface web B2B pour la gestion des commandes et facturation."
      ],
      detailedDescription: "J'ai travaillé en étroite collaboration avec l'équipe UX/UI pour transformer leurs maquettes Figma en interfaces web fonctionnelles. Ce projet m'a permis d'améliorer mes compétences en développement front-end, notamment avec React et les différentes librairies CSS modernes. J'ai également appris à optimiser les performances et l'expérience utilisateur, tout en respectant les délais serrés du projet.",
      technologies: ["Figma", "React", "HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Expériences</span> Professionnelles
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-portfolio-blue-dark/20"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 md:mb-0">
              <div className="relative grid md:grid-cols-2 gap-8 md:gap-0 items-center">
                {/* Date/Period - left side on desktop */}
                <AnimatedElement
                  animation="fadeInLeft"
                  className="md:pr-12 text-right hidden md:block"
                >
                  <span className="text-portfolio-blue-dark font-medium">{exp.period}</span>
                  <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={exp.image} 
                      alt={exp.company} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </AnimatedElement>
                
                {/* Timeline dot - only visible on desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-blue-dark border-4 border-portfolio-blue-light"></div>
                
                {/* Content - right side on desktop */}
                <AnimatedElement
                  animation="fadeInRight"
                  className="md:col-start-2 glass-card rounded-xl p-6 shadow-lg md:ml-12"
                >
                  {/* Mobile image - only visible on mobile */}
                  <div className="md:hidden mb-4 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={exp.image} 
                      alt={exp.company} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Date/Period - only visible on mobile */}
                  <span className="text-portfolio-blue-dark font-medium block md:hidden mb-2">{exp.period}</span>
                  
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-gray-600">
                      {exp.company}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span className="text-gray-600">
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-portfolio-blue-dark">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: expandedId === index ? 1 : 0,
                      height: expandedId === index ? 'auto' : 0
                    }}
                    className="overflow-hidden mb-4"
                  >
                    <p className="text-gray-600 border-l-2 border-portfolio-blue-dark/30 pl-4 italic">
                      {exp.detailedDescription}
                    </p>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium px-3 py-1 rounded-full bg-portfolio-blue-light/30 text-portfolio-blue-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="flex items-center gap-1 text-sm text-portfolio-blue-dark font-medium"
                    onClick={() => toggleExpand(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedId === index ? (
                      <>Voir moins <ChevronUp className="h-4 w-4" /></>
                    ) : (
                      <>En savoir plus <ChevronDown className="h-4 w-4" /></>
                    )}
                  </motion.button>
                </AnimatedElement>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
