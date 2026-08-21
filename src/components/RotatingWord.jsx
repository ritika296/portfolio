import { useEffect, useState } from 'react';

export default function RotatingWord({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom min-w-[9ch]">
      {words.map((word, i) => (
        <span
          key={word}
          className="absolute inset-0 transition-all duration-500 text-teal-500"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? 'translateY(0)' : 'translateY(8px)',
          }}
          aria-hidden={i !== index}
        >
          {word}
        </span>
      ))}
      <span className="opacity-0" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}
