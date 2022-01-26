import React from 'react';
import BootstrapTabla from './BootstrapTabla';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TitulosAlumnos, DatosAlumnos } from '../data/DatosAlumnos';
import { MenuItems } from '../data/MenuItems';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.logout = this.logout.bind(this);
  }



  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    {MenuItems.map(id='1')}
    <Link to={item.id} className="logout-link"></Link>
  }

  render() {
    return (
      <div className="main-site">
        <h1>Página de perfil</h1>
        <Button variant="primary" type="button" onClick={this.logout}>
          Cerrar sesión          
        </Button>        
      </div>
    );
  }
}
export default Perfil;
