import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
import Lista from './Lista';

class ListaClase extends React.Component {
  
  constructor(props) {
    super(props);
    this.listaInicial = [];

    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }
    
    this.state = { 
      listaActual: this.listaInicial, 
    };

    this.inputText;
    this.selectPrioridad;
  }

  
  funcion() {
    this.listaInicial = 
    this.listaInicial.concat(
      <ComponenteListaClase
        texto={this.inputText.value}
        prioridad={this.selectPrioridad.value}
      />
    );
    this.inputText.value = '';
    this.changeState();
  }

  
  changeState() {
    this.setState({listaActual: this.listaInicial})
  }

  
  render() {
    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>{this.state.listaActual}</ul>
        <li>
          <input
            type="text"
            ref={c => this.inputText = c}
            placeholder="Introduce una tarea"
          />
          <br />
          <select name="prioridad" ref={c => this.selectPrioridad = c}>
            <option value="baja">Prioridad Baja</option>
            <option value="media">Prioridad Media</option>
            <option value="alta">Prioridad Alta</option>
          </select>
          <br />
          <button onClick={()=>this.funcion()}>Añadir</button>
        </li>
        <br />
      </div>
    );
  }
}

export default ListaClase;