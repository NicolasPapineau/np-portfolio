import styled from "styled-components";
import pizza from "../images/ronyspizzeria.png";
import fruit from "../images/fruitemporium.png";
import ecommerce from "../images/ecommerce.png";


const Projects = () => {

    return (
        <ProjectContainer id='projects'>
            <h3>Here is a few pojects I have worked on !</h3>
            <Examples>
                <Ex>
                    E-Commerce Project
                    <img src={ecommerce} alt="ecommerce" />
                </Ex>
                <Ex>
                    E-Commerce Project
                    <img src={fruit} alt="fruit empurium" />
                </Ex>
                <Ex>
                    E-Commerce Project
                    <img src={pizza} alt="Rony's pizzeria" />
                </Ex>

            </Examples>
        </ProjectContainer>
    );
};

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
        margin: 20px;
    }
`
const Ex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Projects