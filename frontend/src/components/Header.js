import { useContext } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../assets/Logo.svg';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  let {isSpanish, setIsSpanish} = useContext(LanguageContext);
  const handleOnSelect = () => {
    setIsSpanish(!isSpanish);
  };
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="/Home">
      <img src={logo} alt="Procotol Cities" width="150px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/About">¿Qué es TARO?</Nav.Link>
          <Nav.Link href="/proposallist">🥇 0</Nav.Link>
          <Nav.Link href="/CreateProposal">🗳️ 0</Nav.Link>
          <NavDropdown title="Language" id="basic-nav-dropdown">
          <NavDropdown.Item onSelect={handleOnSelect}>English</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;