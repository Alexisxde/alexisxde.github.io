export interface Articles {
  id: number
  title: string
  description: string
  slug: string
  tags: Array<string>
  date: Date
}

export type BlogArray = Array<Articles>
