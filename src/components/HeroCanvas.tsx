import React, { useEffect, useRef } from 'react';
import { DualEngineMode } from '../types';

interface HeroCanvasProps {
  mode: DualEngineMode;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    // Particle count & generation — richer network for corporate
    const particleCount = Math.min(
      Math.floor((width * height) / (mode === 'corporate' ? 9000 : 12000)), 
      mode === 'corporate' ? 100 : 75
    );
    const particles: Particle[] = [];

    const getColors = () => {
      if (mode === 'corporate') {
        return [
          'rgba(16, 185, 129, ', // emerald
          'rgba(52, 211, 153, ', // mint
          'rgba(212, 175, 55, ', // gold
          'rgba(180, 160, 90, ', // warm gold
          'rgba(255, 255, 255, '  // pure light
        ];
      } else {
        return [
          'rgba(6, 182, 212, ',  // cyan
          'rgba(99, 102, 241, ', // indigo
          'rgba(139, 92, 246, ', // purple
          'rgba(56, 189, 248, '  // sky
        ];
      }
    };

    const colors = getColors();

    for (let i = 0; i < particleCount; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const baseRadius = mode === 'corporate' 
        ? Math.random() * 2.5 + 1.2 
        : Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (mode === 'corporate' ? 0.35 : 0.45),
        vy: (Math.random() - 0.5) * (mode === 'corporate' ? 0.35 : 0.45),
        radius: baseRadius,
        baseRadius,
        color: colorBase,
        alpha: Math.random() * 0.6 + 0.25
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections — wider range and richer lines for corporate
      const maxDist = mode === 'corporate' ? 170 : 135;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (mode === 'corporate' ? 0.22 : 0.18);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = mode === 'corporate' 
              ? `rgba(16, 185, 129, ${lineAlpha})` 
              : `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = mode === 'corporate' ? 1.2 : 1;
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse physics interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius);
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2.5;
          p.y -= Math.sin(angle) * force * 2.5;
          p.radius = p.baseRadius + force * 2.5;
        } else {
          p.radius = Math.max(p.baseRadius, p.radius - 0.05);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = mode === 'corporate' ? '#10B981' : '#06B6D4';
        ctx.shadowBlur = mode === 'corporate' ? 12 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
      style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
    />
  );
};
