import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return ( 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to={MenuItems[0].path}>
    <img
            className="logo-image"
            src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
          />
          <i className="fas fa-user-graduate" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      {MenuItems.map((item) => {
            return (
              <li key={item.id}>
                <Nav.Link as={Link} to={item.path}>
                  {item.title}
                </Nav.Link>
              </li>
            );
          })}       
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>);
  }
}

export default BootstrapHeader;

