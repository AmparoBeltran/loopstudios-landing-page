import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6em;
  padding: 3em;
  gap: 2em;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 8em;
    font-size: 1.3em;
  }

  img {
    width: 40%;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-start;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 1em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        .underline:hover {
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            bottom: -10px;
            left: 1em;
            right: 1em;
            border-bottom: 2px solid ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }
  .more-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    small {
      color: ${({ theme }) => theme.colors.darkGray};
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-end;
      small {
        font-size: 1em;
      }
    }
  }

  .social {
    display: flex;
    gap: 1em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.5em;
      .underline:hover {
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          border-bottom: 2px solid ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;
