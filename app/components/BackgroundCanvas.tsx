'use client';

import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      const scale = window.devicePixelRatio || 1;
      
      canvas.width = innerWidth * scale;
      canvas.height = innerHeight * scale;
      
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      ctx.scale(scale, scale);
    };

    resizeCanvas();

    const drawBackground = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      // Create a dark gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, h);
      bgGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      bgGradient.addColorStop(1, 'rgba(20, 20, 20, 1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);
      
      // Define multiple waves with different properties
      const waves = [
        // Purple waves
        { 
          amplitude: h * 0.2, 
          frequency: 0.002, 
          speed: 0.001, 
          color: 'rgba(147, 51, 234, 0.4)',
          phase: 0 
        },
        { 
          amplitude: h * 0.15, 
          frequency: 0.003, 
          speed: 0.0015, 
          color: 'rgba(168, 85, 247, 0.3)',
          phase: Math.PI / 4 
        },
        // Pink waves
        { 
          amplitude: h * 0.18, 
          frequency: 0.0025, 
          speed: 0.002, 
          color: 'rgba(236, 72, 153, 0.3)',
          phase: Math.PI / 2 
        },
        { 
          amplitude: h * 0.12, 
          frequency: 0.004, 
          speed: 0.0018, 
          color: 'rgba(244, 114, 182, 0.2)',
          phase: Math.PI / 3 
        },
        // Cyan accent waves
        { 
          amplitude: h * 0.1, 
          frequency: 0.005, 
          speed: 0.002, 
          color: 'rgba(34, 211, 238, 0.15)',
          phase: Math.PI 
        },
        // Gold accent waves
        { 
          amplitude: h * 0.08, 
          frequency: 0.006, 
          speed: 0.0025, 
          color: 'rgba(234, 179, 8, 0.1)',
          phase: Math.PI * 1.5 
        }
      ];

      // Draw each wave
      waves.forEach(wave => {
        ctx.beginPath();
        
        for (let x = 0; x <= w; x += 1) {
          const y = h * 0.5 + 
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * 
            wave.amplitude * 
            (1 + Math.sin(time * 0.0005) * 0.1); // Add subtle amplitude variation
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Add gradient to each wave
        const gradient = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.7);
        const baseColor = wave.color.replace(/[\d.]+\)$/g, '');
        gradient.addColorStop(0, baseColor + '0)');
        gradient.addColorStop(0.5, wave.color);
        gradient.addColorStop(1, baseColor + '0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = h * 0.1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      });

      // Add subtle noise overlay
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 5;
        data[i] = data[i] + noise;
        data[i + 1] = data[i + 1] + noise;
        data[i + 2] = data[i + 2] + noise;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      time += 16;
      drawBackground(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-background"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;