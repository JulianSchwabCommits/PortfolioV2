import { useEffect, useState } from 'react';

export default function MouseShadow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Set position with a subtle delay using animation frames
      requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    // Hide shadow when mouse leaves window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    // Show shadow when mouse enters window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div 
      className="pointer-events-none fixed z-[5] transition-all duration-300 ease-out"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 0.15 : 0,
      }}
    >
      <div className="bg-white rounded-full w-24 h-24 blur-2xl"></div>
    </div>
  );
}
