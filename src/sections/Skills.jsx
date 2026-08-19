import { skillGroups } from '../data/skills';
import Reveal from '../components/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Skills Matrix</p>
          <h2 className="section-heading">The toolkit, organized.</h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="card-surface p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <p className="font-display font-semibold text-ink-900 dark:text-ink-50">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-2.5 py-1.5 rounded-full bg-teal-500/[0.08] text-teal-700 dark:text-teal-300 border border-teal-500/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
