import { useContext } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import '../styles/Home.css';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  let {isEnglish, setIsEnglish} = useContext(LanguageContext);
  const handleOnSelect = () => {
    setIsEnglish(!isEnglish);
  };
  return (
  <div>   
      {isEnglish ?
      <div className="Nav">
      <Navbar>
        <Navbar.Brand href="/Home">
        <img src={logo} alt="Procotol Cities" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/About">What is VoTARO?</Nav.Link>
            <Nav.Link href="/proposallist">🥇 0</Nav.Link>
            <Nav.Link href="/CreateProposal">🗳️ 0</Nav.Link>
            <NavDropdown  title="🌐Language" id="basic-nav-dropdown">
             <NavDropdown.Item className="lan2" onSelect={handleOnSelect}>Español</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
      :
        <div>
        <Navbar className="Navbar">
        <Navbar.Brand href="/Home">
        <img src={logo} alt="Procotol Cities" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={{color: 'orange'}} href="/About">¿Qué es VoTARO?</Nav.Link>
            <Nav.Link style={{color: 'orange'}} href="/proposallist">🥇 0</Nav.Link>
            <Nav.Link style={{color: 'orange'}} href="/CreateProposal">🗳️ 0</Nav.Link>
            <NavDropdown title="🌐Idioma" id="basic-nav-dropdown">
            <NavDropdown.Item className="lan" menuAlign={{ lg: 'left'}} onSelect={handleOnSelect}>English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    }
    </div>
  );
};


export default Header;