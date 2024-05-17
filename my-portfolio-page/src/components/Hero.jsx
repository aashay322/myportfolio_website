// import React from 'react'
import Navbar from '/src/components/Navbar'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh; 
    scroll-snap-align: center;
    width: 200vh; 
    display: flex; 
    padding-left: 20vh;
    justify-content: space-between;
`;

const Left = styled.div`
   flex: 2;
   display: flex; 
   flex-direction: column; 
   justify-content: center; 
   gap: 2.5vh;

`;
const Title = styled.h1`
    font-size: 5em;
    font-weight: bold; 
    cursor: pointer;
    color: transparent; 
    -webkit-text-stroke: 0.4vh white; 
    position: relative; 

    &::after{
        content: "Aashay Parab";
        position: absolute; 
        top: 0;
        left: 0; 
        color: rgba(108, 205, 240, 1); 
        width: 0px; 
        overflow: hidden; 
        white-space: nowrap; 
    }

    &:hover{
        &::after{
            animation: moveText 0.65s linear both; 

            @keyframes moveText {
                to{
                    width: 100%;
                }
            }
        }
    }
`;
const WhatWeDo = styled.div`
    display: flex; 
    align-items: center; 
    gap: 10px;
`;
// const Line = styled.img`
//     height: 5px;
// `;
const Subtitle = styled.h2`
    color: #fff;
    font-size: 2em;
     
`;
const Desc = styled.p`
    font-size: 1.1em; 
    color: lightgray;
`;

// const Button = styled.button`
//     background-color: #da4ea2; 
//     color: white; 
//     font-weight: 500; 
//     width: 100px; 
//     padding: 10px; 
//     border: none; 
//     border-radius: 5px; 
//     cursor: pointer;
// `;

const Right = styled.div`
    flex: 2;
    position: relative;
    margin-left: 2vh;
`;

const Img = styled.img`
    width: 60vh; 
    height: 60vh;
    border-radius: 50%;
    object-fit: cover;
    position: absolute; 
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    margin: auto; 
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to {
            transform: translateY(10px)
        }
    }
`;


const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left> 
                    <Subtitle>Hi, I'm</Subtitle>
                    <WhatWeDo>
                        {/* <Line/> */}
                        <Title>Aashay Parab</Title>
                    </WhatWeDo>
                    <Desc>If you can't tell, I really like the color blue :)</Desc>
                    {/* <Button>Learn More</Button> */}
                </Left>
                <Right>
                    <Canvas camera={{fov:25, position: [5, 5, 5]}}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[3, 2, 1]}/>
                        <Sphere args={[1, 200, 200]} position={[0,0,0]} scale={1.5}>
                        <MeshDistortMaterial
                            color="#00bbff" 
                            attach="material" 
                            distort={0.5} 
                            speed={2}
                        />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/pfp.JPG"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero