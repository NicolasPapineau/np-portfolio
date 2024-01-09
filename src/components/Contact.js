import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contact = () => {

    const emailAddress = 'n.papineau@outlook.com';
    const githubURL = 'https://github.com/NicolasPapineau';
    const linkedinURL = 'https://www.linkedin.com/in/nicolas-papineau-938119225/';

    const handleClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    // };

    return (
        <ProjectContainer id='contact'>
            <h3>Contact Me</h3>
            <p>
                If you have any questions or wish to hire me, feel free to reach out:
            </p>
            <a href={`mailto:${emailAddress}`} onClick={handleClick}>
                {emailAddress}
            </a>

            <SocialLinks>
                <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href={githubURL} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </SocialLinks>
            {/* <p>Or submit you information here:</p>

            <ContactForm onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </ContactForm> */}
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    padding: 20px 20px;
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
    margin-bottom: 400px;
    h3 {
        font-size: 1.5em;
        font-style: italic;
    }
    p, a{
        font-size: 1.25em;
    }
    a {
        font-size: 1.25em;
        color: #4CAF50; /* Green color or your preferred color */
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            color: #2E7D32; /* Darker green or your preferred color */
        }
    }
`

const SocialLinks = styled.div`
    margin-top: 20px;

    a {
        margin-right: 10px;
        padding-bottom: 50px;
        color: white;
        text-decoration: none;

        &:hover {
        text-decoration: underline;
        }
    }
`;

// const ContactForm = styled.form`
//     margin-top: 20px;
//     display: flex;
//     flex-direction: column;
//     width: 50%;
//     font-family: inherit;
//     input{
//         margin:10px;
//     }
//     textarea{
//         margin:10px;
//     }
//     button{
//         width: 200px;
//         margin-bottom: 50px;
//         margin-left: auto;
//     }

// `;




export default Contact