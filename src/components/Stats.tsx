import { useEffect, useState, useRef } from 'react';
import { stats } from '@/data/clubData';
import { useReveal } from '@/hooks/useReveal';
import ffcLogo from '@/assets/ffc.jpg';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(value);
          };
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise opacity-5" />

      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-center gap-3">
          <img
            src={ffcLogo}
            alt="Friends Football Club logo"
            className="h-36 w-36 rounded-full border-2 border-accent/60 object-cover shadow-xl shadow-accent/20 animate-crest motion-reduce:animate-none sm:h-40 sm:w-40"
          />
          <p className="flex items-center gap-3 font-display text-lg uppercase tracking-[0.24em] text-accent sm:text-xl">
            <span className="h-px w-8 bg-accent/60 sm:w-12" aria-hidden="true" />
            Friends Forever
            <span className="h-px w-8 bg-accent/60 sm:w-12" aria-hidden="true" />
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl sm:text-6xl text-gradient-gold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-brand-300 uppercase tracking-[0.15em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
