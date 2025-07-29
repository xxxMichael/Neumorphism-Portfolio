import { useEffect, useRef } from 'react';

const CustomParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("🌟 CustomParticles: Iniciando sistema de partículas personalizado");
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Iconos de tecnología (usando texto)
    const techIcons = ['⚛️', '🔥', '⚡', '💻', '🚀', '⭐', '💡', '🎯', '🔧', '📱'];
    
    // Crear partículas
    const particles = [];
    const numParticles = 15;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 20 + 15,
        opacity: Math.random() * 0.5 + 0.3,
        icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        rotation: 0,
        color: `hsl(${Math.random() * 60 + 200}, 40%, 60%)` // Tonos azules/morados
      });
    }

    console.log("✅ CustomParticles: Partículas creadas", particles.length);

    // Variables para interacción con mouse
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    // Event listeners para mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      setTimeout(() => { isMouseMoving = false; }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Efecto de repulsión del mouse
        if (isMouseMoving) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.5;
            particle.vy += (dy / distance) * force * 0.5;
          }
        }

        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Fricción suave
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Guardar contexto para transformaciones
        ctx.save();
        
        // Aplicar opacidad
        ctx.globalAlpha = particle.opacity;
        
        // Mover al centro de la partícula y rotar
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Dibujar el icono
        ctx.font = `${particle.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = particle.color;
        ctx.fillText(particle.icon, 0, 0);
        
        // Efecto de brillo sutil
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fillText(particle.icon, 0, 0);
        
        // Restaurar contexto
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();
    console.log("✅ CustomParticles: Animación iniciada");

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default CustomParticles;
