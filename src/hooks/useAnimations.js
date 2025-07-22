import { useEffect, useRef, useState } from 'react';

export const useAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
};

export const useSmoothScroll = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del header fijo
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};

export const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  const reset = () => {
    setDisplayText('');
    setCurrentIndex(0);
  };

  return { displayText, reset, isComplete: currentIndex >= text.length };
};