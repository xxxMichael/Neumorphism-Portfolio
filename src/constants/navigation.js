// Responsabilidad: Solo configuración de navegación
export const NAVIGATION_CONFIG = {
  sections: [

    { 
      id: 'about',
      route: '#about',
      order: 2
    },
    { 
      id: 'skills',
      route: '#skills',
      order: 3
    },
    { 
      id: 'projects',
      route: '#projects',
      order: 4
    },
    { 
      id: 'experience',
      route: '#experience',
      order: 5
    },
    { 
      id: 'contact',
      route: '#contact',
      order: 6
    }
  ],
  scrollOffset: 80,
  scrollBehavior: 'smooth'
};