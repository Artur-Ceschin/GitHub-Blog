import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { PostHeaderLinks, PostIcons, PostInfoContainer } from './styles'
import { Header } from '../../../components/Header'
import { formatRelativeTime } from '../../../utils/formatRelativeTime'

interface PostInfoProps {
  title: string
  userName: string
  createdAt: string
  comments: number
  url: string
}

export function PostInfo({
  title,
  userName,
  createdAt,
  comments,
  url,
}: PostInfoProps) {
  return (
    <Header>
      <PostInfoContainer>
        <header>
          <PostHeaderLinks href="/">
            <FaChevronLeft />
            voltar
          </PostHeaderLinks>
          <PostHeaderLinks href={url}>
            ver no github
            <FaArrowUpRightFromSquare />
          </PostHeaderLinks>
        </header>

        <h1>{title}</h1>
        <PostIcons>
          <li>
            <FaGithub size={18} color="#3A536B" /> {userName}
          </li>
          <li>
            <FaCalendarDay size={18} color="#3A536B" />{' '}
            {formatRelativeTime(createdAt)}
          </li>
          <li>
            <FaComment size={18} color="#3A536B" />
            {comments} {comments === 1 ? 'comentário' : 'comentários'}
          </li>
        </PostIcons>
      </PostInfoContainer>
    </Header>
  )
}
