import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Reveal from '../components/Reveal';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-ink-900/[0.02] dark:bg-ink-100/[0.02]">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Featured Projects</p>
          <h2 className="section-heading">Analysis you can click into.</h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 70} className={project.featured ? 'sm:col-span-2' : ''}>
              <ProjectCard project={project} onOpen={setActive} featured={project.featured} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
