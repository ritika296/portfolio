import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile } from '../data/profile';
import { useParallax } from '../hooks/useParallax';
import RotatingWord from '../components/RotatingWord';
import HeroPortrait from '../components/HeroPortrait';

const NODES = [
  { x: 80, y: 90, r: 3.5, delay: '0s', depth: 0.4 },
  { x: 220, y: 60, r: 2.5, delay: '1.2s', depth: 0.7 },
  { x: 340, y: 140, r: 4, delay: '0.6s', depth: 0.3 },
  { x: 470, y: 70, r: 3, delay: '1.8s', depth: 0.6 },
  { x: 560, y: 160, r: 2.5, delay: '0.3s', depth: 0.5 },
  { x: 650, y: 100, r: 3.5, delay: '2.1s', depth: 0.8 },
  { x: 160, y: 200, r: 2.5, delay: '1.5s', depth: 0.4 },
  { x: 400, y: 220, r: 3, delay: '0.9s', depth: 0.6 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 6], [2, 7], [6, 7],
];

const ROTATING_WORDS = ['Insights', 'Decisions', 'Business Value', 'Better Products'];

export default function Hero() {
  const { ref, offset } = useParallax();

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden"
    >
      {/* background grid + data graph */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />
        <svg
          className="absolute right-0 top-8 w-[760px] max-w-none opacity-60 dark:opacity-80 hidden lg:block transition-transform duration-300 ease-out"
          style={{ transform: `translate(${offset.x * -14}px, ${offset.y * -10}px)` }}
          viewBox="0 0 720 280"
          fill="none"
          aria-hidden="true"
        >
          {EDGES.map(([a, b], i) => {
            const n1 = NODES[a];
            const n2 = NODES[b];
            return (
              <line
                key={i}
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="currentColor"
                className="text-ink-900/10 dark:text-ink-100/10"
                strokeWidth="1"
              />
            );
          })}
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x + offset.x * n.depth * -18}
              cy={n.y + offset.y * n.depth * -18}
              r={n.r}
              className={`animate-pulseSoft ${i % 2 === 0 ? 'fill-teal-500' : 'fill-indigo-500'}`}
              style={{ animationDelay: n.delay }}
            />
          ))}
        </svg>
      </div>

      <div className="container-xl">
        <div className="lg:hidden mb-10 max-w-[220px]">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-card">
            <img
              src={`${import.meta.env.BASE_URL}${profile.heroPhoto}`}
              alt={`${profile.name}, ${profile.role}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <p className="eyebrow mb-5">Data &amp; Business Analytics</p>

          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-ink-900 dark:text-ink-50">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-medium text-ink-600 dark:text-ink-300">
            Data &amp; Business Analytics &middot; Data-Driven Problem Solver
          </p>

          <p className="mt-5 font-display text-2xl sm:text-3xl font-semibold text-ink-800 dark:text-ink-100">
            I turn data into <RotatingWord words={ROTATING_WORDS} />
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-500 dark:text-ink-400 leading-relaxed">
            I combine business thinking, analytical problem-solving and technology to transform
            complex data into meaningful insights.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Explore My Work <ArrowUpRight size={16} />
            </a>
            <a href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} target="_blank" rel="noreferrer" className="btn-secondary">
              View Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-semibold text-ink-700 dark:text-ink-200 hover:text-teal-500 transition-colors"
            >
              Let&rsquo;s Connect &rarr;
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-300 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-2.5 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-300 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="p-2.5 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-300 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroPortrait offset={offset} />
        </div>
      </div>
      </div>
    </section>
  );
}
