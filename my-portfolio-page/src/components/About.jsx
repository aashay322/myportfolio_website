// import React from 'react'
import styled from 'styled-components'
import Cube from '/src/components/Cube'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex; 
  justify-content: center;
`;

const Container = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    width: 1400px; 
    display: flex; 
    justify-content: space-between;
`;

const Left = styled.div`
   flex: 2.2;
   position: relative;
`;
const Title = styled.h1`
    font-size: 3em;
    
    
`;
const WhatWeDo = styled.div`
    display: flex; 
    align-items: center; 
    gap: 10px;
`;
// const Line = styled.img`
//     height: 5px;
// `;
// const Subtitle = styled.h2`
//     color: #da4ea2;
     
// `;
const Desc = styled.p`
    font-size: 1.0em; 
    font-weight: 300;
    color: white;
    line-height: 1.5;
    max-width: 85vh;

`;

// const Button = styled.button`
//     background-color: #da4ea2; 
//     color: white; 
//     font-weight: 500; 
//     width: 120px; 
//     padding: 10px; 
//     border: none; 
//     border-radius: 5px; 
//     cursor: pointer;
// `;

const Right = styled.div`
    flex: 2;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    gap: 2vh;
`;

// const Img = styled.img`
//     width: 500px; 
//     height: 500px;
//     object-fit: contain;
//     position: absolute; 
//     top: 0; 
//     bottom: 0; 
//     left: 0; 
//     right: 0; 
//     margin: auto; 
//     animation: animate 2s infinite ease alternate;

//     @keyframes animate {
//         to {
//             transform: translateY(30px)
//         }
//     }
// `;


const About = () => {
    return (
        <div id="aboutPage">
        <Section>
            <Container>
                <Left> 
                    <Canvas camera={{fov:18, position: [5, 5, 5]}}>
                        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={3}/>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[3, 2, 1]}/>
                        <Cube/>
                    </Canvas>
                </Left>
                <Right>
                <Title>About</Title>
                    <WhatWeDo>
                        {/* <Line/> */}
                        {/* <Subtitle>Who we are</Subtitle> */}
                    </WhatWeDo>
                    <Desc>
                        <p>I am a recent graduate (Spring 2024) from the </p> 
                        <p><b>University of California, Santa Barbara</b> </p> <p> with a bachelor's degree in <b>Computer Science.</b></p>
                        <br></br>
                        <p>I have prior work and project experiences in backend, fullstack, and mobile development.
                        I am eager to explore and learn new technologies and am currently looking for exciting software development opportunities.
                        </p>
                        <br></br>
                        <p>For fun, I like going to the gym, beatboxing, or watching soccer! (Forca Barca!)</p><br></br>
                        <p>If you'd like to connect, feel free to shoot me a message below or reach out to me on LinkedIn!</p>
                    </Desc>
                     
                </Right>
            </Container>
        </Section>
        </div>
    )
}

export default About