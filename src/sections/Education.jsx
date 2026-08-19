import { education } from '../data/skills';
import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="section-heading">Foundations.</h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={i * 90}>
              <div className="card-surface p-6 sm:p-7 h-full flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="font-display font-semibold text-ink-900 dark:text-ink-50">{ed.degree}</p>
                  <p className="text-sm text-ink-600 dark:text-ink-300 mt-1">{ed.school}</p>
                  <p className="font-mono text-xs text-ink-500 dark:text-ink-400 mt-2">{ed.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
