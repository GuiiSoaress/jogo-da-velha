// criação do elemento squaser que irá compor o tabuleiro

import './App.css';
import {useState} from 'react';

function Square(){
  const [valor, setValor] = useState(null);

  function handleClick(){
    setValor('X')
  }
  return (
    <button classeName="square" onClick={handleClick}>{valor}</button>
  );
}

export default function Tabuleiro(){
  return (
    <div>
    <div>
    <Square valor = "1"/>
    <Square valor = "2"/>
    <Square valor = "3"/>
    </div>
    <div>
    <Square valor = "4"/>
    <Square valor = "5"/>
    <Square valor = "6"/>
    </div>
    <div>
    <Square valor = "7"/>
    <Square valor = "8"/>
    <Square valor = "9"/>
    </div>
    </div>
  )
}