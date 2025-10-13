import { useState } from 'react';
import { AnimatedElement } from './AnimatedElement';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, Award, Calendar, MapPin } from 'lucide-react';

export const CertificatesSection = () => {
  const [previewCertificate, setPreviewCertificate] = useState<number | null>(null);
  
  const certificates = [
    {
      title: "Artificial Intelligence Analyst Certificate",
      issuer: "IBM",
      date: "Mars 2025",
      location: "En ligne",
      image: "./certificates/ai-ibm.jpg", // Image de prévisualisation
      file: "./certificates/ai-ibm.pdf",
      type: "IA", // Fichier PDF à télécharger
 
    },
    {
      title: "Programming with Java",
      issuer: "Amazon",
      date: "Septembre 2025",
      location: "Coursera",
      image: "./certificates/java-amazon.jpg",
      file: "./certificates/java-amazon.pdf",
      type: "Java",

    },
    {
      title: "Agile Project Management",
      issuer: "Google",
      date: "Octobre 2025",
      location: "Coursera",
      image: "./certificates/agile.jpg", // Image de prévisualisation
      file: "./certificates/agile.pdf",
      type: "IA", // Fichier PDF à télécharger
 
    },
]

  const handleDownload = (file: string, title: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPreview = (index: number) => {
    setPreviewCertificate(index);
  };

  const closePreview = () => {
    setPreviewCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-portfolio-blue-dark">Mes</span> Certificats
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue-dark mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une collection de certifications obtenues pour approfondir mes compétences techniques et professionnelles.
          </p>
        </AnimatedElement>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <AnimatedElement 
              key={index}
              animation="fadeIn"
              delay={index * 0.1}
            >
              <motion.div 
                className="glass-card rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Image de prévisualisation */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas
                      e.currentTarget.src = `https://via.placeholder.com/400x300/0288D1/FFFFFF?text=${certificate.type}`;
                    }}
                  />
                  
                  

                  {/* Overlay avec boutons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <motion.button
                      className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                      onClick={() => openPreview(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="bg-portfolio-blue-dark/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-portfolio-blue-dark transition-colors"
                      onClick={() => handleDownload(certificate.file, certificate.title)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <Award className="w-5 h-5 text-portfolio-blue-dark flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">{certificate.title}</h3>
                  </div>
                  
                  <p className="text-portfolio-blue-dark font-medium mb-3">{certificate.issuer}</p>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{certificate.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{certificate.location}</span>
                    </div>
                  </div>
                  
                  
                  {/* Boutons d'action */}
                  <div className="flex gap-2">
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-portfolio-blue-dark text-portfolio-blue-dark rounded-lg hover:bg-portfolio-blue-dark hover:text-white transition-colors text-sm"
                      onClick={() => openPreview(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4" />
                      Aperçu
                    </motion.button>
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-portfolio-blue-dark text-white rounded-lg hover:bg-portfolio-blue-dark/80 transition-colors text-sm"
                      onClick={() => handleDownload(certificate.file, certificate.title)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      Télécharger
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* Modal de prévisualisation */}
      <AnimatePresence>
        {previewCertificate !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-xl font-semibold">{certificates[previewCertificate].title}</h3>
                  <p className="text-gray-600">{certificates[previewCertificate].issuer}</p>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    className="p-2 text-portfolio-blue-dark hover:bg-portfolio-blue-light/20 rounded-lg transition-colors"
                    onClick={() => handleDownload(certificates[previewCertificate].file, certificates[previewCertificate].title)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={closePreview}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-4 max-h-[calc(90vh-120px)] overflow-y-auto">
                <img 
                  src={certificates[previewCertificate].image} 
                  alt={certificates[previewCertificate].title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/800x600/0288D1/FFFFFF?text=Certificat+${certificates[previewCertificate].type}`;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};