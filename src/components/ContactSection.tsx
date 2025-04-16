
import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download } from 'lucide-react';

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
      value: 'ikram.bouhada@gmail.com',
      link: 'mailto:ikram.bouhada@gmail.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+212 600 000 000',
      link: 'tel:+212600000000',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Rabat, Maroc',
      link: 'https://maps.google.com/?q=Rabat,Maroc',
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
          {/* Contact Form */}
          <AnimatedElement animation="fadeInLeft">
            <div className="glass-card rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Envoyez-moi un message</h3>
              
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue-dark focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue-dark focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue-dark focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue-dark focus:border-transparent resize-none"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="px-6 py-2.5 bg-portfolio-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer
                </motion.button>
              </form>
            </div>
          </AnimatedElement>
          
          {/* Contact Info */}
          <AnimatedElement animation="fadeInRight">
            <div className="glass-card rounded-xl p-6 shadow-lg h-full">
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
                  href="/cv-ikram-bouhada.pdf" // Assurez-vous de placer votre CV dans le dossier public
                  download="CV-Ikram-Bouhada.pdf"
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
