import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from "./Map"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between; 
  gap: 5vh;
`;

const Left = styled.div`
  flex: 1; 
  display: flex; 
  align-items: center; 
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 2em;
`;

const Form = styled.form`
  width: 75vh; 
  display: flex; 
  flex-direction: column;
  gap: 3vh;
`;

const Input = styled.input`
  padding: 3vh; 
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  width: 70vh;
  
`;
const TextArea = styled.textarea`
  padding: 3vh; 
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  width: 70vh;
  height: 25vh; 
  resize: none;
`;

const Button = styled.button`
  width: 76vh;
  background-color: #00bbff;
  color: white; 
  border: none; 
  font-weight: bold; 
  cursor: pointer; 
  border-radius: 5px; 
  padding: 3vh;
  
  

  &:hover{
    background-color: #07aae6;
  }
  
  &:active{
    background-color: #07aae6;
  }
`;

const Right = styled.div`
  flex: 1; 
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const List = styled.ul`
  margin-top: 8vh;
  display: flex; 
  align-items: left;
  flex-direction: column; 
  gap: 7vh;
`;

const ListItem = styled.li`
  display: flex; 
  align-items: center; 

  transition: transform 0.2s; 

  &:hover {
    transform: scale(1.05); 
  }

  &:active {
    transform: scale(1.05);
  }
`;

const LinkContainer = styled.a`
  display: flex; 
  align-items: center; 
  text-decoration: none; 
`


const Icons = styled.img`
  width: 15vh; 
  height: 15vh;


`;

const IconText = styled.span`
  margin-left: 2vh; 
  cursor: pointer;
  color: white;
  font-size: 8vh;
  font-weight: 200;
`;


const Contact = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);
    
    const handleSubmit =e=>{
      e.preventDefault();
    
      emailjs
          .sendForm('service_76mimbb', 'template_n5id7at', ref.current, {
            publicKey: 'zo3ndqF90HA6tgHx3',
          })
          .then(
            (result) => {
              console.log(result.text);
              setSuccess(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
              setSuccess(false)
            }
          );
    };
    return (
      <div id="contactPage">
        <Section>
          <Container>
            <Left>
              <Form ref={ref} onSubmit={handleSubmit}>
                <Title>Contact Me!</Title>
                <Input placeholder="Name" name="name"/>
                <Input placeholder="Email" name="email"/>
                <TextArea placeholder="Write your message" name="message" rows={10}/>
                <Button type='submit'>Send</Button>
                {success && 
                  "Your message has been sent. Thanks for reaching out!"}
              </Form>
            </Left>
            <Right>
              
              {/* <Map/> */}
              <List>
                <ListItem>
                  <LinkContainer href="https://www.linkedin.com/in/aashay-parab" target="_blank" rel="noopener noreferrer">
                    <Icons src="./img/linkedin.png"/>
                    <IconText> LinkedIn </IconText>
                  </LinkContainer>
                </ListItem>

                <ListItem>
                  <LinkContainer href="https://github.com/aashay322" target="_blank" rel="noopener noreferrer">
                    <Icons src="./img/github.png"/>
                    <IconText> Github </IconText>
                  </LinkContainer>
                </ListItem>

                <ListItem>
                  <LinkContainer href="https://drive.google.com/file/d/1_f7mwZoV8GbRj4eta-uEhrSScZyxE5Ed/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Icons src="./img/resume.png"/>
                    <IconText> Resume </IconText>
                  </LinkContainer>
                </ListItem>
              </List>
            </Right>
          </Container>
          {/* <a href="https://www.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_61217544.htm#query=dark%20blue%20gradient&position=0&from_view=keyword&track=ais&uuid=897b570b-8923-41aa-b804-98beea330b70">Image by Mateus Andre on Freepik</a> */}
        </Section>
      </div>
    );
};

export default Contact;