import React, { useState } from 'react'
import { Board } from '../../components/Board'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import "./styles.css"

export const Main = () => {

  const [squarePositions, setSquarePositions] = useState(["", "", "", "", "", "", "", "", "",])

  return (
    <div className='main'>
      <Title />
      <div className='board-main'>
        <Board squarePositions={squarePositions} />
        <div className='btn-main'>
          <Button path="" color="secondary" onClick={() => setSquarePositions(["", "", "", "", "", "", "", "", "",])}>Reiniciar</Button>
          <Button path="/" color="light-primary">Voltar</Button>
        </div>
      </div>
    </div>
  )
}
