import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  img {
    width: 148px;
    height: 148px;
    flex-shrink: 0;

    border-radius: 8px;
  }
`
export const ProfileContent = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    align-items: start;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 12px;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
    }
  }

  ul {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
