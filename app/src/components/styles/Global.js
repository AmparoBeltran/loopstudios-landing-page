import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
    
  *{
    box-sizing: border-box;
  }
    

  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    font-family: 'Alata', sans-serif;  
    font-size: 15px;
    color:${({ theme }) => theme.colors.darkGray};
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
      section {
        width: 80%;
        margin: 0 auto;
      }
    }
  

h1{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2.5em;
  margin: 0;
  color:${({ theme }) => theme.colors.veryDarkGray} ;
    
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2em;
    }   
}

p{
  font-size: 1em;
}
 .title-img-gallery{
    color:${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;

 }

 a{
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
 }

  button{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    padding:1em 2.8em;
    font-size: 1em;
    font-family: 'Alata', sans-serif; 
   &:hover{
    border: none;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

   }
  }
    `;

export default GlobalStyles;
