// Interactive hero portrait: the user's real photo inside a premium
// glass frame with parallax tilt and a soft glow.
import { profile } from '../data/profile';

export default function HeroPortrait({ offset = { x: 0, y: 0 } }) {
  return (
    <div
      className="relative w-full max-w-sm mx-auto transition-transform duration-300 ease-out"
      style={{ transform: `translate(${offset.x * 6}px, ${offset.y * 6}px)` }}
    >
      {/* connecting data nodes / lines behind the frame */}
      <svg
        className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] -z-10 opacity-70"
        viewBox="0 0 300 340"
        aria-hidden="true"
      >
        <line x1="20" y1="60" x2="90" y2="110" className="stroke-teal-500/25" strokeWidth="1" />
        <line x1="280" y1="90" x2="210" y2="130" className="stroke-indigo-500/25" strokeWidth="1" />
        <line x1="30" y1="280" x2="95" y2="230" className="stroke-teal-500/25" strokeWidth="1" />
        <line x1="270" y1="260" x2="205" y2="220" className="stroke-indigo-500/25" strokeWidth="1" />
        {[
          [20, 60], [280, 90], [30, 280], [270, 260], [150, 15], [150, 325],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="2.5"
            className={`animate-pulseSoft ${i % 2 === 0 ? 'fill-teal-500' : 'fill-indigo-500'}`}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>

      {/* glow */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-500/20 to-indigo-500/20 blur-2xl -z-10" />

      {/* glass frame + photo */}
      <div className="group relative aspect-[4/5] rounded-[2.25rem] overflow-hidden ring-1 ring-white/20 dark:ring-white/10 shadow-glow [perspective:1000px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/30" />
        <img
          src={`${import.meta.env.BASE_URL}${profile.heroPhoto}`}
          alt={`${profile.name}, ${profile.role}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        {/* glass sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] ring-1 ring-inset ring-white/10" />
      </div>

    </div>
  );
}
