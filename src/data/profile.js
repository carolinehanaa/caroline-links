const publicFile = (name) => `${import.meta.env.BASE_URL}${name}`

export const profile = {
  name: 'Caroline Hana',
  tagline: 'welcome to my little corner of the internet',
  bio: 'Developer and digital creator who loves bringing ideas to life.',
  image: publicFile('avatar.jpg'),
  imageAlt: 'Caroline Hana smiling, with long curly brown hair',
}

export const links = [
  {
    title: 'My Portfolio',
    description: 'A little collection of my work',
    url: 'https://carolcodes.dev',
    icon: 'portfolio',
  },
  {
    title: 'LinkedIn',
    description: 'Let’s connect',
    url: 'https://www.linkedin.com/in/caroline-hana/',
    icon: 'linkedin',
  },
  {
    title: 'GitHub',
    description: 'Explore my code and projects',
    url: 'https://github.com/carolinehanaa',
    icon: 'github',
  },
  {
    title: 'My Résumé',
    description: 'My experience and skills',
    url: publicFile('resume.pdf'),
    icon: 'resume',
  },
]
