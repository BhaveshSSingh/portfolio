export interface Post {
  slug: string
  title: string
  date: string
  url: string
}

export const POSTS: Post[] = [
  {
    slug: 'building-with-ai',
    title: 'Building with AI — what I have learned shipping AI products',
    date: '2025-03-15',
    url: '#',
  },
  {
    slug: 'intern-to-lead',
    title: 'From intern to lead — my journey',
    date: '2024-11-02',
    url: 'https://www.linkedin.com/posts/levelsupermind_story-of-bhavesh-singh-from-intern-to-team-activity-7320419727367979008-PGK-',
  },
]

export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day}-${month}-${year}`
}
