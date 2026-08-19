import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { profile } from '../data/profile';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => { if (!project) return undefined; const onKey = (e) => e.key === 'Escape' && onClose(); document.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; }; }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto card-surface bg-ink-50 dark:bg-ink-900 p-6 sm:p-9 shadow-card">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-300 hover:text-teal-500 transition-colors"
        >
          <X size={18} />
        </button>

        <p className="eyebrow">{project.subtitle}</p>
        <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-ink-50">
          {project.title}
        </h3>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-1.5">
              Problem
            </p>
            <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-1.5">
              Approach
            </p>
            <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed">{project.approach}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-2">
              Analysis
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {project.analysis.map((a) => (
                <li key={a} className="text-sm text-ink-700 dark:text-ink-200 flex gap-2">
                  <span className="mt-1.5 block w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-2">
              Technology
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink-900/5 dark:bg-ink-100/5 text-ink-600 dark:text-ink-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <GithubIcon size={15} /> View on GitHub
          </a>
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
              Live Demo <ArrowUpRight size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
