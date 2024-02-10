import "./App.css"
import { Container } from "./components/UI/Container/Container"
import { Header } from "./components/UI/Header/Header"
import { Footer } from "./components/UI/Footer/Footer"
import { Stats } from "./components/UI/Stats/Stats"
import { TextArea } from "./components/UI/TextArea/TextArea"
import { useState } from "react"

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200
  })
  return (
    <>
      <Header />
      <Container>
        <TextArea setStats={setStats} />
        <Stats stats={stats} />
      </Container>
      <Footer />
    </>
  )
}

export default App
