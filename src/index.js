import React from 'react';
import RDC from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ROOT_ELM = 'root'
const FOUND_ELM = document.getElementById(ROOT_ELM)
function App() {
  const NavLink = Nav.Link;
  const NavItem = NavDropdown.Item;
  const NavDiv = NavDropdown.Divider;
  
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#link">Link</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavItem href="#action/3.1">Action</NavItem>
                <NavItem href="#action/3.2">Another action</NavItem>
                <NavItem href="#action/3.3">Something</NavItem>
                <NavDiv />
                <NavItem href="#action/3.4">Separated link</NavItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

if (FOUND_ELM) { 
  const ReactRoot = RDC.createRoot(FOUND_ELM)
  ReactRoot.render(<App />)
}

// export default App