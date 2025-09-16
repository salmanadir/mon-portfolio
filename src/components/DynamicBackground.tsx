
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DynamicBackgroundProps {
  className?: string;
}

export const DynamicBackground = ({ className = '' }: DynamicBackgroundProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate a hue shift based on scroll position and mouse movement
  const hueShift = (scrollPosition / 20) % 360;
  const mouseInfluence = mousePosition.x * 20;
  
  const backgroundStyle = {
    backgroundImage: `linear-gradient(${135 + mousePosition.y * 30}deg, 
      hsl(${200 + hueShift * 0.1 + mouseInfluence}, 100%, 98%) 0%, 
      hsl(${210 + hueShift * 0.2 + mouseInfluence}, 100%, 92%) 25%,
      hsl(${220 + hueShift * 0.3 + mouseInfluence}, 100%, 85%) 50%,
      hsl(${230 + hueShift * 0.4 + mouseInfluence}, 97%, 75%) 75%,
      hsl(${240 + hueShift * 0.5 + mouseInfluence}, 94%, 68%) 100%
    )`,
    backgroundAttachment: 'fixed',
    backgroundSize: '400% 400%',
  };
  
  return (
    <>
      <motion.div 
        ref={bgRef}
        className={`fixed inset-0 -z-10 ${className}`} 
        style={backgroundStyle}
        animate={{
          backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      />

    </>
  );
};
