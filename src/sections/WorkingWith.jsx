import { workingWith } from '../data/profile';
import Reveal from '../components/Reveal';

export default function WorkingWith() {
  return (
    <section className="py-16 sm:py-20 border-y border-ink-900/[0.06] dark:border-ink-100/[0.06]">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">What I Work With</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {workingWith.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="card-surface p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group">
                <p className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 group-hover:text-teal-500 transition-colors">
                  {item.label}
                </p>
                <p className="mt-2 font-mono text-sm text-ink-500 dark:text-ink-400">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
