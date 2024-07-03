import Players from './components/Players';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';

import { useState } from 'react';
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer (turns) {
  let activePlayer = 'X';
  if (turns.length > 0 && turns [0].player === 'X') {
    activePlayer = 'O';
  }
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState ([]);
  const activePlayer = deriveActivePlayer (gameTurns);

  let gameBoard = [...initialGameBoard];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner, hasWinner = false;

  for (const comb of WINNING_COMBINATIONS) {
    const first = gameBoard[comb[0].row][comb[0].column]
    const second = gameBoard[comb[1].row][comb[1].column]
    const third = gameBoard[comb[2].row][comb[2].column]
    if (first && first === second && first === third) {
      winner = first;
      hasWinner = true;
    }
  }

  let hasDraw = gameTurns.length === 9 && !hasWinner;
  console.log ('drawn', hasDraw)

  function handleSelectSquare (row, col) {
    setGameTurns (prevTurns => {
      const updatedTurns = [{square: {row: row, col: col}, player: activePlayer}, ...prevTurns];
      return updatedTurns;
    })
  }

  function onPlayAgain () {
    while (gameTurns.length > 0) {
      let mov = gameTurns.pop ();
      gameBoard[mov.square.row][mov.square.col] = null;
    }
    hasWinner = false;
    hasDraw = false;
    setGameTurns ([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Players name='Player 1' symbol="O" isActive={activePlayer === 'O'}/>
          <Players name='Player 2' symbol="X" isActive={activePlayer === 'X'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      {(hasWinner || hasDraw) && <GameOver player={winner} hasDraw={hasDraw} onHandlePlayAgain={onPlayAgain}/>}
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
