import styled from 'styled-components'
import React from 'react'

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
  justify-content: flex-start;
  flex-direction: column; 
  padding: 1vh;
`;

const LeftTitle = styled.h1`
    font-size: 5vh; 
    margin-top: 5vh;
    margin-left: 7vh;

`


const List = styled.ul`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(25vh, 1fr));
  row-gap: 5vh;
  padding: 1vh;
  margin-top: 8vh;
  margin-left: 7vh;
  list-style: none;
  width: 100%;
`;

const ListItem = styled.li`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: transform 0.2s; 

    &:hover {
        transform: scale(1.05); 
    }
`;

const IconBack = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center; 
    width: 12vh; 
    height: 12vh; 
    border-radius: 50%;
    margin-bottom: 1vh; 

`;

const Icons = styled.img`
  width: 11vh; 
`;

const IconText = styled.span`
  cursor: pointer;
  color: white;
  font-size: 3vh;
  font-weight: 400;
  text-align: center;
`; 

const Right = styled.div`
    flex: 1; 
    display: flex; 
    align-items: left; 
    justify-content: flex-start;
    flex-direction: column;
    padding: 1vh; 
`;

const RightTitle = styled.h1`
    font-size: 5vh; 
    margin-top: 5vh;
    margin-left: 1vh;
    text-align: center;
`;

const WorkContainers = styled.div`
    display: flex; 
    align-items: center;
    justify-content: flex-start; 
    padding: 1vh;
    background-image: linear-gradient(to right, rgba(108, 194, 240, 1) , rgba(207, 232, 232, 0) );
    margin-top: 5vh;  
    width: 110vh; 
    height: 18vh;
    margin-left: 2vh;
    border-radius: 10px;
`;
const ExperienceContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    margin-left: 2vh; 
    width: 90vh;
`;

const PositionHeader = styled.h2`
    margin: 0;
    font-size: 0.90em; 
    font-weight: 600;
    color: white;
`;

const CompanyDuraction = styled.h3`
    margin: 0; 
    font-size: 0.80em;
    color: white;
    font-weight: 400;
`;

const BulletPoints = styled.ul`
    margin: 0; 
    padding-left: 2.5vh; 
    color: #f2f2f2;
    font-size: 0.70em;
`;




const Experiences = () => {
    return (
        <div id='experiencesPage'>
            <Section>
                <Container>
                    <Left>
                        <LeftTitle>Technical Skills</LeftTitle>
                        <List>
                            {[
                                {src: './img/c++.png', text: 'C++'},
                                {src: './img/python.png', text: 'Python'},
                                {src: '/img/java.png', text: 'Java'},
                                {src: '/img/html.png', text: 'HTML/CSS'},
                                {src: '/img/typescript.png', text: 'Typescript'},
                                {src: '/img/javascript.png', text: 'JavaScript'},
                                {src: '/img/unity.png', text: 'Unity'},
                                {src: '/img/react.png', text: 'React'},
                                {src: '/img/sql.png', text: 'SQL'},
                                {src: '/img/fastapi.png', text: 'FastAPI'},
                                {src: '/img/github.png', text: 'Github'},
                                {src: '/img/gcp.png', text: 'Google Cloud'}

                            ].map(item => (
                                <ListItem key={item.text}>
                                    <IconBack>
                                        <Icons src={item.src} alt={item.text}/>
                                    </IconBack>
                                    <IconText>{item.text}</IconText>
                                </ListItem>
                            ))}
                        </List>
                    </Left>
                    <Right>
                        <RightTitle>Work Experience</RightTitle>
                        <WorkContainers>
                            <Icons src="./img/snag.png"/>
                            <ExperienceContainer>
                                <PositionHeader>Software Engineering Intern</PositionHeader>
                                <CompanyDuraction>Snag Delivery Inc. | Jun 2023 - Aug 2023</CompanyDuraction>
                                <BulletPoints>
                                    <li>Integrated scheduling and clock-in/out API for internal mobile app used by 6 store locations.</li>
                                    <li>Built caching system and integrated Google Sheets for reliable order processing in case of system failures.</li>
                                    <li>Created product descriptions for 1500 items using OpenAI API and prompt engineering.</li>
                                </BulletPoints>
                            </ExperienceContainer>
                        </WorkContainers>
                        <WorkContainers>
                            <Icons src="./img/cif.png"/>
                            <ExperienceContainer>
                                <PositionHeader>Data Engineering Intern</PositionHeader>
                                <CompanyDuraction>Coding it Forward (US Census Bureau contract) | Jun 2022 - Nov 2023</CompanyDuraction>
                                <BulletPoints>
                                <li>Selected for Civic Digital Fellowship from a pool of 1600 applicants (10% acceptance rate).</li>
                                <li>Modernized the Bureau's internal budgeting system with a new database schema and efficient data entry dashboard.</li>
                                <li>Developed backend application for data analysis and budget tracking across 7 divisions.</li>
                                </BulletPoints>
                            </ExperienceContainer>
                        </WorkContainers>
                        <WorkContainers>
                            <Icons src="./img/ucsb.png"/>
                            <ExperienceContainer>
                                <PositionHeader>Undergraduate Researcher</PositionHeader>
                                <CompanyDuraction>Applied Cryptography Lab (UCSB) | Sep 2021 - Jun 2022</CompanyDuraction>
                                <BulletPoints>
                                    <li>Selected for UCSB's competitive Early Research Scholars Program.</li>
                                    <li>Researched Fully Homomorphic and Functional Encryption with Professor Prabhanjan Ananth.</li>
                                    <li>Implemented the first ever Bounded Collusion Functional Encryption scheme using C++ and OpenSSL, CryptoPP, and Libscapi libraries.</li>
                                </BulletPoints>
                            </ExperienceContainer>
                        </WorkContainers>
                        
                    </Right>
                </Container>
            </Section>
            
        </div>

    );

};

export default Experiences; 