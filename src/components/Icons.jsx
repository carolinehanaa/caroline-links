const linkIcons = {
  portfolio: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 9.5h18" />
      <path d="m9.5 15 2-2 2 2 2-2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 11v5.5" />
      <path d="M8 7.6v.1" />
      <path d="M12 16.5V11" />
      <path d="M12 13.2c0-1.4 1-2.2 2.1-2.2s1.9.8 1.9 2.2v3.3" />
    </>
  ),
  github: (
    <>
      <path d="m8.5 8-4 4 4 4" />
      <path d="m15.5 8 4 4-4 4" />
      <path d="m13.5 5.5-3 13" />
    </>
  ),
  resume: (
    <>
      <path d="M7 3h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12.5h6" />
      <path d="M9 16.5h4" />
    </>
  ),
}

export function LinkIcon({ name }) {
  return (
    <svg
      className="link-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {linkIcons[name]}
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg
      className="link-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

export function Bow({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 32" aria-hidden="true">
      <g
        fill="var(--motif)"
        stroke="var(--motif-outline)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      >
        <path d="M24 16C17 5 6 2 4 9c-2 7 1 17 8 16 5-1 9-5 12-9Z" />
        <path d="M24 16c7-11 18-14 20-7 2 7-1 17-8 16-5-1-9-5-12-9Z" />
        <ellipse cx="24" cy="16" rx="5" ry="6" />
      </g>
    </svg>
  )
}

export function Skull({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 4C9 4 4 9 4 15c0 4 2 7 5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3c3-1 5-4 5-8 0-6-5-11-12-11Z"
        fill="var(--motif)"
        stroke="var(--motif-outline)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <g fill="var(--motif-outline)">
        <ellipse cx="11.5" cy="15" rx="2.5" ry="3" />
        <ellipse cx="20.5" cy="15" rx="2.5" ry="3" />
        <path d="m16 19-1.5 2.5h3Z" />
      </g>
    </svg>
  )
}
