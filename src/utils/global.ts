export const cameraDefault: [number, number, number] = [0, 0.5, 5]

export const portalPosition: [number, number, number] = [0, -0.6, -10]
export const portalRadius: number = 2

export const VENUSES = [
  { position: { x: -2, y: 2, z: 0 } },
  { position: { x: 2, y: 1, z: 2 } },
  { position: { x: 5, y: 4, z: -10 } },
]

export const DOM_VENUSES = [{ position: { x: -2, y: 0.5, z: 3 } }, { position: { x: 3, y: 1.2, z: 3 } }]

export const LAMPS = [
  /* { position: { x: -3, y: 2, z: 0 }, rotationY: Math.PI / 2 }, */
  { position: { x: 2.9, y: 1, z: 1.6 }, rotationY: -Math.PI / 3 },
]

//{ position: { x: 2, y: 2, z: 2 } }

export const defaultSkill: Skill = {
  name: 'test',
  displayName: 'test',
  description: 'Used it since college freshman year.\nLoved it since. ❤️',
  color: '#61dbfb',
  link: 'https://reactjs.org/',
  rating: 5,
  projects: [''],
}

export const SKILLS: Skill[] = [
  {
    name: 'react',
    displayName: 'React',
    description: 'Used it since college freshman year. Loved it since. ❤️',
    color: '#61dbfb',
    link: 'https://reactjs.org/',
    rating: 5,
    projects: [''],
  },
  {
    name: 'java',
    displayName: 'Java',
    description: "Not really fan of it, but if it's gets job done, I'll use it.",
    color: '#f89820',
    link: 'https://www.java.com/en/',
    rating: 2,
    projects: [''],
  },
  {
    name: 'rust',
    displayName: 'Rust',
    description: 'For some time if i write something that has to compile i choose rust.',
    color: '#dea584',
    link: 'https://www.rust-lang.org/',
    rating: 3,
    projects: [''],
  },
  {
    name: 'js',
    displayName: 'JavaScript',
    description: 'I use it for everything, but I prefer TypeScript.',
    color: '#f7df1e',
    link: 'https://www.javascript.com/',
    rating: 4,
    projects: [''],
  },
  {
    name: 'tailwind',
    displayName: 'Tailwind',
    description: 'Was sceptical before trying, now I love it.',
    color: '#38b2ac',
    link: 'https://tailwindcss.com/',
    rating: 4,
    projects: [''],
  },
  {
    name: 'next',
    displayName: 'Next.js',
    description: 'Best full-stack framework there is.',
    color: '#000000',
    link: 'https://nextjs.org/',
    rating: 5,
    customTexture: true,
    projects: [''],
  },
  {
    name: 'cpp',
    displayName: 'C++',
    description: 'Was there when I started programming, still there.',
    color: '#00599c',
    link: 'https://isocpp.org/',
    rating: 3,
    projects: [''],
  },
  {
    name: 'python',
    displayName: 'Python',
    description: 'I use it for some data science projects.',
    color: '#3776ab',
    link: 'https://www.python.org/',
    rating: 3,
    projects: [''],
  },
]

export const starsToSize = new Map<number, number>([
  [1, 0.3],
  [2, 0.4],
  [3, 0.5],
  [4, 0.6],
  [5, 0.7],
])

// pallete used in project
export const background = '#cbd5e1'
export const bodyLampColor = '#94a1b2'
export const primary = '#7F5AF0'
export const secondary = '#647DEE'
