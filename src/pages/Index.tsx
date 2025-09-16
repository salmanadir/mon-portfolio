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
import GithubContributions from '../components/GithubContributions';
import { CertificatesSection } from '@/components/CertificatesSection';


const Index = () => {
  useEffect(() => {
    // Add Google Fonts link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    
    document.title = 'Salma NADIR - Portfolio';
    
    return () => {
      // Clean up the link when component unmounts (only if it still exists)
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      
      <DynamicBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      
      {/* Section des contributions GitHub */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GithubContributions />
        </div>
      </section>
      
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ExtraCurricularSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;