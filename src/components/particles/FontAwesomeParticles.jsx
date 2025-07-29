import { useEffect, useRef } from 'react';

const FontAwesomeParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("🎯 FontAwesome Particles: Iniciando partículas con iconos");
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("❌ FontAwesome Particles: No se encontró el canvas");
      return;
    }

    const ctx = canvas.getContext('2d');
    
    // Ajustar el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log("✅ FontAwesome Particles: Canvas configurado", canvas.width, canvas.height);

    // Iconos de Font Awesome (códigos Unicode)
    const techIcons = [
      { char: '\uf3d3', name: 'Python' },      // Python
      { char: '\uf4e4', name: 'Node.js' },     // Node.js x
      { char: '\uf41b', name: 'JavaScript' },  // JavaScript x
      { char: '\uf09b', name: 'GitHub' },      // GitHub x  
      { char: '\uf3d4', name: 'NPM' },         // PHP  
      { char: '\uf13c', name: 'HTML5' },       // HTML5 x 
      { char: '\uf38b', name: 'React' },       // Reactx 
      { char: '\uf457', name: 'PHP' },        // CSS3 x
    ];

    // Colores para los iconos
    const colors = [
      '#61dafb', // React blue
      '#f7df1e', // JavaScript yellow
      '#3776ab', // Python blue
      '#68217a', // C# purple
      '#f1502f', // Git red
      '#e34f26', // HTML5 orange
      '#1572b6', // CSS3 blue
      '#68a063', // Node.js green
    ];

    // Definir zonas laterales más amplias (25% izquierda y 25% derecha, dejando 50% centro libre)
    const leftZone = canvas.width * 0.25;  // 25% izquierdo
    const rightZoneStart = canvas.width * 0.75; // 25% derecho

    // Crear partículas con distribución en bordes laterales
    const particles = [];
    for (let i = 0; i < 30; i++) { // Más partículas para el espacio ampliado
      const icon = techIcons[Math.floor(Math.random() * techIcons.length)];
      
      let x;
      if (Math.random() < 0.5) {
        // Zona izquierda (0 a 25% del ancho)
        x = Math.random() * leftZone;
      } else {
        // Zona derecha (75% a 100% del ancho)
        x = rightZoneStart + Math.random() * (canvas.width - rightZoneStart);
      }
      
      particles.push({
        x: x,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8, // Velocidad como en original: speed: 0.8
        vy: (Math.random() - 0.5) * 0.8,
        char: icon.char,
        name: icon.name,
        color: '#5d6d7e', // Color gris como en el original
        size: Math.random() * 10 + 25, // Tamaño entre 25-35px como en original
        opacity: Math.random() * 0.2 + 0.4, // Opacidad entre 0.4-0.6 como en original
        rotation: 0, // Sin rotación inicial
        rotationSpeed: 0, // Sin rotación
        leftZone: leftZone,
        rightZoneStart: rightZoneStart
      });
    }

    console.log("✅ FontAwesome Particles: Partículas creadas", particles.length, "- Distribuidas en bordes laterales");
    console.log("📏 Canvas dimensions:", canvas.width, "x", canvas.height);
    console.log("🎯 Zonas - Izquierda: 0 a", leftZone, "- Derecha:", rightZoneStart, "a", canvas.width);

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Sin rotación para mantener configuración original

        // Rebotar en los bordes verticales
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        // Lógica especial para bordes horizontales - mantener en zonas laterales
        if (particle.x < 0) {
          particle.vx *= -1;
        } else if (particle.x > canvas.width) {
          particle.vx *= -1;
        } else if (particle.x > particle.leftZone && particle.x < particle.rightZoneStart) {
          // Si la partícula se mete en la zona central, la rebotamos hacia su zona original
          if (particle.vx > 0) {
            // Se movía hacia la derecha, rebotarla hacia la izquierda
            particle.vx *= -1;
            particle.x = particle.leftZone - 5; // Colocarla en el borde de la zona izquierda
          } else {
            // Se movía hacia la izquierda, rebotarla hacia la derecha
            particle.vx *= -1;
            particle.x = particle.rightZoneStart + 5; // Colocarla en el borde de la zona derecha
          }
        }

        // Dibujar iconos de tecnologías
        ctx.save();
        ctx.translate(particle.x, particle.y);
        // Sin rotación para mantener iconos estables
        ctx.font = `${particle.size}px "Font Awesome 6 Brands"`;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity; // Aplicar opacidad
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Dibujar el icono
        ctx.fillText(particle.char, 0, 0);
        
        ctx.restore();
        
      });

      requestAnimationFrame(animate);
    };

    animate();
    console.log("✅ FontAwesome Particles: Animación iniciada");

    // Manejar resize - recalcular zonas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalcular zonas para las partículas existentes
      const leftZone = canvas.width * 0.25;
      const rightZoneStart = canvas.width * 0.75;
      
      particles.forEach(particle => {
        particle.leftZone = leftZone;
        particle.rightZoneStart = rightZoneStart;
        
        // Reposicionar partículas que queden fuera de las nuevas zonas
        if (particle.x > leftZone && particle.x < rightZoneStart) {
          if (particle.x < canvas.width * 0.5) {
            particle.x = Math.random() * leftZone;
          } else {
            particle.x = rightZoneStart + Math.random() * (canvas.width - rightZoneStart);
          }
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div style={{ 
      position: 'fixed', // Cambio a fixed para que cubra toda la pantalla
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: 1, // Z-index bajo para que esté detrás del header
      pointerEvents: 'none'
    }}>
      <canvas 
        ref={canvasRef}
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

export default FontAwesomeParticles;
