import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DatosAlumnos } from '../data/DatosAlumnos';

class Perfil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagen: '',
      nombre: '',
      email: '',
      apellido1: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('id') !== null) {
      this.setState({
        imagen: DatosAlumnos[localStorage.getItem('id')].imagen,
        nombre: DatosAlumnos[localStorage.getItem('id')].nombre,
        email: DatosAlumnos[localStorage.getItem('id')].email,
        apellido1: DatosAlumnos[localStorage.getItem('id')].apellido1,
      });
    }
  }

  logout() {
    localStorage.removeItem('id');
  }

  render() {
    if (localStorage.getItem('id') !== null) {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.imagen} />
          <Card.Body>
            <Card.Title>
              <h1>{this.state.nombre}</h1>
            </Card.Title>
            <Card.Text>
              <h3>Correo: {this.state.email}</h3>
              <h3>Nombre: {this.state.nombre}</h3>
              <h3>Apellido: {this.state.apellido1}</h3>
            </Card.Text>
            <Link to="/">
              <Button type="button" onClick={this.logout}>
                Cerrar sesión
              </Button>
            </Link>
          </Card.Body>
        </Card>
      );
    }
  }
}

export default Perfil;
