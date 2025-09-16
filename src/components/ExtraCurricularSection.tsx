import { AnimatedElement } from './AnimatedElement';

export const ExtraCurricularSection = () => {
  const activities = [
    {
      title: "Club d'Initiative Nationale pour le Développement Humain",
      role: "Responsable de la cellule sponsoring",
      period: "2023 - Présent",
      description: "Organisation de la caravane socio-médicale et de projets durables pour le développement humain au sein de l'ENSIAS.",
      image: "./education/cindh.png" // Placeholder à remplacer
    },
    {
      title: "Club Forum Geni Entreprises",
      role: "Membre active de la cellule sponsoring et du comité d'organisation",
      period: "2023 - Présent",
      description: "Organisation du forum annuel et des événements de recrutement pour faciliter le contact entre étudiants et entreprises.",
      image: "./education/fge.png" // Placeholder à remplacer
    },
    {
      title: "Cours de Soutien",
      role: "Tutrice académique bénévole",
      period: "2023 - 2025",
      description: "Encadrement et soutien scolaire pour des élèves orphelins gratuitement afin de les aider dans leur parcours académique et personnel.",
      image: "./education/tutoring.jpg" // Placeholder à remplacer
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Engagements</span> Extra-académiques
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
              <div className="glass-card rounded-xl overflow-hidden h-full shadow-lg transition-all hover:-translate-y-1 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
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