import { ArrowIcon, LinkIcon } from './Icons.jsx'

function LinkList({ links }) {
  return (
    <nav aria-label="My links">
      <ul className="links">
        {links.map((link) => (
          <li key={link.url}>
            <a
              className="link-card"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon name={link.icon} />
              <span className="link-text">
                <span className="link-title">{link.title}</span>
                {link.description && (
                  <span className="link-description">{link.description}</span>
                )}
              </span>
              <ArrowIcon />
              <span className="visually-hidden">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LinkList
