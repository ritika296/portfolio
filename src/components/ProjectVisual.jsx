// Lightweight, theme-specific SVG "dashboard preview" for each project card.
// These are stylized illustrations (not real screenshots \u2014 none were
// provided) meant to hint at each project's domain without fabricating data.

function FinanceVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <polyline
        points="10,110 45,90 80,100 115,60 150,75 185,40 220,55 255,25 290,35"
        fill="none"
        stroke="currentColor"
        className="text-teal-500"
        strokeWidth="2.5"
      />
      {[
        [10, 110], [45, 90], [80, 100], [115, 60], [150, 75], [185, 40], [220, 55], [255, 25], [290, 35],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" className="fill-teal-500" />
      ))}
      <rect x="10" y="118" width="24" height="14" rx="3" className="fill-indigo-500/30" />
      <rect x="42" y="112" width="24" height="20" rx="3" className="fill-indigo-500/40" />
      <rect x="74" y="120" width="24" height="12" rx="3" className="fill-indigo-500/30" />
    </svg>
  );
}

function SqlVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {[28, 62, 96, 130, 164, 198, 232, 266].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={140 - (30 + (i % 4) * 22)}
          width="18"
          height={30 + (i % 4) * 22}
          rx="3"
          className={i % 2 === 0 ? 'fill-amber/50' : 'fill-teal-500/50'}
        />
      ))}
    </svg>
  );
}

function ExcelVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={10 + col * 36}
            y={10 + row * 26}
            width="30"
            height="20"
            rx="2"
            className={(row + col) % 3 === 0 ? 'fill-indigo-500/40' : 'fill-ink-900/5 dark:fill-ink-100/10'}
          />
        ))
      )}
    </svg>
  );
}

function SportVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <ellipse cx="150" cy="70" rx="130" ry="55" fill="none" className="stroke-teal-500/30" strokeWidth="2" />
      <circle cx="150" cy="70" r="26" fill="none" className="stroke-amber/50" strokeWidth="2" />
      {[
        [60, 40], [95, 30], [150, 22], [205, 30], [240, 40], [70, 105], [230, 105], [150, 118], [110, 95], [190, 95], [150, 70],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" className={i % 2 === 0 ? 'fill-teal-500' : 'fill-amber'} />
      ))}
    </svg>
  );
}

function EntertainmentVisual() {
  const genres = [40, 25, 20, 15];
  const colors = ['fill-indigo-500', 'fill-teal-500', 'fill-amber', 'fill-ink-900/20 dark:fill-ink-100/20'];
  let offset = 0;
  const total = genres.reduce((a, b) => a + b, 0);
  const circumference = 2 * Math.PI * 45;

  return (
    <svg viewBox="0 0 140 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g transform="translate(70,70) rotate(-90)">
        {genres.map((g, i) => {
          const frac = g / total;
          const dash = frac * circumference;
          const circle = (
            <circle
              key={i}
              r="45"
              fill="none"
              strokeWidth="18"
              className={colors[i].replace('fill-', 'stroke-')}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
            />
          );
          offset += dash;
          return circle;
        })}
      </g>
    </svg>
  );
}

function HospitalityVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {/* KPI ring gauges */}
      {[
        { cx: 60, val: 0.72 },
        { cx: 150, val: 0.55 },
        { cx: 240, val: 0.83 },
      ].map((g, i) => {
        const r = 30;
        const circumference = 2 * Math.PI * r;
        const dash = g.val * circumference;
        return (
          <g key={i} transform={`translate(${g.cx},70) rotate(-90)`}>
            <circle r={r} fill="none" strokeWidth="8" className="stroke-ink-900/10 dark:stroke-ink-100/10" />
            <circle
              r={r}
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              className={i === 1 ? 'stroke-amber' : 'stroke-teal-500'}
              strokeDasharray={`${dash} ${circumference - dash}`}
            />
          </g>
        );
      })}
    </svg>
  );
}

function SalesVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {[22, 46, 34, 58, 40, 66, 50, 72, 44, 80].map((h, i) => (
        <rect
          key={i}
          x={10 + i * 28}
          y={130 - h}
          width="16"
          height={h}
          rx="2"
          className={i % 3 === 0 ? 'fill-amber/60' : 'fill-teal-500/50'}
        />
      ))}
      <polyline
        points="18,105 46,85 74,95 102,70 130,90 158,60 186,75 214,50 242,66 270,45"
        fill="none"
        stroke="currentColor"
        className="text-indigo-500"
        strokeWidth="2"
      />
    </svg>
  );
}

function HealthVisual() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <polyline
        points="10,70 60,70 75,40 90,100 105,20 120,70 300,70"
        fill="none"
        stroke="currentColor"
        className="text-teal-500"
        strokeWidth="2.5"
      />
      {[
        { cx: 90, cy: 40, r: 22, val: 0.68 },
        { cx: 210, cy: 100, r: 22, val: 0.41 },
      ].map((g, i) => {
        const circumference = 2 * Math.PI * g.r;
        const dash = g.val * circumference;
        return (
          <g key={i} transform={`translate(${g.cx},${g.cy}) rotate(-90)`}>
            <circle r={g.r} fill="none" strokeWidth="6" className="stroke-ink-900/10 dark:stroke-ink-100/10" />
            <circle
              r={g.r}
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              className="stroke-indigo-500"
              strokeDasharray={`${dash} ${circumference - dash}`}
            />
          </g>
        );
      })}
    </svg>
  );
}

const VISUALS = {
  finance: FinanceVisual,
  sql: SqlVisual,
  excel: ExcelVisual,
  sport: SportVisual,
  entertainment: EntertainmentVisual,
  hospitality: HospitalityVisual,
  sales: SalesVisual,
  health: HealthVisual,
};

export default function ProjectVisual({ theme }) {
  const Visual = VISUALS[theme] || FinanceVisual;
  return <Visual />;
}
