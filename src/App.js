// criação do elemento squaser que irá compor o tabuleiro

import './App.css';
import {useState} from 'react';

function Square({valor, onSquareClick}){
  const [valor, setValor] = useState(null);

  function handleClick(){
    <button className="square" onClick={onSquareClick}>
          {valor}
    </button>
  }
  return (
    <button classeName="square" onClick={handleClick}>{valor}</button>
  );
}

export default function Tabuleiro(){
  const [square, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = setSquares.slice();
    nextSquares[i] = "X"
  }
  return (
    <div>
    <div>
    <Square valor = "squares[0]"/>
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