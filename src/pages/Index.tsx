
import { useEffect } from 'react';
import { DynamicBackground } from '../components/DynamicBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExtraCurricularSection } from '../components/ExtraCurricularSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add Google Fonts link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    
    document.title = 'Ikram Bouhada - Portfolio';
    
    return () => {
      // Clean up the link when component unmounts
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <DynamicBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExtraCurricularSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
