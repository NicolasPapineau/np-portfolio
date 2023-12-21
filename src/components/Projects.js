import styled from "styled-components";

import ecommerce from "../images/ecommerce.png";
import coffeehub from "../images/coffeehub.png";


const Projects = () => {

    return (
        <ProjectContainer id='projects'>
            <h3>Projects I Have Worked On</h3>
            <Examples>
            <ExternalLink href="https://github.com/NicolasPapineau/CoffeeHub-Final-Project">
                    <Ex>
                    <strong>CoffeeHub</strong>
                        <img src={coffeehub} alt="coffeehub" />
                        <DeployedLink href="https://coffee-hub-final-client.vercel.app/">
                            Link to deployed app
                        </DeployedLink>
                    </Ex>
                </ExternalLink>
                <ExternalLink href="https://github.com/NicolasPapineau/GROUP-e-commerce">
                    <Ex>
                        <strong>E-Commerce Project</strong>
                        <img src={ecommerce} alt="ecommerce" />
                        This project is not deployed
                    </Ex>
                </ExternalLink>
                
            </Examples>
        </ProjectContainer>
    );
};

const ExternalLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const DeployedLink = styled.a`
    color: inherit;
`;


const ProjectContainer = styled.div`
    padding: 0px 20px;
    margin-top: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(50, 50, 50, 0.7);
    
    h3 {
        font-size: 1.5em;
        font-style: italic;
    }
`

const Examples = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    
    img{
        max-height: 250px;
        max-width: 80vw;
        margin: 20px;
    }
`
const Ex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
`

export default Projects