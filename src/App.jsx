import Players from './components/Players';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState ([]);

  function handleSelectSquare (row, col) {
    setActivePlayer ((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns (prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns [0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{square: {row: row, col: col}, player: currentPlayer}, ...prevTurns];
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Players name='Player 1' symbol="O" isActive={activePlayer === 'O'}/>
          <Players name='Player 2' symbol="X" isActive={activePlayer === 'X'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
