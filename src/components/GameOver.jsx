export default function GameOver ({player, hasDraw, onHandlePlayAgain}) {

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {hasDraw ? <p>It's a draw!</p> : <p>{player} won!</p>}
      <button onClick={onHandlePlayAgain}>Play Again</button>
    </div>
  )
}