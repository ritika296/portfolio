import { useState } from 'react';
import { branches } from '../data/toolkit';
import Reveal from '../components/Reveal';

const COLOR_CLASSES = {
  teal: {
    dot: 'bg-teal-500',
    text: 'text-teal-600 dark:text-teal-400',
    ring: 'ring-teal-500/50',
    bg: 'bg-teal-500/10',
  },
  indigo: {
    dot: 'bg-indigo-500',
    text: 'text-indigo-600 dark:text-indigo-400',
    ring: 'ring-indigo-500/50',
    bg: 'bg-indigo-500/10',
  },
  amber: {
    dot: 'bg-amber',
    text: 'text-amber',
    ring: 'ring-amber/50',
    bg: 'bg-amber/10',
  },
};

export default function Pipeline() {
  const [active, setActive] = useState(null); // { branchId, node }

  return (
    <section className="py-24 sm:py-28 border-y border-ink-900/[0.06] dark:border-ink-100/[0.06] bg-ink-900/[0.02] dark:bg-ink-100/[0.02]">
      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">My Analytics Toolkit</p>
          <h2 className="section-heading">From raw data to a decision.</h2>
          <p className="mt-3 text-ink-500 dark:text-ink-400 max-w-xl">
            Hover any tool to see how it fits into the way I work.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 relative">
            {/* Root node */}
            <div className="flex justify-center mb-3">
              <div className="card-surface px-6 py-3 ring-1 ring-teal-500/40 shadow-glow">
                <p className="font-display font-semibold text-ink-900 dark:text-ink-50">
                  Business Problem
                </p>
              </div>
            </div>
            <div className="mx-auto w-px h-8 bg-ink-900/15 dark:bg-ink-100/15" />

            {/* Branches */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-2">
              {branches.map((branch) => {
                const c = COLOR_CLASSES[branch.color];
                return (
                  <div key={branch.id} className="flex flex-col items-center">
                    <div className={`h-6 w-px ${c.dot} opacity-30`} />
                    <p className={`font-mono text-[11px] uppercase tracking-widest mb-3 ${c.text}`}>
                      {branch.label}
                    </p>
                    <div className="flex flex-col gap-2 w-full">
                      {branch.nodes.map((node) => {
                        const isActive =
                          active && active.branchId === branch.id && active.node.name === node.name;
                        return (
                          <button
                            key={node.name}
                            type="button"
                            onMouseEnter={() => setActive({ branchId: branch.id, node })}
                            onFocus={() => setActive({ branchId: branch.id, node })}
                            onMouseLeave={() => setActive(null)}
                            onBlur={() => setActive(null)}
                            className={`text-xs sm:text-[13px] text-left px-3 py-2 rounded-lg border transition-all duration-200 ${
                              isActive
                                ? `${c.bg} ring-1 ${c.ring} text-ink-900 dark:text-ink-50`
                                : 'border-ink-900/10 dark:border-ink-100/10 text-ink-600 dark:text-ink-300 hover:border-ink-900/20 dark:hover:border-ink-100/20'
                            }`}
                          >
                            {node.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="mt-8 min-h-[64px]">
              {active ? (
                <div className="card-surface p-5 max-w-md mx-auto text-center">
                  <p className="font-display font-semibold text-ink-900 dark:text-ink-50">
                    {active.node.name}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-ink-400 dark:text-ink-500 mt-1 mb-2">
                    Used for
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {active.node.uses.map((u) => (
                      <span
                        key={u}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-ink-900/5 dark:bg-ink-100/5 text-ink-600 dark:text-ink-300"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-xs text-ink-400 dark:text-ink-500 font-mono">
                  &larr; hover a tool
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
