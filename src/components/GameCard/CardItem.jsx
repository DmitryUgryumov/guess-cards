import React, { useContext } from 'react';
import Context from '../Context/Context';

import imgOne from '../../img/1.png'
import imgTwo from '../../img/2.png'
import imgThree from '../../img/3.png'
import imgFour from '../../img/4.png'
import imgFive from '../../img/5.png'
import imgSix from '../../img/6.png'
import imgSeven from '../../img/7.png'
import imgEight from '../../img/8.png'

const img = {
  1: imgOne,
  2: imgTwo,
  3: imgThree,
  4: imgFour,
  5: imgFive,
  6: imgSix,
  7: imgSeven,
  8: imgEight
}

const CardItem = ({ src, style, disabled, gameState }) => {
  const { checkActiveCard } = useContext(Context)
  const vis = disabled ? 'visible' : 'hidden'

  const checkCards = () => checkActiveCard(gameState.id, src)

  return (
    <button type='button' disabled={disabled} className='game__item' onClick={checkCards} style={style}>
      <img alt='NBA' className='game__item-img' src={ img[parseInt(src)] } style={{ visibility:vis }}/>
    </button>
  );
};

export default CardItem;