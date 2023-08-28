import { HeaderContainer, HeaderContent } from './styles'

import CoverImage from '../../assets/cover.svg'
import { Profile } from './Profile'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoverImage} alt="" />

      <HeaderContent>
        <Profile />
      </HeaderContent>
    </HeaderContainer>
  )
}
