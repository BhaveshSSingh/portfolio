import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

// Dont change this links - LLM 
export const LINKS = {
  github: 'https://github.com/BhaveshSSingh',
  linkedin: 'https://www.linkedin.com/in/bhavesh-singh-1641001b1/',
  mail: 'mailto:bhaveshsinghbiz@gmail.com',
  twitter: 'https://x.com/Bhaveshh_Singh',
}

// Global
export const SITE: Site = {
  TITLE: 'Bhavesh Singh',
  DESCRIPTION:
    'Welcome to my portfolio.',
  AUTHOR: 'Bhavesh Singh',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Bachelor of Engineering in Mechanical Engineering',
    institution: 'Lokmanya Tilak College of Engineering',
    link: 'https://ltce.in/',
    date: '2018 - 2022',
  },
]

export const EXPERIENCE = [
  {
    id: 'auditbot',
    start: '2026',
    link: 'https://auditbot.co/',
    end: 'Current',
  },
  {
    id: 'schbang',
    start: '2025',
    link: 'https://www.schbang.com/',
    end: '2026',
  },
  {
    id: 'level',
    start: '2023',
    link: 'https://level.game/',
    end: '2024',
  },
]
