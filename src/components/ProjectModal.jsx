import { useEffect, useState } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { profile } from '../data/profile';
import { techNotes } from '../data/techNotes';
import ProjectVisual from './ProjectVisual';

function TechBadge({ tool }) {
  const [show, setShow] = useState(false);
  const note = techNotes[tool];
  return (
    <span
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={note ? 0 : -1}
    >
      <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink-900/5 dark:bg-ink-100/5 text-ink-600 dark:text-ink-300 cursor-default">
        {tool}
      </span>
      {show && note && (
        <span className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[180px] text-[11px] text-center px-2.5 py-1.5 rounded-lg bg-ink-950 text-ink-50 dark:bg-ink-50 dark:text-ink-900 shadow-card">
          {note}
        </span>
      )}
    </span>
  );
}

export default function ProjectModal({ project, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-3xl h-full sm:h-auto sm:max-h-[88vh] overflow-y-auto card-surface sm:rounded-3xl bg-ink-50 dark:bg-ink-900 shadow-card">
        {/* sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-9 py-4 bg-ink-50/90 dark:bg-ink-900/90 backdrop-blur-md border-b border-ink-900/[0.06] dark:border-ink-100/[0.06]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-500">
            Case Study
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-300 hover:text-teal-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 sm:px-9 py-8">
          {/* HERO */}
          <p className="eyebrow">{project.subtitle}</p>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-ink-50">
            {project.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed max-w-xl">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <TechBadge key={t} tool={t} />
            ))}
          </div>

          <div
            className={`mt-6 relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-br ${
              {
                finance: 'from-teal-500/15 to-indigo-500/10',
                sql: 'from-amber/15 to-teal-500/10',
                excel: 'from-indigo-500/15 to-teal-500/10',
                sport: 'from-teal-500/15 to-amber/10',
                entertainment: 'from-indigo-500/20 to-ink-900/10',
                hospitality: 'from-amber/15 to-indigo-500/10',
                sales: 'from-teal-500/15 to-indigo-500/15',
                health: 'from-indigo-500/15 to-teal-500/10',
              }[project.theme]
            }`}
          >
            <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:24px_24px] opacity-40" />
            <div className="absolute inset-0 p-4 text-ink-900 dark:text-ink-50 opacity-80">
              <ProjectVisual theme={project.theme} />
            </div>
          </div>

          {/* SECTIONS */}
          <div className="mt-8 space-y-6">
            <section>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-1.5">
                The Real-World Problem
              </p>
              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-1.5">
                The Data
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200 bg-ink-900/5 dark:bg-ink-100/5 px-3 py-2 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                {project.dataType}
              </div>
            </section>

            <section>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-2">
                The Analytics
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.analysis.map((a) => (
                  <div
                    key={a}
                    className="text-sm text-ink-700 dark:text-ink-200 bg-ink-900/[0.03] dark:bg-ink-100/[0.04] border border-ink-900/[0.06] dark:border-ink-100/[0.06] rounded-lg px-3 py-2.5"
                  >
                    {a}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-1.5">
                The Approach
              </p>
              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 leading-relaxed">
                {project.approach}
              </p>
            </section>
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

        {/* footer navigation */}
        <div className="sticky bottom-0 flex items-center justify-between gap-3 px-6 sm:px-9 py-4 bg-ink-50/90 dark:bg-ink-900/90 backdrop-blur-md border-t border-ink-900/[0.06] dark:border-ink-100/[0.06]">
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center gap-1 text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-teal-500 transition-colors"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-teal-500 transition-colors"
          >
            Back to Projects
          </button>
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-1 text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-teal-500 transition-colors"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
