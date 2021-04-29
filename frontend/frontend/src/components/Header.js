import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../assets/Logo.png';

const Header = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home">
      <img src={logo} alt="Procotol Cities" width="150px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/about">How do I get TARO</Nav.Link>
          <Nav.Link href="#home">🥇 0</Nav.Link>
          <Nav.Link href="#link">🗳️ 0</Nav.Link>
          <NavDropdown title="🌐Eng" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
