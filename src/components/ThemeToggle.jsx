import { Bow, Skull } from './Icons.jsx'

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={onToggle}
    >
      <span className="theme-toggle-thumb">
        {isDark ? (
          <Skull className="theme-toggle-icon" />
        ) : (
          <Bow className="theme-toggle-icon" />
        )}
      </span>
    </button>
  )
}

export default ThemeToggle
