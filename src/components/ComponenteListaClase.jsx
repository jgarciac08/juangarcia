import React from 'react';

import './componente-lista.css';

class ComponenteLista extends React.Component {

  constructor(props){
    super(props);
    this.done = props.done;
    this.prioridad = props.prioridad;
    this.texto = props.texto;
    this.setElementClass();
  }
  let claseLista = '';
  setElementClass();
  function setElementClass() {
    props.prioridad;
    if (this.done) {
      claseLista += ' el-done';
    } else {
      claseLista += ' el-undone';
    }
  }

  setTaskStatus() {
    this.done = !this.done;
    setElementClass();
  }

  render (){
    return (
      <li className={this.claseLista}>
        <input type="checkbox" onChange={setTaskStatus} />
        {this.texto}
      </li>
    );
  }
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
};