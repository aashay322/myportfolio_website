import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`;


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center; 
    padding-top: 5vh; 
`;

const SectionTitle = styled.h1`
    font-size: 5vh;
    margin: 0; 
    text-align: center; 
`;

const CardList = styled.ul`
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 5vh;
    padding: 0;
`;

const ProjectCard = styled.li`
    // background-image: linear-gradient(180deg, rgba(108, 194, 240, 1) 55%, rgba(207, 232, 232, 1) 100% );
    background: rgba(108, 205, 240, 1);
    color: #f8f9fa; 
    border: 1px solid #000; 
    width: 50vh;
    height: 70vh;
    display: flex; 
    align-items: center; 
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    
    border-radius: 10px; 
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const ProjectTitle = styled.h2`
    font-size: 3vh;
    padding: 2vh;
    text-align: center;
    font-weight: 800; 
    color: #fff;
`;

const ProjectImage = styled.img`
    width: 22vh; 
    height: 22vh; 
    margin-top: 2vh;
`;

const ProjectsContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    margin: 0;
    width: 45vh;
    margin-top: 2vh;
    margin-left: 2vh;
`;

const ProjectLink = styled.a`
    text-decoration: none; 
    color: #fff;
    border-bottom: 1px solid white; 
    transition: transform 0.2s ease; 

    &:hover {
        transform: scale(1.05); 
    }
`;

const BulletPoints = styled.ul` 
    color: #fff;
    padding: 2vh;
    text-align: left;
    font-weight: 400;
    font-size: 2.6vh;
`;

const Projects = () => {
  return (
    <div id='projectsPage'>
      <Section>
        <Container>
          <SectionTitle>Projects</SectionTitle>
          <CardList>
            <ProjectCard>
                <ProjectTitle>AI Email Writing Assistant App</ProjectTitle>
                <ProjectImage src="./img/aziksa.png"/>
                <ProjectsContainer>
                    <BulletPoints>
                        <li>UCSB Senior Capstone Project</li>
                        <li>Made an app, sponsored by <ProjectLink href="https://aziksa.com/">Aziksa</ProjectLink>, that helps non-native english speakers write professional emails</li>
                        <li>Designed in Figma and built with React Native</li>
                        <li>Backend: Python, Uvicorn FastAPI, prompt engineering, Meta’s Llama2 LLM</li>
                    </BulletPoints>
                </ProjectsContainer>
            </ProjectCard>
            <ProjectCard>
                <ProjectTitle>ImageMagick Animal Detection</ProjectTitle>
                <ProjectImage src="./img/bear.png"/>
                <ProjectsContainer>
                    <BulletPoints>
                        <li>Project for <ProjectLink href="https://sites.cs.ucsb.edu/~ckrintz/racelab.html">UCSB RACELab's</ProjectLink> Where's the Bear system</li>
                        <li>Developed an ImageMagick and Bash-based system to detect wildlife in images</li>
                        <li>Tested on thousands of images, optimized through segmentations</li>
                        <li>Used RMSE and MAE thresholding to mark wildlife and classify empty images</li>
                    </BulletPoints>
                </ProjectsContainer>
            </ProjectCard>
            <ProjectCard>
                <ProjectTitle>Raspberry Pi Smart Mailbox</ProjectTitle>
                <ProjectImage src="./img/mailbox.png"/>
                <ProjectsContainer>
                    <BulletPoints>
                        <li>Designed a Smart Mailbox IoT System using Rasperry Pi, HX711 Load Cell, Magnet sensor and Weight sensor</li>
                        <li>Utilized Python and SMTP server for package detection, door status, and user notifications via email</li>
                        <li>Project for CS190B (IoT Class) - <ProjectLink href="https://drive.google.com/file/d/11AWwicvFtITFH7IRF8Oe0REDVvFhagHK/view?usp=sharing">Demo Video</ProjectLink></li>
                    </BulletPoints>
                </ProjectsContainer>

            </ProjectCard>
            <ProjectCard>
                <ProjectTitle>Unity 3D Space Simulator</ProjectTitle>
                <ProjectImage src="./img/solar-system.png"/>
                <ProjectsContainer>
                    <BulletPoints>
                        <li>Collaboratively worked on an interactive solar system game</li>
                        <li>Allows users to explore and learn about celestial bodies, orbits, and gravitational fields</li>
                        <li>Developed in Unity, C#, WebGL and hosted on Itch.io</li>
                        <li>Project for CS148 (Software Engineering class) - <ProjectLink href="https://team04-interactivesolarx.itch.io/team04-interactivesolarx">Try it out!</ProjectLink></li>
                    </BulletPoints>
                </ProjectsContainer>
            </ProjectCard>
          </CardList>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
