import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

const THEME_STYLES = {
  finance: 'from-teal-500/15 to-indigo-500/10',
  sql: 'from-amber/15 to-teal-500/10',
  excel: 'from-indigo-500/15 to-teal-500/10',
  sport: 'from-teal-500/15 to-amber/10',
  entertainment: 'from-indigo-500/20 to-ink-900/10',
  hospitality: 'from-amber/15 to-indigo-500/10',
  sales: 'from-teal-500/15 to-indigo-500/15',
  health: 'from-indigo-500/15 to-teal-500/10',
};

const MAX_TILT = 5; // degrees \u2014 kept small so it stays premium, not gimmicky

export default function ProjectCard({ project, onOpen, featured = false }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -MAX_TILT, ry: px * MAX_TILT });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: tilt.rx === 0 && tilt.ry === 0 ? 'transform 0.4s ease' : 'transform 0.08s ease-out',
      }}
      className={`group text-left card-surface overflow-hidden w-full relative hover:shadow-glow ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* animated glow border on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-teal-500/50" />

      <div
        className={`relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${
          THEME_STYLES[project.theme] || THEME_STYLES.finance
        }`}
      >
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:24px_24px] opacity-40" />
        <div className="absolute inset-0 opacity-70 dark:opacity-80 text-ink-900 dark:text-ink-50 p-2 transition-transform duration-500 group-hover:scale-[1.08]">
          <ProjectVisual theme={project.theme} />
        </div>
        {project.featured && (
          <span className="absolute top-4 left-5 font-mono text-[10px] tracking-widest uppercase text-teal-700 dark:text-teal-300 bg-white/70 dark:bg-ink-950/60 px-2.5 py-1 rounded-full">
            Featured Project
          </span>
        )}
        <h3 className="absolute bottom-5 left-5 font-display text-xl sm:text-2xl font-semibold text-ink-900 dark:text-ink-50 drop-shadow-sm">
          {project.title}
        </h3>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-mono uppercase tracking-wide text-teal-600 dark:text-teal-400">
          {project.subtitle}
        </p>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((t, i) => (
            <span
              key={t}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="font-mono text-[10px] px-2 py-1 rounded-full bg-ink-900/5 dark:bg-ink-100/5 text-ink-500 dark:text-ink-400 group-hover:bg-teal-500/10 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-ink-800 dark:text-ink-100 opacity-70 group-hover:opacity-100 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300">
          View Project <ArrowUpRight size={14} className="text-teal-500" />
        </span>
      </div>
    </button>
  );
}
