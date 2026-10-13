import './App.css'
import LinkList from './components/LinkList.jsx'
import Profile from './components/Profile.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { links, profile } from './data/profile.js'
import { useTheme } from './hooks/useTheme.js'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="page">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <main className="card">
        <Profile profile={profile} theme={theme} />
        <LinkList links={links} />
      </main>

      <footer className="footer">made with React by {profile.name}</footer>
    </div>
  )
}

export default App
