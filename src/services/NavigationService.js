import { NAVIGATION_CONFIG } from '../constants/navigation.js';
import { UI_LABELS } from '../constants/ui.js';

// Responsabilidad: Lógica de navegación
export class NavigationService {
  constructor(config = NAVIGATION_CONFIG, labels = UI_LABELS) {
    this.config = config;
    this.labels = labels;
    this.currentLanguage = 'es';
  }

  // Principio de inversión de dependencias
  setLanguage(language) {
    this.currentLanguage = language;
  }

  getNavigationItems() {
    return this.config.sections
      .sort((a, b) => a.order - b.order)
      .map(section => ({
        id: section.id,
        label: this.labels[this.currentLanguage]?.navigation[section.id] || section.id,
        href: section.route,
        isHome: section.isHome || false
      }));
  }

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Section '${sectionId}' not found`);
      return;
    }

    const elementPosition = element.offsetTop - this.config.scrollOffset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: this.config.scrollBehavior
    });
  }

  getCurrentSection() {
    const sections = this.config.sections.map(s => s.id);
    const scrollPosition = window.scrollY + this.config.scrollOffset;

    for (const sectionId of sections.reverse()) {
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPosition) {
        return sectionId;
      }
    }
    
    return sections[0];
  }
}

export const navigationService = new NavigationService();