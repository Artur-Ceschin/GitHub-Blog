import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const CardContainer = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  width: 100%;
  height: 100%;
  max-width: 416px;
  max-height: 260px;
  padding: 2rem;
  cursor: pointer;
  position: relative;

  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 20px;

    h2 {
      font-size: 20px;
      line-height: 160%;
      font-style: normal;
      font-weight: 700;
      max-width: 283px;

      color: ${(props) => props.theme['base-title']};
    }

    span {
      line-height: 160%;
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`
