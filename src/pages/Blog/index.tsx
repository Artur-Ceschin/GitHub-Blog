import { useCallback, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { BlogCardContainer, BlogHeader, BlogContainer } from './styles'
import { api } from '../../lib/api'
import { GitHubUser } from '../../types/githubUser'

import { Profile } from './Profile'

type GithubIssuesType = {
  id: number
  title: string
  created_at: Date
  body: string
  number: number
}

const accessToken = import.meta.env.VITE_GITHUB_TOKEN

export function Blog() {
  const [issues, setIssues] = useState<GithubIssuesType[]>([])
  const [inputQuery, setInputQuery] = useState('')

  const [user, setUser] = useState<GitHubUser>()

  const fetchUserData = useCallback(async () => {
    try {
      const response = await api.get(`users/${'artur-ceschin'}`)
      setUser(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  const getIssuesData = useCallback(async () => {
    try {
      if (inputQuery && inputQuery.length >= 3) {
        const { data } = await api.get(`search/issues?`, {
          params: {
            q: `is:issue ${inputQuery} repo:artur-ceschin/github-blog`,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        if (data.items.length) {
          return setIssues(data.items)
        }
      }

      const { data } = await api.get('repos/artur-ceschin/github-blog/issues')

      setIssues(data)
    } catch (error) {
      console.error(error)
    }
  }, [inputQuery])

  useEffect(() => {
    getIssuesData()
  }, [getIssuesData])

  return (
    <>
      <Profile user={user} />

      <BlogContainer>
        <BlogHeader>
          <header>
            <h4>Publicações</h4>
            <p>{issues.length}</p>
          </header>

          <input
            onChange={(e) => setInputQuery(e.target.value)}
            type="text"
            placeholder="Buscar conteúdo"
            name="query"
            value={inputQuery}
          />
        </BlogHeader>
        <BlogCardContainer>
          {issues.map((issue) => (
            <Card
              body={issue.body}
              key={issue.id}
              title={issue.title}
              createdAt={issue.created_at}
              number={issue.number}
            />
          ))}
        </BlogCardContainer>
      </BlogContainer>
    </>
  )
}
