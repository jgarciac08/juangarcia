import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { DatosAlumnos } from '../data/DatosAlumnos';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: '', password: '', id: '1' };

    this.login = this.login.bind(this);

    this.nombre = React.createRef();
    this.passwd = React.createRef();
  }

  login() {
    this.setState({
      user: this.nombre.current.value,
      password: this.passwd.current.value,
    });
  }

  componentWillUnmount() {
    {
      {
        DatosAlumnos.map((item) => {
          if (
            item.email === this.state.user &&
            item.passwd === this.state.password
          ) {
            localStorage.setItem('id', item.id);
          }
        });
      }
    }
  }

  findId() {
    DatosAlumnos.map((item) => {
      if (item.email === this.state.user && item.passwd === this.state.password) {
        this.setState({
          id: item.id,
        });
      }
    });
  }

  componentDidMount() {
    this.findId;
    this.setState({
      id: localStorage.getItem('id'),
    });
  }

  render() {
    console.log(this.state.user);
    if (this.state.id !== null) {
      return (
        <div className="main-site">
          <h1>Bienvenido {DatosAlumnos[this.state.nombre]}</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduce email"
                  ref={this.nombre}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.passwd}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Login
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Home;
