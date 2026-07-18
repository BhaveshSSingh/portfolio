import bunRustCover from '../assets/blogs/bun-rust-rewrite/01-merged-pr.png'
import testInEnglishCover from '../assets/blogs/test-in-english/01-act.png'
import chunkSmarterCover from '../assets/blogs/chunk-smarter/01-hero.png'
import internToLeadCover from '../assets/blogs/intern-to-lead/01-hero.png'

export interface Post {
  slug: string
  title: string
  date: string
  url: string
  excerpt?: string
  image?: ImageMetadata
}

export const POSTS: Post[] = [
  {
    slug: 'bun-rust-rewrite',
    title: 'Adversarial review: what made the Bun rewrite possible',
    date: '2026-08-01',
    url: '/blogs/bun-rust-rewrite',
    excerpt:
      'Bun was rewritten from Zig to Rust in a million-line PR. The interesting part is not the languages, it is the workflow: 64 Claudes running one implementer, two adversarial reviewers and one fixer.',
    image: bunRustCover,
  },
  {
    slug: 'test-in-english',
    title: 'Test in English: a week with Stagehand',
    date: '2026-07-18',
    url: '/blogs/test-in-english',
    excerpt:
      'A week learning end-to-end testing, and the library that made it click: Stagehand lets you write test steps in plain English, so an AI reads the page and figures out what to do.',
    image: testInEnglishCover,
  },
  {
    slug: 'chunk-smarter',
    title: 'Chunk smarter: why context beats text splitting',
    date: '2026-07-11',
    url: '/blogs/chunk-smarter',
    excerpt:
      'Three ways to cut a document for RAG — text splitting, semantic chunking, and contextual chunking. Same document, three cuts. Only the last one stops the retriever from lying.',
    image: chunkSmarterCover,
  },
  {
    slug: 'intern-to-lead',
    title: 'From intern to lead — my journey',
    date: '2024-11-02',
    url: 'https://www.linkedin.com/posts/levelsupermind_story-of-bhavesh-singh-from-intern-to-team-activity-7320419727367979008-PGK-',
    excerpt:
      'The story of how I went from intern to team lead at Level SuperMind, shared on LinkedIn.',
    image: internToLeadCover,
  },
]

export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day}-${month}-${year}`
}
