import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = ({ options, className }) => {
  console.log('ParticlesComponent rendering with react-tsparticles 2.9.3');
  
  const particlesInit = useCallback(async (engine) => {
    console.log('🎉 particlesInit called!', engine);
    // Cargar el motor completo de tsparticles
    await loadFull(engine);
    console.log('✅ Engine loaded successfully');
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('🎯 particlesLoaded called!', container);
  }, []);

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'magenta', 
        opacity: 0.3,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className={className}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
