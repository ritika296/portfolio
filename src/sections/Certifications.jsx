import { certifications } from '../data/skills';
import { Award } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-ink-900/[0.02] dark:bg-ink-100/[0.02]">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Certifications</p>
          <h2 className="section-heading">Verified learning.</h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 6) * 60}>
              <div className="card-surface p-5 h-full flex gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-ink-50 leading-snug">{cert.name}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
