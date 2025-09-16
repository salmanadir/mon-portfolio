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
              Élève ingénieure en 3ème année Génie Logiciel à l'ENSIAS, passionnée par le DevOps et le développement logiciel. Je maîtrise Java/Spring Boot, React.js, les technologies DevOps, la conception UML/Merise.
            </p>
            <p className="text-gray-600">
              Mon parcours en CPGE MP puis à l'ENSIAS m'a permis d'acquérir un solide esprit d'analyse et des compétences techniques avancées. Je recherche un stage de fin d'études (4 à 6 mois) en développement ou DevOps pour mettre mes connaissances en pratique et contribuer à des projets innovants.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Développement Fullstack</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">DevOps</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Java/Spring Boot</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">React.js</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Github Actions</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">UML/Merise</span>
              <span className="px-3 py-1 bg-portfolio-blue-light/30 text-portfolio-blue-dark rounded-full">Gestion de Projets</span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};