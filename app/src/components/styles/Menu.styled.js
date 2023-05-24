import styled from "styled-components";

export const MenuStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  nav {
    position: relative;

    .menu {
      display: none;
    }

    &.open {
      button {
        display: inline-block;
      }
      .menu {
        display: grid;
        grid-template-rows: auto 1fr;

        width: 100vw;
        height: 100vh;

        background-color: ${({ theme }) => theme.colors.black};
        text-transform: uppercase;
        gap: 1em;
        border: none;
        padding: 1em 2em;
        position: absolute;
        right: -30px;
        top: -2em;
        z-index: 1;
        .nav {
          display: flex;
          flex-direction: column;
          font-size: 1.5em;
          gap: 0.5em;
          align-self: center;
        }
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 1em;
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    img {
      display: none;
    }
    nav {
      width: 100%;

      .menu {
        display: flex;

        .nav {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 2em;
        }

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
`;

export const MenuStyledFooter = styled.nav``;
