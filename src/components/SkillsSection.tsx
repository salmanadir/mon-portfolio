import { AnimatedElement } from './AnimatedElement';

export const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Langages de programmation",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      name: "Développement Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "React.js", level: 75 },
        { name: "Android (Java)", level: 70 },
      ]
    },
    {
      name: "Développement Backend",
      skills: [
        { name: "Spring Boot", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Flask", level: 65 },
      ]
    },
    {
      name: "Bases de données",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Oracle DB", level: 75 },
        { name: "Firebase", level: 70 },
      ]
    },
    {
      name: "Outils & Technologies",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Docker", level: 65 },
        { name: "Postman", level: 75 },
        { name: "UML", level: 85 },
      ]
    },
    {
      name: "Langues",
      skills: [
        { name: "Arabe (maternelle)", level: 100 },
        { name: "Français (courant)", level: 95 },
        { name: "Anglais (courant)", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Mes</span> Compétences
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimatedElement 
              key={idx} 
              animation={idx % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={idx * 0.1}
              className="glass-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue-dark border-b pb-2">{category.name}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-portfolio-blue-light to-portfolio-blue-dark"
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