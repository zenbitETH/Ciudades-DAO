import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../assets/Logo.svg';

const Header = () => {
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
          <NavDropdown title="🌐Español" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
