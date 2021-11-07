import { useEffect, useState } from "react";

import CardList from "./components/GameCard/CardList";
import StartGame from "./components/GameStart/StartGame";
import GameRestart from "./components/GameStart/GameRestart";
import GameResult from "./components/GameResult/GameResult";
import Modal from "./components/Modal/Modal";
import Context from "./components/Context/Context";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

function App() {
  const img = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']
  const [imgSrc, setImgSrc] = useState(() => [...shuffle(img), ...shuffle(img)] )
  const [gameState, setGameState] = useState(imgSrc.map((src, index) => {
    return { id: index + 1, src: src, style: { background:'#1E90FF' }, disabled: false }
  }))
  const [startGame, setStartGame] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [activeCard, setActiveCard] = useState([])
  const [guessedCard, setGuessedCard] = useState(0)
  const [listPointerStyle, setListPointerStyle] = useState({})
  const [moveCount, setMoveCount] = useState(0)
  const [gameResult, setGameResult] = useState(localStorage.getItem('gameResult') ? JSON.parse(localStorage.gameResult) : [])
  const [modal, setModal] = useState(false)


  useEffect(() => {
    localStorage.setItem('gameResult', JSON.stringify(gameResult))
  }, [gameResult])

  useEffect(() => {
    if (activeCard.length === 2) {
      setMoveCount(prev => prev + 1)

      if (activeCard[0] === activeCard[1]) {
        setGuessedCard(prev => prev + 1)
        setGameState(
          prev => prev.map(
            item => activeCard.includes(item.src)
              ? { ...item, style:{ ...item.style, border:'3px green solid' } }
              : item
          )
        )
      } else {
        setTimeout(() =>{
          setGameState(
            prev => prev.map(
              item => activeCard.includes(item.src)
                ? { ...item, style:{ background:'#1E90FF', transform:'none' }, disabled: false }
                : item
            )
          )

          setListPointerStyle({})
        }, 1000)

        setListPointerStyle({ pointerEvents: 'none' })
      }

      setActiveCard([])
    }

  }, [activeCard])

  useEffect(() => {
    if (guessedCard === gameState.length / 2) {
      setTimeout(()=> {
        setModal(true)
      }, 2000)

      setGuessedCard(0)
    }
  }, [guessedCard])


  function checkActiveCard(cardId, src) {
    setGameState(
      prev => prev.map(
        item => item.id === cardId
          ? { ...item, style:{ background:'none', transform:'scaleX(-1)' }, disabled:true }
          : item
      )
    )

    setActiveCard([...activeCard, src])
  }

  function gameRestart() {
    let newImg

    setImgSrc( newImg = [...shuffle(img), ...shuffle(img)] )
    setGameState(
      newImg.map((src, index) => {
        return { id: index + 1, src: src, style:{ background:'#1E90FF' }, disabled:false }
      })
    )
    setEndGame(false)
    setMoveCount(0)
  }

  function addResult(name) {
    setModal(false)
    setEndGame(true)
    setGameResult(
      prev => [...prev, { move: moveCount, name: name ? name : 'unnamed', id: new Date() }]
      .sort((a, b) => a.move - b.move)
    )
  }

  const deleteResult = id => setGameResult( prev => prev.filter(item => item.id !== id) )

  const deleteAllResult = () => setGameResult([])


  return (
    <div className="App">
      <Context.Provider value={{ checkActiveCard, deleteResult }}>

        {
          modal ? <Modal addResult={addResult}/>: null
        }

        {
          !startGame ? <StartGame setStartGame={setStartGame}/> : null
        }

        {
          startGame && !endGame? <CardList gameState={gameState} style={listPointerStyle}/> : null
        }

        {
          endGame
            ?
            <>
              <GameResult gameResult={gameResult} deleteAllResult={deleteAllResult}/>
              <GameRestart gameRestart={gameRestart}/>
            </>
            : null
        }
      </Context.Provider>
    </div>
  );
}

export default App;
