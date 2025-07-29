import { useEffect, useRef } from 'react';

const ManualParticlesTest = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("🎯 ManualParticlesTest: Iniciando partículas manuales");
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("❌ ManualParticlesTest: No se encontró el canvas");
      return;
    }

    const ctx = canvas.getContext('2d');
    
    // Ajustar el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log("✅ ManualParticlesTest: Canvas configurado", canvas.width, canvas.height);

    // Crear partículas
    const particles = [];
    for (let i = 0; i < 10; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 20 + 10,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`
      });
    }

    console.log("✅ ManualParticlesTest: Partículas creadas", particles.length);

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    console.log("✅ ManualParticlesTest: Animación iniciada");

  }, []);

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      zIndex: 9999,
      background: 'rgba(0, 255, 0, 0.1)',
      border: '3px solid green'
    }}>
      <div style={{ color: 'white', fontSize: '20px', position: 'absolute', top: '20px', left: '20px', zIndex: 10000, background: 'rgba(0,0,0,0.7)', padding: '10px' }}>
        PARTÍCULAS MANUALES - DEBERÍAS VER CÍRCULOS DE COLORES MOVIÉNDOSE
      </div>
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

export default ManualParticlesTest;
