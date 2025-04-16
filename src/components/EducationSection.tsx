
import { AnimatedElement } from './AnimatedElement';

export const EducationSection = () => {
  const educationItems = [
    {
      degree: "Cycle D'ingénieur (Smart Supply Chain and Logistics)",
      school: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      location: "Rabat, Maroc",
      period: "2023 - 2025",
      details: "Spécialisation en Smart Supply Chain and Logistics, avec un focus sur les systèmes d'information pour la gestion de la chaîne d'approvisionnement."
    },
    {
      degree: "Classes Préparatoires Aux Grandes Écoles (PCSI/PC)",
      school: "CPGE Med Reda Slaoui",
      location: "Agadir, Maroc",
      period: "2021 - 2023",
      details: "Formation intensive en mathématiques, physique et informatique pour préparer les concours d'entrée aux grandes écoles d'ingénieurs."
    },
    {
      degree: "Baccalauréat Sciences PHYSIQUE, Option Français",
      school: "Lycée HASSAN II",
      location: "Tiznit, Maroc",
      period: "2020 - 2021",
      details: "Mention Très Bien."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Formation</span> Académique
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <AnimatedElement key={index} animation="fadeIn" className="relative">
              <div className="glass-card rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-1">
                <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-portfolio-blue-light/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-portfolio-blue-dark">{educationItems.length - index}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium bg-portfolio-blue-light/30 text-portfolio-blue-dark px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.degree}</h3>
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-gray-600">{item.school}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <span className="text-gray-600">{item.location}</span>
                </div>
                
                <p className="text-gray-600">{item.details}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};
