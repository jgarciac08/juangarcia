import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';
import {MenuItems} from './data/MenuItems'

function createRoutes(){
  const listRoutes = [];
  for (let i = 0; i < MenuItems.length; i++){
    listRoutes.push(
      <Route path = {MenuItems[i].path} exact component={MenuItems[i].component}/>
    );
  }

  return listRoutes;
}

export function App() {
  return (
    <Router>
      <Header />
      {/*createRoutes()*/}
      {MenuItems.map(function createRoute(item){
        <Route path={item.path} exact component={item.component}/>
      })}
      {/* <Route path="/" exact component={Home} />
          <Route path="/listas" component={PaginaListas} />
          <Route path="/perfil" component={Perfil} />*/}
    </Router>
  );
}
