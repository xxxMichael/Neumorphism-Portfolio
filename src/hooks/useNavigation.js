import { useState, useEffect } from 'react';
import { navigationService } from '../services/NavigationService.js';

export const useNavigation = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    // Cargar items de navegación
    setNavigationItems(navigationService.getNavigationItems());

    // Listener para detectar sección actual
    const handleScroll = () => {
      setCurrentSection(navigationService.getCurrentSection());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    navigationService.scrollToSection(sectionId);
  };

  const changeLanguage = (language) => {
    navigationService.setLanguage(language);
    setNavigationItems(navigationService.getNavigationItems());
  };

  return {
    navigationItems,
    currentSection,
    scrollToSection,
    changeLanguage
  };
};