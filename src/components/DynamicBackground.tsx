
import { useEffect, useState } from 'react';

interface DynamicBackgroundProps {
  className?: string;
}

export const DynamicBackground = ({ className = '' }: DynamicBackgroundProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate a hue shift based on scroll position
  const hueShift = (scrollPosition / 20) % 360;
  
  const backgroundStyle = {
    backgroundImage: `linear-gradient(135deg, 
      hsl(${200 + hueShift * 0.1}, 100%, 98%) 0%, 
      hsl(${210 + hueShift * 0.2}, 100%, 92%) 25%,
      hsl(${220 + hueShift * 0.3}, 100%, 85%) 50%,
      hsl(${230 + hueShift * 0.4}, 97%, 75%) 75%,
      hsl(${240 + hueShift * 0.5}, 94%, 68%) 100%
    )`,
    backgroundAttachment: 'fixed',
    backgroundSize: '400% 400%',
  };
  
  return (
    <div 
      className={`fixed inset-0 -z-10 ${className}`} 
      style={backgroundStyle}
    />
  );
};
