const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
import { useState } from 'react';

export default function GameBoard ({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState (initialGameBoard);

  function handleSelectedSquare (row, col, symbol) {
    setGameBoard ((prevGameBoard) => {
      console.log (row, col, symbol)
      console.log ()
      const newGameBoard = [...prevGameBoard.map (innerArray => [...innerArray])];
      newGameBoard[row][col] = activePlayerSymbol;
      return newGameBoard;
    })

    onSelectSquare ();
  }

  onSelectSquare 
  return (
    <ol id="game-board">
      {gameBoard.map ((row, rowIndex) => <li key = {rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key = {colIndex}><button onClick={() => handleSelectedSquare (rowIndex, colIndex, 'X')}>{playerSymbol}</button></li>)}
        </ol>
      </li>)}
    </ol>
  )
}