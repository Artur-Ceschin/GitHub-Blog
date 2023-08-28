import { useState, useEffect } from 'react'
import { api } from '../../../lib/api'
import { ProfileContainer, ProfileContent } from './styles'
import { GitHubUser } from '../../../types/githubUser'

import {
  FaGithub,
  FaBuilding,
  FaArrowUpRightFromSquare,
  FaUserGroup,
} from 'react-icons/fa6'

export function Profile() {
  const [user, setUser] = useState<GitHubUser>()
  const [loading, setLoading] = useState(false)

  async function fetchUserData() {
    try {
      setLoading(true)
      const response = await api.get(`users/${'artur-ceschin'}`)

      setUser(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileContainer>
      {loading && <p>Loading...</p>}

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
  )
}
