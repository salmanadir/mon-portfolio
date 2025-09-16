import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download, Github } from 'lucide-react';

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Merci pour votre message ! Je vous répondrai dès que possible.',
    });
    
    // Reset form after successful submission
    if (formStatus.success) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
    }
  };
  
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'G134794268@um5.ac.ma',
      link: 'mailto:G134794268@um5.ac.ma',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+212 6 66 96 52 58',
      link: 'tel:+212666965258',
    },
    {
      icon: Github,
      title: 'Github',
      value: 'salmanadir',
      link: 'https://github.com/salmanadir',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Rabat, Maroc',
      link: 'https://maps.google.com/?q=ENSIAS,Rabat,Maroc',
    },
  ];
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Me</span> Contacter
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto"></div>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          
          {/* Contact Info */}
          <AnimatedElement animation="fadeInRight">
            <div className="glass-card rounded-xl p-6 shadow-lg h-full" >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Informations de contact</h3>
              
              <div className="space-y-6 mb-8">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-portfolio-blue-light/30 flex items-center justify-center text-portfolio-blue-dark">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-600 hover:text-portfolio-blue-dark transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-medium text-gray-800 mb-4">Télécharger mon CV</h4>
                <motion.a
                  href="./Salma_Nadir-CV.pdf" 
                  download="Nadir_Salma_CV.pdf"
                  className="flex items-center gap-2 px-6 py-2.5 bg-portfolio-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} /> Télécharger le CV
                </motion.a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};