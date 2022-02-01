import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, Row, Card } from 'react-bootstrap';
import { forEach, map } from 'react-bootstrap/cjs/ElementChildren';
import Col from 'react-bootstrap/esm/Col';

class Ergast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
      selectedCircuit: ''
    };
  }

  changeSelected = (item) => {
    this.setState({selectedItem: item, 
      selectedCircuit: item.Circuit
    });
  };

  async componentDidMount() {
    const response = await fetch(
      'https://ergast/api/f1/2020.json'
    );
    const responseData = await response.json();
    const selectedData = responseData.MRData.RaceTable.Races;
    this.setState({
      tableData: selectedData,
      selectedItem: selectedData[0],
      selectedCircuit: selectedData[0].Circuit,
    });    
  }

  render() {
    this.state.selectedItem !== null
      ? console.log(`Objeto seleccionado: ${this.state.selectedItem.title}`) : console.log(`No hay objeto seleccionado`);
      return (
        <div className="main-site">
          <h1>F1 Temporada 2020</h1>
          <Container>            
            <Row>
              <Col>
                <Table responsive striped hover>
                  <thead>
                    <tr>
                      <th>Sesión</th>
                      <th>Nombre</th>
                      <th>Circuito</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData.map((item) => {
                      return (
                        <tr 
                          key={uuid()}
                          onClick={()=>
                          this.changeSelected(item)}>
                          <td>{item.round}</td>
                          <td>{item.raceName}</td>
                          <td>{item.Circuit.circuitName}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <Card style ={{width: '18rem'}}>
                  <Card.Body>                    
                    <Card.Title>
                      {this.state.selectedItem.raceName}
                    </Card.Title>
                    <Card.Text>
                      Sesión: {this.state.selectedItem.round}
                      <p/>
                      Circuito: {this.state.selectedItem.circuitName}
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

export default Ergast;