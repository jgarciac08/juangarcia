import React from 'react';
import {Table} from 'react-bootstrap';

class BootstrapTabla extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (<Table responsive>
    <thead>
      <tr>
        <th>Cochazos</th>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>        
      </tr>
      <tr>
        <td>2</td>
        {Array.from({ length: 4 }).map((_, index) => (
          <td key={index}>{index}</td>
        ))}
      </tr>
      <tr>
        <td>3</td>
        {Array.from({ length: 4 }).map((_, index) => (
          <td key={index}>{index}</td>
        ))}
      </tr>
    </tbody>
  </Table>);
  }
}

export default BootstrapTabla;