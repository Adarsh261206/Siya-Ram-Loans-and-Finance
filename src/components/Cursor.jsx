import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.45 });
  const y = useSpring(my, { stiffness: 300, damping: 30, mass: 0.45 });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return undefined;

    setEnabled(true);

    const handleMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const handleOver = (e) => {
      const target = e.target;
      const interactive =
        target instanceof Element &&
        !!target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      setHovering(interactive);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{ x, y }}
    >
      <motion.div
        className="h-9 w-9 rounded-full border border-gold-400/80 mix-blend-difference"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: hovering ? 2 : 1,
          opacity: hovering ? 0.95 : 0.55,
          backgroundColor: hovering ? 'rgba(212,162,31,0.12)' : 'rgba(212,162,31,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
