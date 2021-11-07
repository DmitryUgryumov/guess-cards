import React, { useState } from 'react';

const Modal = ({ addResult }) => {
  const [name, setName] = useState('')

  function formHandler(e) {
    e.preventDefault()
    addResult(name)
    setName('')
  }

  const inputHandler = e => setName(e.target.value)

  return (
    <div className='game-end-modal modal'>
      <div className='modal-container'>

        <h1 className='game-end-message modal__title'>
          Вы закончили игру!
        </h1>

        <form className='game-end-form modal__form' onSubmit={formHandler}>
          <input type="text" value={name} autoFocus={true} onChange={inputHandler} placeholder='Введите свое имя'/>
          <button className='game__button'>
            Отправить
          </button>
        </form>

      </div>
    </div>
  );
};

export default Modal;