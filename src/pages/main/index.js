import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Board } from '../../components/Board'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import "./styles.css"

export const Main = () => {

  // eslint-disable-next-line
  const [squarePositions, setSquarePositions] = useState(Array(9).fill(""))
  const playerOne = useSelector((state) => state.playerOne)
  const playerTwo = useSelector((state) => state.playerTwo)

  const handleClickTocleanBoardandPlayer = () => {
    setSquarePositions(Array(9).fill(""))
    playerOne.position = []
    playerTwo.position = []
  }

  return (
    <div className='main'>
      <Title />
      <div className='board-main'>
        <Board squarePositions={squarePositions} />
        <div className='btn-main'>
          <Button path="" color="secondary" onClick={handleClickTocleanBoardandPlayer}>Reiniciar</Button>
          <Button path="/" color="light-primary" onClick={handleClickTocleanBoardandPlayer}>Voltar</Button>
        </div>
      </div>
    </div>
  )
}
