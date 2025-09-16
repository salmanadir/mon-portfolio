import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';

export const EducationSection = () => {
  const educationItems = [
    {
      degree: "Élève ingénieur en 3ème année, Génie Logiciel",
      school: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes - ENSIAS",
      location: "Rabat, Maroc",
      period: "2023 - 2026",
      details: "Filière Génie Logiciel (GL). Formation approfondie en développement logiciel, DevOps, intelligence artificielle, QA, conception des applications et gestion de projets informatiques.",
      image: "./education/ensiass.png"
    },
    {
      degree: "Classes préparatoires aux grandes écoles",
      school: "CPGE Ibn Timiya",
      location: "Marrakech, Maroc",
      period: "2021-2023",
      details: "Option Mathématiques Physiques (MP). Formation intensive en mathématiques et physique préparant aux concours des grandes écoles d'ingénieurs. Parmi les 450 premiers au CNC",
      image: "./education/cpge.jpg" 
    },
    {
      degree: "Baccalauréat Sciences Mathématiques A",
      school: "Lycée qualifiant Al Maghreb Al Arabi",
      location: "Kelaa Des Sraghna, Maroc",
      period: "2020-2021",
      details: "Obtention du baccalauréat avec mention Très Bien, spécialité Sciences Mathématiques A, avec une moyenne plus de 17/20.",
      image: "./education/lycee.jpeg" 
    }
  ];

  return (
    <section id="education" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Parcours</span> Académique
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <AnimatedElement 
              key={index} 
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 0.1}
            >
              <motion.div 
                className="glass-card rounded-xl p-6 shadow-lg h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-sm font-medium bg-portfolio-blue-light/30 text-portfolio-blue-dark px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                  <div className="h-10 w-10 rounded-full bg-portfolio-blue-light/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-portfolio-blue-dark">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.degree}</h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-sm">
                    <span className="text-gray-600">{item.school}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span className="text-gray-600">{item.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.details}</p>
                </div>
                
                <motion.div 
                  className="mt-auto rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.school} 
                    className="w-full h-40 object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};