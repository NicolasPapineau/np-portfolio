import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledNavbar>
      <div className="navbar-container">
        <div className="logo">Dev.NicPap</div>
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: rgb(50, 50, 50);
  padding-left: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 15px;
    padding-right: 30px;
    

    li {
      button {
        background: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        color: white;
        font-weight: normal;
        font-size: 1em;

        &:hover {
          font-weight: bold;
        }
      }
    }
  }
`;

export default Header;