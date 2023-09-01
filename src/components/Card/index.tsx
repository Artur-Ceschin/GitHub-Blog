import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { CardContainer } from './styles'
import { formatRelativeTime } from '../../utils/formatRelativeTime'

interface CardProps {
  title: string
  createdAt: Date
  body: string
  number: number
}

export function Card({ title, createdAt, body, number }: CardProps) {
  const truncatedText = truncateText(body, 200)
  const formattedDate = formatRelativeTime(createdAt.toString())

  return (
    <CardContainer href={`GitHub-Blog/post/${number}`}>
      <header>
        <h2>{title}</h2>
        <span>{formattedDate}</span>
      </header>

      <ReactMarkdown>{truncatedText}</ReactMarkdown>
    </CardContainer>
  )
}

function truncateText(text: string, maxLength: number) {
  if (text.length < maxLength) return text
  return text.slice(0, maxLength) + '...'
}
