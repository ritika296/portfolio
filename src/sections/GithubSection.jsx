import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import Reveal from '../components/Reveal';

export default function GithubSection() {
  return (
    <section className="py-24 sm:py-28 border-y border-ink-900/[0.06] dark:border-ink-100/[0.06]">
      <div className="container-xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">On GitHub</p>
              <h2 className="section-heading">Where the code lives.</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon size={15} /> github.com/ritika296
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group block card-surface p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display font-semibold text-sm text-ink-900 dark:text-ink-50 group-hover:text-teal-500 transition-colors">
                    {p.title}
                  </p>
                  <ArrowUpRight size={14} className="text-ink-400 dark:text-ink-500 shrink-0 mt-0.5" />
                </div>
                <p className="mt-2 text-xs text-ink-500 dark:text-ink-400 leading-relaxed line-clamp-2">
                  {p.description}
                </p>
                <p className="mt-3 font-mono text-[11px] text-teal-600 dark:text-teal-400">{p.tools[0]}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
