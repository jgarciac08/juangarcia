import React from 'react';
import {Table} from 'react-bootstrap';
import {TitulosTablaCoches, DatosTablaCoches} from '../data/DatosCoches';

class Coches extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="main-site">
        <h1>Coches</h1>
        
        <Table responsive>
          <thead>
            <tr>
              <th>{TitulosTablaCoches.id}</th>
              <th>{TitulosTablaCoches.field1}</th>
              <th>{TitulosTablaCoches.field2}</th>
              <th>{TitulosTablaCoches.field3}</th>
            </tr>
          </thead>
          <tbody>              
            {DatosTablaCoches.map((item) => {
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
      </div>      
    )
  }
}

export default Coches;