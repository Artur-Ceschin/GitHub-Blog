import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  .cover-image {
    width: 100%;
  }
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  height: auto;
  min-height: 168px;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  position: sticky;

  margin: 0 auto;
  padding: 2rem;
  margin-top: -5rem;
`
