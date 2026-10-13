import { useState } from 'react'
import { Bow, Skull } from './Icons.jsx'

function getGreeting(hour) {
  if (hour < 12) return 'good morning'
  if (hour < 18) return 'good afternoon'
  return 'good evening'
}

function Profile({ profile, theme }) {
  const [greeting] = useState(() => getGreeting(new Date().getHours()))

  return (
    <header className="profile">
      <div className="avatar">
        <img
          className="avatar-image"
          src={profile.image}
          alt={profile.imageAlt}
          width="128"
          height="128"
        />
        {theme === 'dark' ? (
          <Skull className="avatar-motif" />
        ) : (
          <Bow className="avatar-motif" />
        )}
      </div>

      <p className="tagline">
        {greeting} 🌷 {profile.tagline}
      </p>
      <h1 className="name">{profile.name}</h1>
      <p className="bio">{profile.bio}</p>
    </header>
  )
}

export default Profile
