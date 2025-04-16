
import { AnimatedElement } from './AnimatedElement';

export const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Langages de programmation",
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 70 },
      ]
    },
    {
      name: "Base de données",
      skills: [
        { name: "SQL", level: 80 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      name: "Outils de Business Intelligence",
      skills: [
        { name: "Power BI", level: 85 },
      ]
    },
    {
      name: "Gestion de Projet",
      skills: [
        { name: "Agile", level: 75 },
        { name: "Jira", level: 80 },
        { name: "ClickUp", level: 85 },
        { name: "Trello", level: 90 },
      ]
    },
    {
      name: "Technologies Supply Chain",
      skills: [
        { name: "Supply Chain Management", level: 90 },
        { name: "Gestion d'entrepôts", level: 85 },
        { name: "Gestion d'achats et approvisionnement", level: 80 },
      ]
    },
    {
      name: "Autres",
      skills: [
        { name: "Microsoft Office", level: 95 },
        { name: "Latex", level: 80 },
        { name: "Design Thinking", level: 85 },
        { name: "Bootstrap", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Compétences</span> Techniques
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimatedElement 
              key={idx} 
              animation={idx % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={idx * 0.1}
              className="glass-card rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue-dark">{category.name}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-portfolio-blue-light to-portfolio-blue-dark animate-gradient-flow"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};
