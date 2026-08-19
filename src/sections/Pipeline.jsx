import { pipeline } from '../data/profile';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Pipeline() {
  return (
    <section className="py-24 sm:py-28 border-y border-ink-900/[0.06] dark:border-ink-100/[0.06] bg-ink-900/[0.02] dark:bg-ink-100/[0.02]">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">My Analytics Toolkit</p>
          <h2 className="section-heading">From raw data to a decision.</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="font-mono text-xs sm:text-sm px-4 py-2.5 rounded-full border border-ink-900/10 dark:border-ink-100/10 bg-white dark:bg-ink-900/60 text-ink-700 dark:text-ink-200 whitespace-nowrap">
                  {step}
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight size={16} className="text-teal-500 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
