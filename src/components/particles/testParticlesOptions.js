// Configuración simple para testear las partículas
export const testOptions = {
  autoPlay: true,
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 20,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 3, max: 8 },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
};
