import React from 'react'
import { Board } from '../../components/Board'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import "./styles.css"

export const Main = () => {
  return (
    <div className='main'>
      <Title />
      <div className='board-main'>
        <Board />
        <div className='btn-main'>
          <Button path="/" color="secondary">Reiniciar</Button>
          <Button path="/" color="light-primary">Voltar</Button>
        </div>
      </div>
    </div>
  )
}
