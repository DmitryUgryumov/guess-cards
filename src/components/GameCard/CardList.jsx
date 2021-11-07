import React from 'react';

import CardItem from "./CardItem";

const CardList = (props) => {
  return (
    <div className='game' style={props.style}>
      {
        props.gameState.map(item =>{
          return <CardItem key={item.id} src={item.src} style={item.style}
                           disabled={item.disabled} gameState={item}/>
        })
      }
    </div>
  );
};

export default CardList;