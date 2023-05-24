import styled from "styled-components";

export const PortfolioStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  justify-items: center;
  margin-top: 6em;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    justify-items: unset;
    grid-template-columns: 1fr 1fr;
    & > div {
      order: 2;
      grid-column: 1/3;
    }

    .portfolio {
      display: flex;
      align-items: flex-end;

      .overlay {
        width: 100%;
      }
    }

    img {
      width: 100%;
    }

    button {
      justify-self: flex-end;
      padding: 0 3em;
      font-size: 1.5em;

      letter-spacing: 3px;
    }
  }

  h1 {
    text-transform: uppercase;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 4.5em;
    }
  }

  .portfolio-container {
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.8em;
      margin-top: 4em;
    }
  }

  .portfolio {
    h2 {
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      position: absolute;
      max-width: 160px;
      padding: 1em;
      font-size: 1.5em;
      z-index: 1;
      margin-bottom: 0;
      font-family: "Josefin Sans", sans-serif;
      font-weight: bolder;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        max-width: 300px;
        font-size: 2.4em;
        line-height: 1em;
        padding: 1.5em;
      }
    }

    img {
      max-width: 100vw;
      filter: brightness(0.8);
    }
  }
`;
