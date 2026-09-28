import React, { useEffect, useRef } from 'react';
import { useMotionPreference } from '../hooks/useMotionPreference';
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
  color: string;
}

// A quiet constellation behind the digital studio: few points, slow drift, no glow filter.
// It draws nothing at all under reduced motion, and stops when the tab is hidden.
const PALETTE = {
  corporate: { dots: ['45, 212, 168', '215, 181, 109', '244, 243, 239'], line: '45, 212, 168' },
  digital: { dots: ['103, 232, 249', '45, 212, 168', '215, 181, 109'], line: '103, 232, 249' },
} as const;

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mode }) => {
  const reducedMotion = useMotionPreference();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (reducedMotion) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }

    const palette = PALETTE[mode];
    let frame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const seed = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      const count = Math.min(Math.floor((width * height) / 26000), 34);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.4 + 0.8,
        color: palette.dots[Math.floor(Math.random() * palette.dots.length)],
      }));
    };

    const maxDist = 150;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${palette.line}, ${(1 - dist / maxDist) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.5)`;
        ctx.fill();
      }

      frame = requestAnimationFrame(render);
    };

    const stop = () => { if (frame) { cancelAnimationFrame(frame); frame = 0; } };
    const start = () => { if (!frame) frame = requestAnimationFrame(render); };
    const onVisibility = () => (document.hidden ? stop() : start());

    let resizeFrame = 0;
    const onResize = () => {
      if (resizeFrame) return;
      resizeFrame = requestAnimationFrame(() => { resizeFrame = 0; seed(); });
    };

    seed();
    start();
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [mode, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
    />
  );
};
