import { useParams } from 'react-router-dom'
import { PostContainer } from './styles'
import { useEffect, useState } from 'react'

import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import { PostInfo } from './PostInfo'
import { api } from '../../lib/api'
import { IssueType } from '../../types/issue'

export function Post() {
  const { postId } = useParams()

  const [issuesContent, setIssuesContent] = useState<IssueType>()

  async function getIssuesContentData(postId: string) {
    try {
      const { data } = await api.get(
        `repos/artur-ceschin/github-blog/issues/${postId}`,
      )

      setIssuesContent(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (postId) getIssuesContentData(postId)
  }, [])


  return (
    <>
      {issuesContent && (
        <>
          <PostInfo
            title={issuesContent?.title}
            userName={issuesContent?.user.login}
            comments={issuesContent?.comments}
            createdAt={issuesContent?.created_at}
            url={issuesContent.html_url}
          />
          <PostContainer>
            <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
              {issuesContent?.body}
            </ReactMarkdown>
          </PostContainer>
        </>
      )}
    </>
  )
}
