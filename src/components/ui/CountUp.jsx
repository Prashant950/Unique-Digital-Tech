import { useState, useEffect, useRef } from 'react';

export default function CountUp({
  value,
  duration = 2000,
  className = '',
}) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse target number, prefix, suffix, and decimal count from value string like "99.9%", "150+", "5+"
  const match = String(value).match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : '';
  const numericStr = match ? match[2] : '0';
  const suffix = match ? match[3] : '';
  const targetNumber = parseFloat(numericStr);
  const decimals = numericStr.includes('.') ? numericStr.split('.')[1].length : 0;

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo function for smooth, premium deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = easeProgress * targetNumber;

      const formatted = currentNumber.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

      setDisplayValue(formatted);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        const finalFormatted = targetNumber.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        setDisplayValue(finalFormatted);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hasAnimated, targetNumber, duration, decimals]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
