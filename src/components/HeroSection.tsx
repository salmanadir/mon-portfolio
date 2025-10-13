import { AnimatedElement } from './AnimatedElement';  
import { motion } from 'framer-motion';  
import { ChevronDown } from 'lucide-react';  
  
export const HeroSection = () => {  
  const text = "Élève ingénieure en Génie Logiciel à l'ENSIAS";  
    
  return (  
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden bg-gradient-to-b from-white to-blue-50">  
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">  
        <div className="order-2 md:order-1">  
          <AnimatedElement animation="fadeInLeft" delay={0.2}>  
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">  
              <span className="text-portfolio-blue-dark">SALMA</span> NADIR  
            </h1>  
          </AnimatedElement>  
            
          <AnimatedElement animation="fadeInLeft" delay={0.4} className="mb-6">  
            <h2 className="text-xl md:text-2xl text-gray-600">  
              {text.split("").map((char, index) => {  
                const isGeniePart = index >= text.indexOf("Génie Logiciel") && index < text.indexOf("Génie Logiciel") + "Génie Logiciel".length;  
                return (  
                  <motion.span  
                    key={index}  
                    initial={{ opacity: 0 }}  
                    animate={{ opacity: 1 }}  
                    transition={{   
                      duration: 0.05,   
                      delay: 0.4 + index * 0.05   
                    }}  
                    className={isGeniePart ? "text-portfolio-blue-dark font-medium" : ""}  
                  >  
                    {char}  
                  </motion.span>  
                );  
              })}  
            </h2>  
          </AnimatedElement>  
            
          <AnimatedElement animation="fadeInLeft" delay={0.6} className="mb-8">  
            <p className="text-gray-600 max-w-lg">  
              À la recherche d'un stage de fin d'études en développement/DevOps de 4 à 6 mois pour mettre en pratique mes compétences techniques.  
            </p>  
          </AnimatedElement>  
            
          <AnimatedElement animation="fadeInLeft" delay={0.8} className="flex gap-4">  
            <motion.a   
              href="#contact"   
              className="px-6 py-2.5 bg-portfolio-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all"  
              whileHover={{ scale: 1.05 }}  
              whileTap={{ scale: 0.95 }}  
            >  
              Me contacter  
            </motion.a>  
            <motion.a   
              href="#projects"   
              className="px-6 py-2.5 border-2 border-portfolio-blue-dark text-portfolio-blue-dark rounded-full shadow-lg hover:shadow-xl transition-all"  
              whileHover={{ scale: 1.05 }}  
              whileTap={{ scale: 0.95 }}  
            >  
              Voir mes projets  
            </motion.a>  
          </AnimatedElement>  
        </div>  
          
        <div className="order-1 md:order-2 flex justify-center">  
          <AnimatedElement animation="scaleIn" delay={0.4} className="relative">  
            <motion.div   
              className="absolute inset-0 bg-gradient-to-r from-portfolio-blue-light to-portfolio-blue-dark rounded-full opacity-30 blur-3xl transform scale-110"  
              animate={{   
                scale: [1.1, 1.15, 1.1],  
                opacity: [0.3, 0.4, 0.3],  
              }}  
              transition={{  
                duration: 5,  
                repeat: Infinity,  
                repeatType: "reverse",  
              }}  
            ></motion.div>  
            <motion.div   
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-white"  
              animate={{   
                boxShadow: [  
                  "0px 10px 25px rgba(2, 136, 209, 0.3)",   
                  "0px 15px 35px rgba(2, 136, 209, 0.4)",   
                  "0px 10px 25px rgba(2, 136, 209, 0.3)"  
                ]  
              }}  
              transition={{  
                duration: 5,  
                repeat: Infinity,  
                repeatType: "reverse",  
              }}  
            >  
              <img   
                src="./education/my-pic.jpg"   
                alt="Salma Nadir"   
                className="w-full h-full object-cover"  
              />  
            </motion.div>  
          </AnimatedElement>  
        </div>  
      </div>  
        
      <motion.div   
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"  
        initial={{ opacity: 0, y: -20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{   
          delay: 1.5,  
          duration: 0.5  
        }}  
      >  
          
        <motion.div  
          animate={{ y: [0, 6, 0] }}  
          transition={{   
            duration: 1.5,   
            repeat: Infinity,  
          }}  
        >  
          <ChevronDown className="w-6 h-6 text-portfolio-blue-dark" />  
        </motion.div>  
      </motion.div>  
    </section>  
  );  
};