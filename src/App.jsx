import Players from './components/Players';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare () {
    setActivePlayer ((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns ();
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Players name='Player 1' symbol="O" isActive={activePlayer === 'O'}/>
          <Players name='Player 2' symbol="X" isActive={activePlayer === 'X'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log />
    </main>
  )
}

export default App
