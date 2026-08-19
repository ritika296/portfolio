import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile } from '../data/profile';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n\u2014\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-xl grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-heading">Let&rsquo;s turn data into decisions.</h2>
          <p className="mt-4 text-ink-600 dark:text-ink-300 max-w-md">
            Have a project, opportunity, or idea? Let&rsquo;s connect.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-ink-700 dark:text-ink-200 hover:text-teal-500 transition-colors"
            >
              <span className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10">
                <Mail size={15} />
              </span>
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink-700 dark:text-ink-200 hover:text-teal-500 transition-colors"
            >
              <span className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10">
                <LinkedinIcon size={15} />
              </span>
              Connect on LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink-700 dark:text-ink-200 hover:text-teal-500 transition-colors"
            >
              <span className="p-2 rounded-full border border-ink-900/10 dark:border-ink-100/10">
                <GithubIcon size={15} />
              </span>
              github.com/ritika296
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8 space-y-4">
            <div>
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg bg-ink-900/[0.03] dark:bg-ink-100/[0.05] border border-ink-900/10 dark:border-ink-100/10 px-4 py-2.5 text-sm text-ink-900 dark:text-ink-50 outline-none focus:border-teal-500/60"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg bg-ink-900/[0.03] dark:bg-ink-100/[0.05] border border-ink-900/10 dark:border-ink-100/10 px-4 py-2.5 text-sm text-ink-900 dark:text-ink-50 outline-none focus:border-teal-500/60"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg bg-ink-900/[0.03] dark:bg-ink-100/[0.05] border border-ink-900/10 dark:border-ink-100/10 px-4 py-2.5 text-sm text-ink-900 dark:text-ink-50 outline-none focus:border-teal-500/60 resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Send Message <Send size={15} />
            </button>
            <p className="text-xs text-ink-400 dark:text-ink-500 text-center">
              Opens your email client &mdash; no data is stored or sent to a server.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
