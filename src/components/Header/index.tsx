import { HeaderContainer, HeaderContent } from './styles'

import CoverImage from '../../assets/cover.svg'
import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <img className="cover-image" src={CoverImage} alt="" />

      <HeaderContent>{children}</HeaderContent>
    </HeaderContainer>
  )
}
