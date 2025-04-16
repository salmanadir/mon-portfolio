
import { AnimatedElement } from './AnimatedElement';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">À</span> Propos
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fadeInLeft">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-full max-h-[500px]">
              <img 
                src="/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" 
                alt="Ikram Bouhada" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInRight" className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Ikram Bouhada</h3>
            <p className="text-gray-600">
              Je suis une élève ingénieure en Smart Supply Chain and Logistics à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS). 
              Passionnée par l'optimisation des chaînes d'approvisionnement et l'utilisation des technologies pour améliorer les processus logistiques.
            </p>
            <p className="text-gray-600">
              Mon parcours académique m'a permis de développer des compétences solides en gestion de projet, analyse de données et solutions logistiques intelligentes.
              Je suis actuellement à la recherche d'un stage de fin d'année pour mettre en pratique mes connaissances et acquérir de l'expérience professionnelle.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Gestion de Projet</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Analyse de Données</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Supply Chain</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Logistique</span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};
