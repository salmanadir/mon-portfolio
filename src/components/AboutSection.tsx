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
        
        <div className="max-w-3xl mx-auto">
          <AnimatedElement animation="fadeIn" className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Salma Nadir</h3>
            <p className="text-gray-600">
              Je suis une élève ingénieure en 2ème année Génie Logiciel à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS).
              Passionnée par le développement logiciel et la conception d'applications innovantes, je maîtrise plusieurs langages de programmation et frameworks modernes.
            </p>
            <p className="text-gray-600">
              Mon parcours en classes préparatoires (CPGE MP) et à l'ENSIAS m'a permis de développer un solide esprit d'analyse et des compétences techniques approfondies.
              Je suis actuellement à la recherche d'un stage de fin d'année de 2 à 3 mois en développement pour mettre en pratique mes connaissances et contribuer à des projets concrets.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Développement Fullstack</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Java/Spring Boot</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">React.js</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">PHP/MySQL</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">UML/Merise</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Gestion de Projets</span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};