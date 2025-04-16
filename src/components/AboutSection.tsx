
import { AnimatedElement } from './AnimatedElement';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">À propos</span> de moi
          </h2>
          <div className="w-20 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedElement animation="fadeInLeft" className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Élève ingénieure en <span className="text-portfolio-blue-dark">Smart Supply Chain</span>
            </h3>
            <p className="text-gray-600">
              Je suis étudiante en 2ème année à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), 
              spécialisée en Smart Supply Chain And Logistics. Je recherche activement un stage de fin d'année d'une durée de 2 mois 
              à partir de mi-Juin.
            </p>
            <p className="text-gray-600">
              Passionnée par l'optimisation des chaînes d'approvisionnement et les technologies informatiques qui les supportent, 
              j'ai développé de solides compétences en programmation, gestion de bases de données, et méthodologies de gestion de projet.
            </p>
            <p className="text-gray-600">
              Mon parcours académique et mes projets m'ont permis d'acquérir une vision globale de la supply chain moderne, 
              avec une approche analytique et orientée solutions.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInRight" className="glass-card rounded-2xl p-6 space-y-6">
            <div>
              <h4 className="text-lg font-medium text-portfolio-blue-dark mb-3">Informations personnelles</h4>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-medium w-24">Email:</span>
                  <a href="mailto:ikrambouhada10@gmail.com" className="text-gray-600 hover:text-portfolio-blue-dark">ikrambouhada10@gmail.com</a>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Téléphone:</span>
                  <a href="tel:+212637916767" className="text-gray-600 hover:text-portfolio-blue-dark">+212 6 37 91 67 67</a>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Ville:</span>
                  <span className="text-gray-600">Rabat, Maroc</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Profil:</span>
                  <a 
                    href="https://www.linkedin.com/in/ikrambhd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-portfolio-blue-dark"
                  >
                    linkedin.com/in/ikrambhd
                  </a>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">GitHub:</span>
                  <a 
                    href="https://www.github.com/ikrambhd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-portfolio-blue-dark"
                  >
                    github.com/ikrambhd
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-portfolio-blue-dark mb-3">Langues</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Français</span>
                    <span>Compétence professionnelle complète</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-portfolio-blue-dark w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Anglais</span>
                    <span>Compétence professionnelle complète</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-portfolio-blue-dark w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Arabe</span>
                    <span>Langue natale</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-portfolio-blue-dark w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};
