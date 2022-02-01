import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Motos from '../components/Motos';
import CoinCap from '../components/CoinCap';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/motos',
    title: 'Motos',
    component: Motos,
  },
  {
    id: 5,
    path: '/coincap',
    title: 'CoinCap',
    component: CoinCap,
  },
];

/*
  path
  id
  title
  component

*/