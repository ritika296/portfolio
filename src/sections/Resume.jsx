import { Download, Eye } from 'lucide-react';
import { profile } from '../data/profile';
import Reveal from '../components/Reveal';

export default function Resume() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-xl">
        <Reveal>
          <div className="card-surface p-8 sm:p-12 text-center flex flex-col items-center bg-gradient-to-br from-teal-500/[0.06] to-indigo-500/[0.04]">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-ink-50">
              Want the complete picture?
            </h2>
            <p className="mt-3 max-w-md text-ink-600 dark:text-ink-300">
              Download my resume and explore my experience, skills and projects in full.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={profile.resumeFile} download className="btn-primary">
                Download Resume <Download size={16} />
              </a>
              <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn-secondary">
                View Resume <Eye size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
