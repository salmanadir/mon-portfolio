
import { AnimatedElement } from './AnimatedElement';

export const ExtraCurricularSection = () => {
  const activities = [
    {
      title: "Club Développement Durable",
      role: "Membre actif",
      period: "2023 - Présent",
      description: "Participation à des initiatives écologiques sur le campus et organisation d'événements de sensibilisation à l'environnement.",
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    },
    {
      title: "Association des Étudiants en Logistique",
      role: "Coordinatrice d'événements",
      period: "2022 - 2023",
      description: "Organisation de conférences professionnelles et coordination des activités entre les étudiants et les entreprises partenaires.",
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    },
    {
      title: "Club de Robotique",
      role: "Participante",
      period: "2021 - 2022",
      description: "Participation à des compétitions de robotique et développement de projets innovants utilisant l'IA et l'automatisation.",
      image: "/lovable-uploads/e2b76fd2-fe2c-4e6d-bd44-191702e5c093.png" // Placeholder, à remplacer
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Activités</span> Parascolaires
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <AnimatedElement 
              key={index} 
              animation="fadeIn" 
              delay={index * 0.2}
              className="h-full"
            >
              <div className="glass-card rounded-xl overflow-hidden h-full shadow-lg transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium bg-portfolio-blue-light/30 text-portfolio-blue-dark px-3 py-1 rounded-full">
                      {activity.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{activity.title}</h3>
                  <p className="text-portfolio-blue-dark font-medium mb-3">{activity.role}</p>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};
