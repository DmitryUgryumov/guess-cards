import React, { useContext } from 'react';
import Context from "../Context/Context";

const GameResultItem = ({ id, number, name, move }) => {
  const { deleteResult } = useContext(Context)
  let style

  switch (number) {
    case 1:
      style = { color:'gold', fontWeight:700 }
      break
    case 2:
      style = { color:'silver', fontWeight:700 }
      break
    case 3:
      style = { color:'#cd7f32', fontWeight:700 }
      break
  }

  return (
    <li className='game__result-item'>
      <span>{number})</span>
      <span style={style}>{name}</span>
      <span>{move} ходов</span>
      <button className='button-delete' onClick={ () => deleteResult(id) }>Удалить результат</button>
    </li>
  );
};

export default GameResultItem;