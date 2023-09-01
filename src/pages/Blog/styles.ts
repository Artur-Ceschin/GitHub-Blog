import { styled } from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 5rem auto;
`
export const BlogHeader = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    line-height: 160%;
    margin-bottom: 12px;

    h4 {
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
      font-weight: 400;
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-subtitle']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  margin-bottom: 3rem;
`
export const BlogCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
