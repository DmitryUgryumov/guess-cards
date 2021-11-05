import React from 'react';

const GameRestart = ({ gameRestart }) => {
  return (
    <button className='game__button game__button_restart' onClick={gameRestart}>
      Начать заново
    </button>
  );
};

export default GameRestart;