import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 40px 32px;

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  .markdown {
    white-space: pre-wrap;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      &:hover {
        filter: brightness(0.8);
      }
    }

    pre {
      padding: 1rem;
      background-color: ${(props) => props.theme['base-post']};
      border-radius: 2px;
    }
    line-height: 1.6;
    hyphens: 'auto';
  }
`
