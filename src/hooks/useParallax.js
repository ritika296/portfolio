import { useEffect, useRef, useState } from 'react';

// Tracks normalized mouse position (-1 to 1) relative to a container,
// for a subtle parallax/mouse-follow effect. Disabled on touch devices
// and when the user prefers reduced motion.
export function useParallax() {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReduced || isTouch) return undefined;

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x: x * 2, y: y * 2 });
    };

    const handleLeave = () => setOffset({ x: 0, y: 0 });

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return { ref, offset };
}
