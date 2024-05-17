import Hero from "./components/Hero"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
// import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory; 
  scroll-behavior: smooth;
  overflow-y: auto; 
  scrollbar-width: none; 
  color: white; 
  background: url("./img/bg3.jpg");
  // background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 10%, rgba(12, 23, 235, 1) 100%);
  background-size: 250vh 150vh;
  &::-webkit-scrollbar{
    display: none;
  }

`

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      {/* <Works/> */}
      <Experiences/>
      <Projects/>
      <Contact/>
    </Container>
  )

}

export default App
