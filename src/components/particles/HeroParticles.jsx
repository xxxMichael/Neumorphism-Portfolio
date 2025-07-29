
import ParticlesComponent from "./ParticlesComponent";
import FontAwesomeParticles from "./FontAwesomeParticles";
import { heroOptions } from "./particlesOptions";
import "./HeroParticles.css";

const HeroParticles = () => {
  console.log("🎨 HeroParticles: Componente renderizado");
  console.log("🎨 HeroParticles: heroOptions:", heroOptions);
  
  return (
    <div className="hero-particles-container" style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      {/* Partículas movidas a App.jsx - Contenedor vacío */}
      {/* 
      <FontAwesomeParticles />
      */}
      {/* Temporalmente desactivado tsparticles - usando Canvas directo
      <ParticlesComponent
        id="hero-particles"
        className="hero-particles"
        particlesOptions={heroOptions}
      />
      */}
    </div>
  );
};

export default HeroParticles;
