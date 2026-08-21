import { useState } from 'react';
import { stackNodes } from '../data/skillNetwork';
import { skillGroups } from '../data/skills';
import Reveal from '../components/Reveal';

const RADIUS = 40; // percent

function nodePosition(index, total) {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
}

const BG_DOTS = [
  { x: 8, y: 15 }, { x: 92, y: 12 }, { x: 5, y: 85 }, { x: 95, y: 88 },
  { x: 50, y: 4 }, { x: 50, y: 96 }, { x: 12, y: 50 }, { x: 88, y: 50 },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  const activeNode = stackNodes.find((n) => n.name === active);
  const relatedNames = new Set(
    (activeNode?.related || []).map((r) => r.toLowerCase())
  );

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* heavier background: grid + drifting particles */}
      <div className="absolute inset-0 -z-10 bg-ink-950/[0.02] dark:bg-ink-950">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:36px_36px] opacity-60 dark:opacity-100 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_20%,transparent_80%)]" />
        {BG_DOTS.map((d, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-teal-500/40 animate-pulseSoft"
            style={{ left: `${d.x}%`, top: `${d.y}%`, animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </div>

      <div className="container-xl">
        <Reveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="section-heading">Ritika&rsquo;s analytics stack.</h2>
          <p className="mt-3 text-ink-500 dark:text-ink-400 max-w-xl">
            Hover a node to see how it connects to the rest of the stack &mdash; unrelated tools dim, related ones light up.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 relative w-full max-w-2xl mx-auto aspect-square">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {stackNodes.map((node, i) => {
                const { x, y } = nodePosition(i, stackNodes.length);
                const isActive = active === node.name;
                const isRelated = relatedNames.has(node.name.toLowerCase());
                const highlighted = isActive || isRelated;
                return (
                  <line
                    key={node.name}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    strokeWidth={highlighted ? 0.9 : 0.3}
                    strokeDasharray={isActive ? '0' : undefined}
                    className={
                      highlighted
                        ? 'stroke-teal-500 transition-all duration-300'
                        : active
                          ? 'stroke-ink-900/[0.04] dark:stroke-ink-100/[0.05] transition-all duration-300'
                          : 'stroke-ink-900/15 dark:stroke-ink-100/15 transition-all duration-300'
                    }
                  />
                );
              })}
            </svg>

            {/* Hub with animated ring */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" style={{ width: '42%' }}>
              <div className="absolute inset-0 rounded-full ring-2 ring-teal-500/30 animate-[spin_16s_linear_infinite]" />
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-teal-500/20 to-indigo-500/20 blur-xl" />
              <div className="relative card-surface ring-1 ring-teal-500/40 shadow-glow px-5 py-5 sm:px-7 sm:py-7 text-center rounded-full aspect-square flex items-center justify-center">
                <p className="font-display font-semibold text-xs sm:text-base text-ink-900 dark:text-ink-50 leading-tight">
                  Ritika&rsquo;s
                  <br />
                  Analytics
                  <br />
                  Stack
                </p>
              </div>
            </div>

            {/* Nodes */}
            {stackNodes.map((node, i) => {
              const { x, y } = nodePosition(i, stackNodes.length);
              const isActive = active === node.name;
              const isRelated = relatedNames.has(node.name.toLowerCase());
              const dimmed = active && !isActive && !isRelated;
              return (
                <button
                  key={node.name}
                  type="button"
                  onMouseEnter={() => setActive(node.name)}
                  onFocus={() => setActive(node.name)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[11px] sm:text-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-teal-500 text-ink-950 border-teal-500 scale-110 shadow-glow z-20'
                      : isRelated
                        ? 'bg-teal-500/15 border-teal-500/50 text-teal-700 dark:text-teal-300 scale-105'
                        : 'bg-ink-50 dark:bg-ink-900 border-ink-900/15 dark:border-ink-100/15 text-ink-700 dark:text-ink-200'
                  } ${dimmed ? 'opacity-30' : 'opacity-100'}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {node.name}
                </button>
              );
            })}
          </div>

          <div className="mt-8 min-h-[36px] text-center">
            {activeNode ? (
              <div className="flex flex-wrap justify-center gap-1.5">
                {activeNode.related.map((r) => (
                  <span
                    key={r}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300"
                  >
                    {r}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-ink-400 dark:text-ink-500 font-mono">
                &larr; hover a node to see related tools
              </p>
            )}
          </div>
        </Reveal>

        {/* Grouped list kept for scan-ability / accessibility */}
        <Reveal delay={150}>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <div key={group.category} className="card-surface p-6 h-full">
                <p className="font-display font-semibold text-ink-900 dark:text-ink-50">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-2.5 py-1.5 rounded-full bg-teal-500/[0.08] text-teal-700 dark:text-teal-300 border border-teal-500/15"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
