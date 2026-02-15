import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const MouseGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[1] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-lime-400/30 -translate-x-1/2 -translate-y-1/2 mixed-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

    </>
  );
};

export default MouseGlow;
