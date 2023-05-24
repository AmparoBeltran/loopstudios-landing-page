import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import Hero from "./components/Hero"
import SectionIntro from "./components/SectionIntro"
import Portfolio from "./components/Portfolio"
import Footer from './components/Footer';


const theme = {
  colors: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    darkGray: 'hsl(0, 0%, 55%)',
    veryDarkGray: 'hsl(0, 0%, 41%)',
  },

  desktop: '1440px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <SectionIntro />
      <Portfolio />
      <Footer />
    </ThemeProvider>
  )
}

export default App
