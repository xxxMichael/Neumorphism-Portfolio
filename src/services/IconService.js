// Responsabilidad: Gestión de iconos
class IconService {
  constructor() {
    this.iconProviders = new Map();
    this.registerDefaultProviders();
  }

  // Abierto para extensión, cerrado para modificación
  registerProvider(name, provider) {
    this.iconProviders.set(name, provider);
  }

  getIcon(iconName, provider = 'emoji') {
    const iconProvider = this.iconProviders.get(provider);
    if (!iconProvider) {
      throw new Error(`Icon provider '${provider}' not found`);
    }
    return iconProvider.getIcon(iconName);
  }

  registerDefaultProviders() {
    // Proveedor de emojis
    this.registerProvider('emoji', {
      getIcon: (name) => {
        const icons = {
          github: '🐙',
          linkedin: '💼',
          twitter: '🐦',
          email: '📧',
          instagram: '📷',
          download: '📄',
          contact: '💬',
          arrow: '→'
        };
        return icons[name] || '🔗';
      }
    });

    // Proveedor de SVG (extensible)
    this.registerProvider('svg', {
      getIcon: (name) => {
        // Aquí podrías cargar SVGs dinámicamente
        return `<svg>...</svg>`;
      }
    });
  }
}

export const iconService = new IconService();