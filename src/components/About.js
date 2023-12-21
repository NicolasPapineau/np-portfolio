import styled from "styled-components";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";

const About = () => {

    return (
        <AboutContainer id='about'>
                
                <Description>
                    <h3>About me:</h3>
                    <p>I am a young full-stack developer eager to hone my skills at a dynamic web development company. Before I chose this career, I used to be a civil engineering student at Concordia University.
                        After years of effort, I decided that engineering was not meant for me and enrolled in the Concordia Continuing Education Bootcamp for full-stack development.

                    </p>
                </Description>
                <Tech>
                    <p>Used Tech: </p>
                    <Icons>
                    <DiHtml5 />
                    <DiCss3 />
                    <DiJsBadge />
                    <DiReact />
                    <DiNodejsSmall />
                    <DiGit />
                    <DiGithubBadge />
                    <DiMongodb />
                    </Icons>

                </Tech>
                
            
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    /* border: 1px solid white;  */
    padding: 0px 20px;
    color: white;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(50, 50, 50, 0.7);
    
    `

const Description = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5em;
font-style: italic;
    h3 {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 1.25em;
    }
`
const Tech = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
font-size: 1.75em;
font-style: italic;
justify-content: space-between;
width: 80%;
`
const Icons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
font-size: 2em;
font-style: italic;
justify-content: space-around;
width: 80%;
`


export default About