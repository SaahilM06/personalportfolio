import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  color?: string;
  particleCount?: number;
  speed?: number;
  opacity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  color = 'rgba(64, 169, 255, 0.4)',
  particleCount = 30,
  speed = 1,
  opacity = 0.3
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Tech symbols to float around
    const symbols = [
      '{ }', '[ ]', '()', '/>', '=>',
      '&&', '||', '++', '!=', '==',
      'AI', 'ML', '<>', '/*', '*/',
      '01', '10', '{}', '()', '[]'
    ];

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      symbol: string;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      targetOpacity: number;
      glowing: boolean;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 14 + 8;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.targetOpacity = this.opacity;
        this.glowing = false;
      }

      update(mouse: { x: number; y: number }) {
        // Update position
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Wrap around screen
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height + 50;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          this.glowing = true;
          this.targetOpacity = 0.8;
          const angle = Math.atan2(dy, dx);
          const force = (120 - distance) / 120;
          this.speedX -= Math.cos(angle) * force * 0.2;
          this.speedY -= Math.sin(angle) * force * 0.2;
        } else {
          this.glowing = false;
          this.targetOpacity = Math.random() * 0.3 + 0.1;
        }

        // Smooth opacity transition
        this.opacity += (this.targetOpacity - this.opacity) * 0.1;

        // Limit speed
        const maxSpeed = 2;
        const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        if (speed > maxSpeed) {
          this.speedX = (this.speedX / speed) * maxSpeed;
          this.speedY = (this.speedY / speed) * maxSpeed;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw glowing effect
        if (this.glowing) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 15;
        }

        ctx.font = `${this.size}px "Fira Code", monospace`;
        ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${this.opacity})`);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.symbol, 0, 0);
        
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse tracking
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mouse);
        particle.draw(ctx);
      });

      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = color.replace(/[\d.]+\)$/g, '0.1)');
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [color, particleCount, speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default ParticleBackground; 