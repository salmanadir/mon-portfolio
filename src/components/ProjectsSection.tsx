
import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Plateforme pour la gestion des entrepôts",
      description: "Conception et développement d'une plateforme pour la gestion des entrepôts utilisant la méthode de WILSON, TSP, VRP.",
      period: "Février 2024 - Présent",
      location: "ENSIAS, RABAT",
      technologies: ["Laravel", "PHP", "MySQL", "Python", "Laravel Forge", "DigitalOcean"],
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    },
    {
      title: "Système d'information de gestion des achats, de stock et d'entreposage",
      description: "Conception et développement d'un système d'information complet qui intègre la gestion des achats, du stock et de l'entreposage pour optimiser la chaîne d'approvisionnement.",
      period: "Janvier 2023 - Présent",
      location: "ENSIAS, RABAT",
      technologies: ["Oracle Apex", "PL/SQL", "UML"],
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    },
    {
      title: "Système d'information de gestion d'un groupe de cliniques vétérinaires",
      description: "Conception et développement d'un système d'information pour gérer efficacement un réseau de cliniques vétérinaires, incluant la gestion des patients, des rendez-vous et du personnel médical.",
      period: "Oct 2024 - Déc 2024",
      location: "ENSIAS, RABAT",
      technologies: ["Oracle Apex", "PL/SQL", "UML"],
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    },
    {
      title: "Application de la méthode DRP dans la prévision et la planification",
      description: "Conception et développement d'une application utilisant la méthode DRP (Distribution Resource Planning) pour optimiser la prévision et la planification des ressources dans un cas de demande saisonnière.",
      period: "Mars 2024 - Juin 2024",
      location: "ENSIAS, RABAT",
      technologies: ["Django", "Python", "HTML", "CSS", "Chart.JS"],
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Projets</span> Académiques
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedElement 
              key={index}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 0.1}
            >
              <motion.div 
                className={`glass-card rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeProject === index ? 'ring-2 ring-portfolio-blue-dark' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-gray-600">
                    <span>{project.period}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span>{project.location}</span>
                  </div>
                  
                  <AnimatePresence>
                    {activeProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mb-4">{project.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-portfolio-blue-light/30 text-portfolio-blue-dark"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-portfolio-blue-light/10 text-portfolio-blue-dark">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      className="flex items-center gap-1 text-sm text-portfolio-blue-dark font-medium"
                      onClick={() => setActiveProject(activeProject === index ? null : index)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeProject === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};
