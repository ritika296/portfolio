// An abstract geometric "mark" standing in for a personal avatar \u2014
// deliberately not a depiction of a face or likeness, just a clean
// data-themed monogram panel with a small orbit of tool chips.
import { profile } from '../data/profile';

const CHIPS = ['Python', 'SQL', 'Power BI', 'Tableau', 'PostgreSQL'];

export default function ProfileMark({ style }) {
  return (
    <div className="relative w-full max-w-sm mx-auto" style={style}>
      <div className="relative aspect-[4/5] card-surface overflow-hidden ring-1 ring-teal-500/20 shadow-glow">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:20px_20px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-indigo-500/10" />

        <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center shadow-glow">
            <span className="font-display text-3xl sm:text-4xl font-bold text-white">RP</span>
          </div>
          <div className="text-center">
            <p className="font-display font-semibold text-ink-900 dark:text-ink-50">{profile.name}</p>
            <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">{profile.role}</p>
          </div>
        </div>

        <div className="absolute bottom-4 inset-x-4 flex flex-wrap justify-center gap-1.5">
          {CHIPS.map((c) => (
            <span
              key={c}
              className="font-mono text-[10px] px-2 py-1 rounded-full bg-white/70 dark:bg-ink-950/60 backdrop-blur-sm text-ink-700 dark:text-ink-200"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Floating data card */}
      <div className="hidden sm:block absolute -left-8 -bottom-6 card-surface px-4 py-3 shadow-card">
        <p className="font-mono text-[10px] text-ink-500 dark:text-ink-400 text-center leading-relaxed">
          DATA
          <br />
          <span className="text-teal-500">&darr;</span>
          <br />
          INSIGHT
          <br />
          <span className="text-teal-500">&darr;</span>
          <br />
          DECISION
        </p>
      </div>
    </div>
  );
}
