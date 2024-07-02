import { useState } from 'react';

export default function Player ({name, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick () {
    setIsEditing (editing => !editing);
  }

  function handleChange (event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing 
        ? <input 
            type="text" 
            required 
            onChange={handleChange}
            value={playerName} />
        : <span className={ !isEditing && 'player-name'}>{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
    </li>
  )
}