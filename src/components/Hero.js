import styled from "styled-components";
import picture from "../images/picture.jpg";

const Hero = () => {

    return (
        <HeroContainer id="home">
                <Pic src={picture} alt="picture" />
                <Intro>
                    <p>Hi ! My name is Nicolas Papineau. I am a full-Stack web developer.</p>
                </Intro>
                
            
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
    /* border: 1px solid white;  */
    padding: 0px 20px;
    color: white;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    
    `

const Intro = styled.div`
display: flex;
font-size: 2em;
font-style: italic;
`

const Pic = styled.img`
padding: 0px 20px;
height: 250px;
border-radius: 50%;
display: flex;


`

export default Hero