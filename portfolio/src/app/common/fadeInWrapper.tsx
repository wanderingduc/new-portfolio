'use client'

import { useState, useEffect, useRef } from 'react';

const FadeInOnScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ 
children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (ref.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current!); // Stop observing once the element is in view
          }
        });
      }, {
        threshold: 0.1, // Adjust this value to control when the fade-in starts (0 for immediately as it enters the viewport, 1 for completely out of sight)
      });

      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transition: 
'opacity 750ms ease', background: 'transparent' }}>
      {children}
    </div>
  );
};

export default FadeInOnScrollWrapper;
