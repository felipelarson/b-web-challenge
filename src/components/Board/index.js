import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncIncrementPlayerOne } from "../../store/modules/playerOne/thunk"
import { asyncIncrementPlayerTwo } from "../../store/modules/playerTwo/thunk"

import { Square } from "../Square"
import "./styles.css"

export const Board = () => {

  const [isPlayerOne, setIsPlayerOne] = useState(true)

  const dispatch = useDispatch()
  const playerOne = useSelector((state) => state.playerOne)
  const playerTwo = useSelector((state) => state.playerTwo)

  const squarePositions = [...Array(9).keys()]

  const handleClickChangePlayer = (index) => {
    if (isPlayerOne) {
      dispatch(asyncIncrementPlayerOne(index))
    } else {
      dispatch(asyncIncrementPlayerTwo(index))
    }
    setIsPlayerOne(!isPlayerOne)
  }

  return (
    <div className="board">

      {playerOne.playerOne} |
      {playerTwo.playerTwo}

      {squarePositions.map(index =>
      (
        <Square
          key={index}
          value=""
          onClick={() => handleClickChangePlayer(index)}
        />
      )
      )}
    </div>
  )
}
