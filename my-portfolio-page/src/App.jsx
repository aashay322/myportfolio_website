import Hero from "./components/Hero"
import About from "./components/About"
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
  // background-image: linear-gradient(to right, #000, #1A1A1A);
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
      <Contact/>
    </Container>
  )

}

export default App
