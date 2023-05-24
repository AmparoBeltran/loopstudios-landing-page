import styled from "styled-components";

export const HeroStyled = styled.div`
  width: 100%;
  background-image: url("/images/mobile/image-hero.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 80vh;
  padding: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url("/images/desktop/image-hero.jpg");
    padding: 3em 10em;
  }
  .navigation {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    align-self: center;
    text-transform: uppercase;
    padding: 0.3em;
    font-size: 3em;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
    top: 4em;
    position: relative;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      max-width: 900px;
      font-size: 7em;
      padding: 0.5em;
      top: 2em;
      border: 3px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
