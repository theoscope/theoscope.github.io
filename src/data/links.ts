export interface Link {
  id: string
  name: string
  url: string
  description: string
  avatar: string
}

export const links: Link[] = [
  {
    id: 'link-1',
    name: 'Astro',
    url: 'https://astro.build/',
    description: 'The web framework that scales with you',
    avatar: 'https://astro.build/assets/press/logos/astro-logo-light-gradient.svg'
  },
  {
    id: 'link-2',
    name: 'GitHub',
    url: 'https://github.com/',
    description: 'Build software better, together',
    avatar: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    id: 'link-3',
    name: 'Vercel',
    url: 'https://vercel.com/',
    description: 'Develop. Preview. Ship.',
    avatar: 'https://vercel.com/favicon.ico'
  }
]
