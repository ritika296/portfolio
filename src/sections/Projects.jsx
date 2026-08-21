import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Reveal from '../components/Reveal';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const active = activeIndex === null ? null : projects[activeIndex];
  const goPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
  const goNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % projects.length));

  return (
    <section id="projects" className="py-24 sm:py-32 bg-ink-900/[0.02] dark:bg-ink-100/[0.02]">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Featured Projects</p>
          <h2 className="section-heading">Analysis you can click into.</h2>
          <p className="mt-3 text-ink-500 dark:text-ink-400 max-w-xl">
            Eight projects across finance, retail, sport, entertainment and healthcare \u2014 built with SQL, Python, Power BI, Tableau and Excel.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60} className={project.featured ? 'sm:col-span-2' : ''}>
              <ProjectCard project={project} onOpen={() => setActiveIndex(i)} featured={project.featured} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={active}
        onClose={() => setActiveIndex(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
