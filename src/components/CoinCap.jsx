import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, Row, Card } from 'react-bootstrap';
import { forEach, map } from 'react-bootstrap/cjs/ElementChildren';
import Col from 'react-bootstrap/esm/Col';

class CoinCap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api.coincap.io/v2/assets'
    );
    const responseData = await response.json();

    this.setState({
      tableData: responseData.slice(0,29),
      selectedItem: responseData.data[0],
    });
    console.log('bb', this.state.tableData);
  }

  render() {
    console.log('after', this.state.tableData.items);
    const a = this.state.tableData.items;
    if (this.state.tableData.items !== null) {
      console.log('after2', this.state.tableData.items);
      return (
        <Container>
          <h1>Activos</h1>
          <Row>
            <Col>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Simbolo</th>
                    <th>Capital</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.items.map((item) => {
                    return (
                      <tr onClick={}>
                        <td>{item.snippet.title}</td>
                        <td>{item.snippet.publishedAt}</td>
                        <td>{item.channel}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" />
                  <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else {
      console.log('after3', this.state.tableData.items);
      return (
        <Container>
          <h1>Cargando...</h1>
        </Container>
      );
    }
  }
}

export default CoinCap;