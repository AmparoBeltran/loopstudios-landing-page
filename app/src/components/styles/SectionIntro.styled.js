import styled from "styled-components";

export const SectionIntroStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  margin-top: 6em;
  gap: 1.5em;
  text-align: center;
  img {
    width: 100%;
  }

  .intro {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding: 3em;
      text-align: left;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);

    picture {
      grid-column: 1/9;
      grid-row: 1/-1;
    }

    .intro {
      padding: 6em 0 0 6em;
      grid-column: 7/14;
      grid-row: 2/4;
      justify-content: space-between;

      h1 {
        font-size: 4.2em;
      }

      p {
        line-height: 1.6;
        font-size: 1.3em;
      }
    }
  }

  h1 {
    text-transform: uppercase;
    margin: 0.5em 0 0 0;
  }
  p {
    margin: 0;
    line-height: 1.5;
    padding-inline: 1em;
  }
`;
