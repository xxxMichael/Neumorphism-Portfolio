import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SimpleParticlesTest = () => {
  console.log("🔥 SimpleParticlesTest: Componente renderizado");

  const particlesInit = useCallback(async (engine) => {
    console.log("🔥 SimpleParticlesTest: particlesInit llamado", engine);
    await loadSlim(engine);
    console.log("🔥 SimpleParticlesTest: loadSlim completado");
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("🔥 SimpleParticlesTest: particlesLoaded llamado", container);
  }, []);

  const options = {
    particles: {
      number: {
        value: 5,
      },
      color: {
        value: "#ff0000",
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 30,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
  };

  console.log("🔥 SimpleParticlesTest: Renderizando con opciones:", options);

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      zIndex: 9999,
      background: 'rgba(255, 255, 0, 0.1)',
      border: '3px solid yellow'
    }}>
      <div style={{ color: 'red', fontSize: '20px', position: 'absolute', top: '50px', left: '50px', zIndex: 10000 }}>
        TEST PARTICLES AQUÍ
      </div>
      <Particles
        id="test-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default SimpleParticlesTest;
