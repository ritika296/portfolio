import { ArrowUpRight } from 'lucide-react';

const THEME_STYLES = {
  finance: 'from-teal-500/15 to-indigo-500/10',
  sql: 'from-amber-500/15 to-teal-500/10',
  excel: 'from-indigo-500/15 to-teal-500/10',
  sport: 'from-teal-500/15 to-amber-500/10',
  entertainment: 'from-indigo-500/20 to-ink-900/10',
};

export default function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={`group text-left card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow w-full ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`relative h-36 sm:h-44 bg-gradient-to-br ${
          THEME_STYLES[project.theme] || THEME_STYLES.finance
        } flex items-end p-5`}
      >
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:24px_24px] opacity-40" />
        {project.featured && (
          <span className="absolute top-4 left-5 font-mono text-[10px] tracking-widest uppercase text-teal-700 dark:text-teal-300 bg-white/70 dark:bg-ink-950/60 px-2.5 py-1 rounded-full">
            Featured Project
          </span>
        )}
        <h3 className="relative font-display text-xl sm:text-2xl font-semibold text-ink-900 dark:text-ink-50">
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
          {project.tools.slice(0, 4).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-1 rounded-full bg-ink-900/5 dark:bg-ink-100/5 text-ink-500 dark:text-ink-400"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink-800 dark:text-ink-100 group-hover:text-teal-500 transition-colors">
          View details <ArrowUpRight size={14} />
        </span>
      </div>
    </button>
  );
}
