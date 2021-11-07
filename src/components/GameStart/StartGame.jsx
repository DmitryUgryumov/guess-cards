import React from 'react';

const StartGame = ({ setStartGame }) => {
  return (
    <button className='game__button game__button_start' onClick={ () => setStartGame(true) }>
      Начать игру
    </button>
  );
};

export default StartGame;