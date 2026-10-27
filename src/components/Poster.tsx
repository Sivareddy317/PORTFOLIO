import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'docs' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${214 + i * 22} ${54 + i * 14})`}>
                <rect width="96" height="124" rx="8" strokeWidth="2" strokeOpacity={0.4 + i * 0.25} fill="#00000055" />
                {[0, 1, 2, 3].map((l) => (
                  <line key={l} x1="14" x2={l === 3 ? 50 : 82} y1={26 + l * 16} y2={26 + l * 16} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.45" />
                ))}
              </g>
            ))}
            <path d="M190 210 h120" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M296 200 l14 10 l-14 10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'chart' && (
          <g fill="none" stroke={a}>
            {[40, 70, 52, 96, 120, 88, 140].map((h, i) => (
              <rect key={i} x={204 + i * 24} y={190 - h} width="16" height={h} rx="3" strokeWidth="1.6" fill={a} fillOpacity={0.12 + i * 0.05} strokeOpacity="0.7" />
            ))}
            <path d="M200 150 L228 128 L252 140 L276 100 L300 84 L324 108 L348 62" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="196" x2="372" y1="194" y2="194" strokeWidth="1.5" strokeOpacity="0.5" />
          </g>
        )}
        {project.motif === 'chat' && (
          <g fill="none" stroke={a}>
            <path d="M196 60 h120 a12 12 0 0 1 12 12 v40 a12 12 0 0 1 -12 12 h-84 l-22 18 v-18 h-14 a12 12 0 0 1 -12 -12 v-40 a12 12 0 0 1 12 -12 z" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="212" x2="300" y1="84" y2="84" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
            <line x1="212" x2="270" y1="100" y2="100" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.35" />
            <path d="M360 160 h-110 a12 12 0 0 0 -12 12 v34 a12 12 0 0 0 12 12 h70 l26 16 v-16 h14 a12 12 0 0 0 12 -12 v-34 a12 12 0 0 0 -12 -12 z" strokeWidth="2" strokeOpacity="0.6" fill={a} fillOpacity="0.12" />
            <circle cx="276" cy="190" r="4" fill={a} stroke="none" />
            <circle cx="294" cy="190" r="4" fill={a} stroke="none" fillOpacity="0.7" />
            <circle cx="312" cy="190" r="4" fill={a} stroke="none" fillOpacity="0.4" />
          </g>
        )}
        {project.motif === 'vision' && (
          <g fill="none" stroke={a}>
            <rect x="196" y="52" width="170" height="130" rx="10" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M196 78 v-26 h26 M340 52 h26 v26 M366 156 v26 h-26 M222 182 h-26 v-26" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" />
            <rect x="238" y="84" width="86" height="64" rx="6" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="281" cy="110" r="14" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="238" x2="324" y1="122" y2="122" strokeWidth="1.5" strokeOpacity="0.6" />
            <rect x="252" y="198" width="58" height="18" rx="4" strokeWidth="2" strokeOpacity="0.7" />
          </g>
        )}
        {project.motif === 'qr' && (
          <g fill="none" stroke={a}>
            <rect x="214" y="48" width="130" height="130" rx="10" strokeWidth="2" strokeOpacity="0.7" />
            {[[226, 60], [296, 60], [226, 130]].map(([x, y], i) => (
              <g key={i}>
                <rect x={x} y={y} width="36" height="36" rx="4" strokeWidth="3" strokeOpacity="0.9" />
                <rect x={x + 11} y={y + 11} width="14" height="14" rx="2" fill={a} stroke="none" fillOpacity="0.8" />
              </g>
            ))}
            {[[274, 130], [292, 148], [310, 130], [328, 156], [274, 160], [310, 166]].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="11" height="11" rx="2" fill={a} stroke="none" fillOpacity={0.35 + (i % 3) * 0.2} />
            ))}
            <path d="M200 206 h162" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M348 198 l14 8 l-14 8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'health' && (
          <g fill="none" stroke={a}>
            <rect x="206" y="52" width="104" height="138" rx="10" strokeWidth="2" strokeOpacity="0.6" />
            <path d="M258 82 v36 M240 100 h36" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.9" />
            {[0, 1, 2].map((i) => (
              <line key={i} x1="222" x2={i === 2 ? 258 : 294} y1={138 + i * 14} y2={138 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
            ))}
            <path d="M196 214 h30 l10 -22 l16 40 l14 -30 l8 12 h96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" />
            <path d="M338 70 c0 -10 14 -14 20 -4 c6 -10 20 -6 20 4 c0 14 -20 26 -20 26 s-20 -12 -20 -26 z" strokeWidth="2" strokeOpacity="0.7" />
          </g>
        )}
        {project.motif === 'receipt' && (
          <g fill="none" stroke={a}>
            <path d="M216 46 h112 v150 l-14 -10 l-14 10 l-14 -10 l-14 10 l-14 -10 l-14 10 l-14 -10 z" strokeWidth="2" strokeOpacity="0.85" fill="#00000055" />
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <line x1="232" x2="290" y1={76 + i * 22} y2={76 + i * 22} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
                <line x1="304" x2="314" y1={76 + i * 22} y2={76 + i * 22} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.7" />
              </g>
            ))}
            <line x1="232" x2="314" y1="164" y2="164" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4" />
            <rect x="340" y="120" width="40" height="76" rx="5" strokeWidth="2" strokeOpacity="0.6" />
            <line x1="340" x2="380" y1="146" y2="146" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="340" x2="380" y1="170" y2="170" strokeWidth="1.5" strokeOpacity="0.5" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
