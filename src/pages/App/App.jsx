import { useState } from 'react';
import React from 'react';
import Board from '../../components/Board/Board';
import Messages from '../../components/Messages/Messages';
// import Turn from '../../components/Turn/Turn';

// import { Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  // const turnX = 1;
  // const turnO = -1;
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handlePlayAgain = () => {
    setSquares(Array(9).fill(null));
    setTurn(turn);
    setWinner(winner);
    setGameOver(gameOver);
  };

  const handleClick = (i) => {
    // Implement your onClick logic here
    const newSquares = squares.slice(); // Create a copy of the squares array
    newSquares[i] = turn; // Assuming 'X' for simplicity, replace it with your game logic
    function changeTurn() {
      const newTurn = turn * -1;
      setTurn(newTurn)
      console.log(setTurn)
      // console.log(turn)
    }
    changeTurn();
    setSquares(newSquares);
    // console.log(handleClick)
  };
  
  return (
    <main className="App">
      <h1 id="game-header">Tic-Tac-Toe</h1>
      <Messages 
        turn={turn} 
        winner={winner} 
        gameOver={gameOver} 
        onClickPlayAgain={handlePlayAgain}
      />
      <Board squares={squares} turn={turn} onClick={handleClick} />
    </main>
  );
}