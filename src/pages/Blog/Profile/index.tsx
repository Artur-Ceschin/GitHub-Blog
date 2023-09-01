import { Header } from '../../../components/Header'
import { GitHubUser } from '../../../types/githubUser'
import { ProfileContainer, ProfileContent } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaArrowUpRightFromSquare,
  FaUserGroup,
} from 'react-icons/fa6'

interface ProfileProps {
  user: GitHubUser | undefined
}

export function Profile({ user }: ProfileProps) {
  return (
    <Header>
      <ProfileContainer>
        <img src={user?.avatar_url} alt="" />
        <ProfileContent>
          <section>
            <div>
              <h2>{user?.name}</h2>
              <p>{user?.bio}</p>
            </div>

            <a href={user?.html_url} target="_blank" rel="noreferrer">
              github <FaArrowUpRightFromSquare />
            </a>
          </section>

          <ul>
            <li className="github-icon">
              <FaGithub size={18} color="#3A536B" /> {user?.login}
            </li>
            {user?.company && (
              <li>
                <FaBuilding size={18} color="#3A536B" />
                {user?.company}
              </li>
            )}

            <li>
              <FaUserGroup size={18} color="#3A536B" /> {user?.followers}
            </li>
          </ul>
        </ProfileContent>
      </ProfileContainer>
    </Header>
  )
}
