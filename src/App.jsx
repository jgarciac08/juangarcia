import React from 'react';

import Etiqueta from './components/Etiqueta';
import Lista from './components/Lista';
import ListaClase from './components/ListaClase';

export default function App() {
  const elementos1 = [
    { done: false, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: true, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Tomates' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Leche' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];

  return (
    <div>
      <h1>Listas de tareas</h1>
      <Lista titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <Lista titulo="Lista de la compra" icono="✌" elementos={elementos2} />
      <Lista titulo="ToDos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}