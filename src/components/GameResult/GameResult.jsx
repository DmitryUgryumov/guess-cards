import React from 'react';
import GameResultItem from "./GameResultItem";

const GameResult = ({ gameResult, deleteAllResult }) => {
  return (
    <div className='game__result'>
      <h2 className='game__result-title'>Таблица результатов</h2>

      <ul className='game__result-list'>
        {
          gameResult.length
            ? gameResult.map((item, index) => {
              return <GameResultItem key={item.id} id={item.id} number={index + 1} name={item.name} move={item.move}/>
            })
            : <h2 className='game__result-title'>Результатов нет</h2>
        }
      </ul>

      <button className='button-delete button-delete-all' onClick={deleteAllResult}>
        Удалить все результаты
      </button>
    </div>
  );
};

export default GameResult;
