import { styled } from 'styled-components'

export const PostInfoContainer = styled.header`
  header {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
  }
`
export const PostHeaderLinks = styled.a`
  display: flex;
  align-items: center;

  gap: 8px;
  font-size: 12px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.blue};

  text-transform: uppercase;
  text-decoration: none;
`
export const PostIcons = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
