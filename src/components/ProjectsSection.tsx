import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Framework Géospatial - Atlas Marocain Interactif",
      description: "Développement d'une plateforme d'analyse des territoires marocains utilisant Flask et Earth Engine pour des visualisations géospatiales avancées.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Flask", "Google Earth Engine", "Python", "JavaScript"],
      image: "/education/atlas-marocain.jpg" // Placeholder, à remplacer
    },
    {
      title: "Application Mobile de Gestion de Projets Collaboratifs",
      description: "Conception et développement d'une application Android pour la gestion de tâches en équipe avec système de notifications et suivi des progrès.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Android Studio", "Java", "Firebase", "MVVM", "UML"],
      image: "/education/gestion-projets.webp" // Placeholder, à remplacer
    },
    {
      title: "AstroMap - Plateforme d'Exploration Spatiale",
      description: "Application web interactive de visualisation 3D du système solaire avec quiz éducatif et intégration d'API NASA pour les données astronomiques.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["React.js", "Three.js", "Spring Boot", "API NASA", "Docker"],
      image: "/education/astromap.jpg" // Placeholder, à remplacer
    },
    {
      title: "Application de Gestion des Stages de l'ENSIAS",
      description: "Conception et développement d'un système complet de gestion des stages étudiants avec interfaces administratives et étudiantes.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Oracle APEX", "PL/SQL", "Oracle DB", "Merise"],
      image: "/education/gestion-stages.jpg" // Placeholder, à remplacer
    },
    {
      title: "Application de Gestion des Formations",
      description: "Développement d'une application web complète avec API REST pour la gestion des formations, incluant une interface responsive et des tests approfondis.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Spring Boot", "Java", "Postman", "MySQL", "HTML5/CSS3", "JavaScript"],
      image: "/education/gestion-formations.avif" // Placeholder, à remplacer
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Mes</span> Projets
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