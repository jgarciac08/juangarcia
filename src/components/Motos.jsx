import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosMotos, DatosMotos } from '../data/DatosMotos';
class Motos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: '',
      marca: '',
      modelo: '',
      color: '',
      abs: '',
      descripcion: '',
      imagen: '',
    }
  }

  eventclick(item) {
    this.setState({
      imagen: item.imagen,
      matricula: item.matricula,
      marca: item.marca,
      modelo: item.modelo,
      color: item.color,
      abs: item.abs,
      descripcion: item.descripcion,
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Motos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosMotos.id}</th>
                    <th>{TitulosMotos.field1}</th>
                    <th>{TitulosMotos.field2}</th>
                    <th>{TitulosMotos.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosMotos.map((item) => {
                    return (
                      <tr onClick={() => this.eventclick(item)}>
                        <td>{item.matricula}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.color}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.marca} {this.state.modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {this.state.matricula}
                    <p />
                    {this.state.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Motos;