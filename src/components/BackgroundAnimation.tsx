'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingDot = ({ delay = 0, size = 20, initialX = '0%', initialY = '0%', color = '#FFB7C5' }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: initialX,
      top: initialY,
      backgroundColor: color,
    }}
    animate={{
      x: ['-10%', '110%', '-10%'],
      y: ['0%', '5%', '0%'],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor: '#FFF44F' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingDot size={6} initialX="10%" initialY="10%" delay={0} color="#E63946" />
      <FloatingDot size={6} initialX="30%" initialY="20%" delay={0.5} color="#E63946" />
      <FloatingDot size={6} initialX="50%" initialY="30%" delay={1} color="#E63946" />
      <FloatingDot size={6} initialX="70%" initialY="40%" delay={1.5} color="#E63946" />
      <FloatingDot size={6} initialX="90%" initialY="50%" delay={2} color="#E63946" />
      <FloatingDot size={6} initialX="10%" initialY="60%" delay={2.5} color="#E63946" />
      <FloatingDot size={6} initialX="30%" initialY="70%" delay={3} color="#E63946" />
      <FloatingDot size={6} initialX="50%" initialY="80%" delay={3.5} color="#E63946" />
      <FloatingDot size={6} initialX="70%" initialY="90%" delay={4} color="#E63946" />
      <FloatingDot size={6} initialX="90%" initialY="100%" delay={4.5} color="#E63946" />
    </motion.div>
  );
};

export default BackgroundAnimation;
