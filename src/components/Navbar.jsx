import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-50/85 dark:bg-ink-950/85 backdrop-blur-md border-b border-ink-900/[0.06] dark:border-ink-100/[0.06] py-3'
          : 'py-5'
      }`}
    >
      <nav className="container-xl flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-display font-semibold text-lg tracking-tight text-ink-900 dark:text-ink-50"
        >
          Ritika<span className="text-teal-500">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-700 dark:text-ink-200 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-500 text-ink-950 font-semibold px-4 py-2 text-sm hover:bg-teal-400 transition-colors"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-700 dark:text-ink-200"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10 text-ink-700 dark:text-ink-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden container-xl mt-4 pb-4">
          <ul className="flex flex-col gap-1 card-surface p-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-500/10'
                      : 'text-ink-700 dark:text-ink-200 hover:bg-ink-900/5 dark:hover:bg-ink-100/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
                download
                className="mt-1 flex items-center justify-center gap-1.5 rounded-full bg-teal-500 text-ink-950 font-semibold px-4 py-2.5 text-sm"
              >
                Download Resume <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
