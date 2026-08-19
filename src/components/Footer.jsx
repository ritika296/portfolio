import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-ink-900/[0.06] dark:border-ink-100/[0.06]">
      <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-500 dark:text-ink-400">
          &copy; {new Date().getFullYear()} {profile.name}. Built with data, not noise.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-500 dark:text-ink-400 hover:text-teal-500 transition-colors">
            <GithubIcon size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-500 dark:text-ink-400 hover:text-teal-500 transition-colors">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-500 dark:text-ink-400 hover:text-teal-500 transition-colors">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
