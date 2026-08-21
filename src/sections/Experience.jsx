import { experience } from '../data/experience';
import Reveal from '../components/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Career Journey</p>
          <h2 className="section-heading">Where the analytical mindset was built.</h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-ink-900/10 dark:bg-ink-100/10" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 90} className="relative pl-8 sm:pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-4 ${
                    job.featured
                      ? 'bg-teal-500 border-teal-500/25'
                      : 'bg-ink-50 dark:bg-ink-950 border-ink-900/20 dark:border-ink-100/20'
                  }`}
                />
                <span className="absolute -left-1 sm:-left-1 top-8 font-mono text-[10px] tracking-widest text-ink-400 dark:text-ink-500 hidden sm:block">
                  {job.year}
                </span>

                <div
                  className={`card-surface p-6 sm:p-8 ${
                    job.featured ? 'ring-1 ring-teal-500/40 shadow-glow' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                        {job.role}
                        {job.featured && (
                          <span className="ml-2 align-middle text-[10px] font-mono tracking-widest uppercase text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-1 rounded-full">
                            Latest
                          </span>
                        )}
                      </h3>
                      <p className="text-ink-500 dark:text-ink-400 text-sm mt-1">
                        {job.company} &middot; {job.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink-500 dark:text-ink-400 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                    {job.summary}
                  </p>

                  {job.story && (
                    <p className="mt-3 text-sm italic text-teal-700 dark:text-teal-300 border-l-2 border-teal-500/40 pl-3">
                      {job.story}
                    </p>
                  )}

                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="text-sm text-ink-600 dark:text-ink-300 flex gap-2">
                        <span className="text-teal-500 mt-1.5 block w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tools.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink-900/5 dark:bg-ink-100/5 text-ink-600 dark:text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
