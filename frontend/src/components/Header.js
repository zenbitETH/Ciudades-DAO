import { useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import logo from '../assets/Logow.png';


const Header = () => {
  let [isEnglish, setLoc] = useContext(LanguageContext);

  const handleOnSelect = () => {
    setLoc();
    window.location.reload();
  };

  return (
  <div>
      {isEnglish === 'english' ?

        <div >
          <Navbar collapseOnSelect fixed="top" expand="sm">
            <Navbar.Brand href="/Home"><img src={logo} alt="VoTARO" width="200px" />
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Nav >
                <NavLink className="NavLink" to="/Quiz">✔️ Validate</NavLink>
                <NavLink className="NavLink" to="/CreateProposal">💡 Propose </NavLink>
                <NavLink className="NavLink" to="/ProposalList">🗳️ Vote </NavLink>
              </Nav>
              <NavDropdown drop="down" title="🌐 Language">
                <NavDropdown.Item className="language" onSelect={handleOnSelect}>Spanish</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar> 
      </div>
      :
      <div>
        <Navbar className="Nav" fixed="top" expand="sm" >
        <Navbar.Brand href="/Home"><img src={logo} alt="VoTARO" width="200px" />
            </Navbar.Brand>

          <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <NavLink className="NavLink" to="/Quiz">✔️ Validar</NavLink>
              <NavLink className="NavLink" to="/CreateProposal">💡 Proponer</NavLink>
              <NavLink className="NavLink" to="/ProposalList">🗳️ Votar</NavLink>
            </Nav>
            <NavDropdown drop="down" className="language" title="🌐 Idioma">
              <NavDropdown.Item onSelect={handleOnSelect}>Inglés</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
          </Navbar>
        </div>
      }
    </div>
  );
};


export default Header;
