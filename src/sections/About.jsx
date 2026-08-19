import { profile } from '../data/profile';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-xl grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] text-ink-900 dark:text-ink-50">
            {profile.aboutHeading}
          </h2>
        </Reveal>

        <div className="space-y-5">
          {profile.aboutBody.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
