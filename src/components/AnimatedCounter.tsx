import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  delay?: number;
  className?: string;
}

const AnimatedCounter = ({ end, delay = 0, className = '' }: AnimatedCounterProps) => {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        count.set(end);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, end, delay, count]);

  return (
    <motion.div
      className={className}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
    >
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};

export default AnimatedCounter; 