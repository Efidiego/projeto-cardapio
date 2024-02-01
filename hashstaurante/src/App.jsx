import React from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './app.css';
import { Navegacao } from "./navegacao";

export function App() {
  return <>
        <img src={Hashtaurante} alt="" className='capa' />
        <Navegacao />
        </>
}
