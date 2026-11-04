
'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    let animationId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Center dot moves instantly
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      // Outer ring follows smoothly
      ringX += (mouseX - ringX) * 0.10;
      ringY += (mouseY - ringY) * 0.10;

      ring.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0)`;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', moveCursor);

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
