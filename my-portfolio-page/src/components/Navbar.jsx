// import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
    display: flex;
    justify-content: center;
`; 

const Container = styled.div`
    width: 200vh; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4vh;
    padding-left: 20vh;
    
`;

const Links = styled.div`
    display: flex; 
    align-items: center; 
    gap: 5vh; 
`;


const List = styled.ul`
    display: flex;
    gap: 5vh; 
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
    font-size: 4vh; 

    color: #6ccdf0;

    &:hover{
        color: #fff; 
    }

    &:active{
        color: #fff;
    }
`;

// const Icons = styled.div`
//     display: flex; 
//     align-items: center; 
//     gap: 20px;
// `;

// const Button = styled.button`
//     width: 100px; 
//     padding: 10px; 
//     background-color: #da4ea2;
//     color: white;
//     border: none; 
//     border-radius: 5px;
//     cursor: pointer;

// `;

function scrollToAboutPage() {
    const aboutPage = document.getElementById("aboutPage"); 
    aboutPage.scrollIntoView({behavior: 'smooth'});
}

function scrollToContactPage() {
    const contactPage = document.getElementById("contactPage");
    contactPage.scrollIntoView({behavior: 'smooth'});
}

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                        <ListItem onClick={scrollToAboutPage}>About</ListItem>
                        <ListItem onClick={scrollToContactPage}>Contact</ListItem>
                    </List>
                </Links>
                {/* <Icons>
                    <Button>Hire Now</Button>
                </Icons> */}
            </Container>
        </Section>
    )
}

export default Navbar