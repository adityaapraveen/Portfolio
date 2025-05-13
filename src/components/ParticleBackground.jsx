import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Try to dynamically import the dependencies
let Particles;
let loadSlim;

// Fallback implementation using canvas
const CanvasBackground = () => {
  const canvasRef = React.useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        color: Math.random() > 0.5 ? '#1db954' : '#4d4d4e',
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      });
    }
    
    // Draw and animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      // Draw connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(61, 61, 61, ${1 - distance / 150})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="particle-canvas" />;
};

const ParticleBackground = () => {
  const [loading, setLoading] = useState(true);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  
  // Try to load tsparticles
  useEffect(() => {
    const loadDependencies = async () => {
      try {
        const particlesModule = await import('react-tsparticles');
        const slimModule = await import('tsparticles-slim');
        
        Particles = particlesModule.default;
        loadSlim = slimModule.loadSlim;
        
        setParticlesLoaded(true);
      } catch (error) {
        console.log('Failed to load particles dependencies:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadDependencies();
  }, []);
  
  const particlesInit = useCallback(async (engine) => {
    if (loadSlim) {
      await loadSlim(engine);
    }
  }, []);
  
  if (loading) {
    return null;
  }
  
  if (!particlesLoaded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="particle-container"
      >
        <CanvasBackground />
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="particle-container"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#050505",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#1db954", "#4d4d4e", "#ffffff"],
            },
            links: {
              color: "#3d3d3d",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
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
              value: 80,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
};

export default ParticleBackground; 