export type IssueType = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string

  state: string
  locked: boolean

  comments: number
  created_at: string
  updated_at: string
  closed_at: string | null
  author_association: string
  active_lock_reason: string | null
  body: string

  user: {
    login: string
  }

  timeline_url: string

  state_reason: string | null
}
