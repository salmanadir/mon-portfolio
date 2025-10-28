import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Système de Gestion basé sur une Architecture Microservices ",
      description: "Objectif: Conception et développement d'un syst`eme de gestion basé sur une architecture Microservices pour une entreprise de transport urbain",
      period: "En cours",
      location: "ENSIAS, Rabat",
      technologies: ["Pas encore fixe à 100%, mais Backend: Spring Boot, frontend: React, Conteneurisation : Docker, Orchestration : Kubernetes, Messaging : RabbitMQ ou Kafka"],
      image: "./education/loading.png" // Placeholder, à remplacer
    },
    
    {
      title: "Système DevSecOps avec IA Générative pour la Génération Automatique de Politiques de Sécurité",
      description: "Objectif: Automatisation de la création de politiques de sécurité conformes aux standards NIST/ISO à partir de rapports de vulnérabilités en utilisant des LLMs",
      period: "En cours",
      location: "ENSIAS, Rabat",
      technologies: ["Pas encore fixe à 100%, mais Python, Docker, GitHub Actions, AWS, SonarQube, OWASP Tools"],
      image: "./education/loading.png" // Placeholder, à remplacer
    },

    {
      title: "AstroMap - Plateforme d'Exploration Spatiale",
      description: "Visualisation 3D du syst`eme solaire, quiz éducatifs, mise en place d'un backend en Spring Boot avec base de données PostgreSQL et intégration d'API externes (NOAA) pour la prédiction d'événements astronomiques.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["React.js", "Three.js", "Spring Boot", "PostgreSQL", "Docker", "API NOAA","Git", "UML", "Postman"],
      image: "./education/astromap.png" // Placeholder, à remplacer
    },
    {
      title: "Automatisation d'un processus d'acquisition d'un bien immobilier,",
      description: "Objectif: Automatiser et modéliser le processus complet d'acquisition immobilière via un workflow BPMN intelligent, orchestrant les interactions entre clients, agents, vendeurs et notaires, de la recherche initiale jusqu'à la signature de l'acte authentique.",
      period: "En cours",
      location: "ENSIAS, Rabat",
      technologies: ["Pas encore fixe à 100%"],
      image: "./education/loading.png" // Placeholder, à remplacer
    },
    {
      title: "Générateur Automatique de Pipelines de Données",
      description: "L'idée de notre projet est de créer un outil capable de transformer une description simple d’un pipeline de données (DSL) en code exécutable automatiquement. Un pipeline ETL suit la logique Source → Transformations → Destination, et notre approche utilise le Model-Driven Engineering (MDE) : le pipeline est d’abord défini comme un modèle, puis ce modèle est automatiquement converti en code opérationnel.",
      period: "En cours",
      location: "ENSIAS, Rabat",
      technologies: ["EMF (Eclipse Modeling Framework)", "Xtext", "OCL", "Acceleo"],
      image: "./education/loading.png" // Placeholder, à remplacer
    },
    {
      title: "Application de Gestion des Stages de l'ENSIAS",
      description: "Conception avec la méthode Merise pour modéliser le syst`eme et développement de l'application sous Oracle APEX avec interfaces dédiées et gestion des données Oracle.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Oracle APEX", "PL/SQL", "Oracle DB", "Merise"],
      image: "./education/gestion-stages.jpg" // Placeholder, à remplacer
    },
    {
      title: "Application de Gestion des Formations",
      description: "Développement d'une application web complète avec API REST pour la gestion des formations, incluant une interface responsive et des tests approfondis.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Spring Boot", "Java", "Postman", "MySQL", "HTML5/CSS3", "JavaScript"],
      image: "./education/gestion-formations.png" // Placeholder, à remplacer
    },
    
    {
      title: "Application Mobile de Gestion de Projets Collaboratifs",
      description: "Conception et développement d'une application mobile Android de gestion de projets : taches, équipe, syst`eme de messagerie en temps réel.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Android Studio", "Kotlin", "Firebase", "MVVM", "UML", "UML"],
      image: "./education/gestion-projets.png" // Placeholder, à remplacer
    },
    {
      title: "Framework Géospatial - Atlas Marocain Interactif",
      description: "Développement d'une plateforme d'analyse des territoires marocains utilisant Flask et Earth Engine pour des visualisations géospatiales avancées.",
      period: "2024",
      location: "ENSIAS, Rabat",
      technologies: ["Flask", "Google Earth Engine", "Python", "JavaScript"],
      image: "./education/atlas-marocain.jpg" // Placeholder, à remplacer
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