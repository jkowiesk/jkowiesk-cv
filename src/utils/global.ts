import { Skill } from './types'

export const cameraDefault: [number, number, number] = [0, 0.5, 5]

export const portalPosition: [number, number, number] = [0, -0.6, -10]
export const portalRadius: number = 2

export const VENUSES = [
  { position: { x: -2, y: 2, z: 0 } },
  { position: { x: 2, y: 1, z: 2 } },
  { position: { x: 5, y: 4, z: -10 } },
]

export const DOM_VENUSES = [{ position: { x: -2, y: 0.5, z: 3 } }, { position: { x: 3, y: 1.2, z: 3 } }]

type Lamp = {
  position: { x: number; y: number; z: number }
  rotationY: number
  spotLightOffset: [number, number, number]
}

export const LAMPS: Lamp[] = [
  { position: { x: -3, y: 2, z: -3 }, rotationY: Math.PI / 2, spotLightOffset: [0.1, 0, 0] },
  { position: { x: 2.9, y: 1, z: 1.6 }, rotationY: -Math.PI / 3, spotLightOffset: [0, 0, 0] },
]

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
    projects: ['github.com/jkowiesk/Pasty', 'github.com/jkowiesk/SoundboardGenerator', 'github.com/jkowiesk/Piranhas'],
  },
  {
    name: 'java',
    displayName: 'Java',
    description: "Not really fan of it, but if it's gets job done, I'll use it.",
    color: '#f89820',
    link: 'https://www.java.com/en/',
    rating: 2,
    projects: ['github.com/jkowiesk/Calc4U'],
  },
  {
    name: 'rust',
    displayName: 'Rust',
    description: "If something must be fast and safe, it's my go to",
    color: '#dea584',
    link: 'https://www.rust-lang.org/',
    rating: 3,
    projects: ['github.com/jkowiesk/go-in-yew', 'github.com/whisky-rs/whisky-engine'],
  },
  {
    name: 'js',
    displayName: 'JavaScript',
    description: 'I use it for everything, but I prefer TypeScript.',
    color: '#f7df1e',
    link: 'https://www.javascript.com/',
    rating: 4,
    projects: ['github.com/jkowiesk/Pasty', 'github.com/jkowiesk/SoundboardGenerator', 'github.com/jkowiesk/Piranhas'],
  },

  {
    name: 'tailwind',
    displayName: 'Tailwind',
    description: 'Was sceptical before trying, now I love it.',
    color: '#38b2ac',
    link: 'https://tailwindcss.com/',
    rating: 4,
    projects: ['github.com/jkowiesk/pack-it', 'github.com/jkowiesk/jkowiesk-cv'],
  },
  {
    name: 'next',
    displayName: 'Next.js',
    description: 'Best full-stack framework there is.',
    color: '#000000',
    link: 'https://nextjs.org/',
    rating: 4,
    customTexture: true,
    projects: ['github.com/jkowiesk/jkowiesk-cv', 'github.com/jkowiesk/Pasty'],
  },
  {
    name: 'cpp',
    displayName: 'C++',
    description: 'Was there when I started programming, still there.',
    color: '#00599c',
    link: 'https://isocpp.org/',
    rating: 3,
    projects: ['github.com/jkowiesk/seaside_hotel'],
  },
  {
    name: 'svelte',
    displayName: 'Svelte',
    description: "As much as I like React, it's so fast and clean",
    color: '#FF7700',
    link: 'https://svelte.dev/',
    rating: 2,
    projects: ['github.com/jkowiesk/pack-it'],
  },
  {
    name: 'three',
    displayName: 'Three.js',
    description: '3D graphics in web, what more could you want ?',
    color: '#fffffe',
    link: 'https://threejs.org/',
    rating: 3,
    projects: ['github.com/jkowiesk/pack-it', 'github.com/jkowiesk/jkowiesk-cv'],
  },
  {
    name: 'python',
    displayName: 'Python',
    description: 'I use it for some data science projects.',
    color: '#3776ab',
    link: 'https://www.python.org/',
    rating: 3,
    projects: ['github.com/jkowiesk/WSI'],
  },
]

export const starsToSize = new Map<number, number>([
  [1, 0.4],
  [2, 0.5],
  [3, 0.6],
  [4, 0.7],
  [5, 0.8],
])

// pallete used in project
export const background = '#cbd5e1'
export const bodyLampColor = '#94a1b2'
export const primary = '#7F5AF0'
export const secondary = '#647DEE'
