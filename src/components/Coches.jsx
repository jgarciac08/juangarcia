import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosCoches, DatosCoches } from '../data/DatosCoches';
class Coches extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosCoches.id}</th>
                    <th>{TitulosCoches.field1}</th>
                    <th>{TitulosCoches.field2}</th>
                    <th>{TitulosCoches.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosCoches.map((item) => {
                    return (
                      <tr>
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
                <Card.Img variant="top" src={DatosCoches[0].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosCoches[0].marca} {DatosCoches[0].modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {DatosCoches[0].matricula}
                    <p />
                    {DatosCoches[0].descripcion}
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

export default Coches;