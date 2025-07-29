
export const heroOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 20,
      },
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },
    opacity: {
      value: 0.8,
    },
  },
  detectRetina: true,
};
