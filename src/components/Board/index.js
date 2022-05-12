import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncIncrementPlayerOne } from "../../store/modules/playerOne/thunk"
import { asyncIncrementPlayerTwo } from "../../store/modules/playerTwo/thunk"

import { Square } from "../Square"
import "./styles.css"

export const Board = ({ squarePositions }) => {

  const [isPlayerOne, setIsPlayerOne] = useState(true)

  const dispatch = useDispatch()
  const playerOne = useSelector((state) => state.playerOne)
  const playerTwo = useSelector((state) => state.playerTwo)

  const handleClickChangePlayer = (index) => {
    if (isPlayerOne) {
      dispatch(asyncIncrementPlayerOne(index))
      squarePositions[index] = "X"
    } else {
      dispatch(asyncIncrementPlayerTwo(index))
      squarePositions[index] = "O"
    }
    setIsPlayerOne(!isPlayerOne)

  }

  return (
    <div className="board">

      {squarePositions.map((value, index) =>
      (
        <Square
          key={index}
          value={value}
          callback={() => handleClickChangePlayer(index)}
        />
      )
      )}
    </div>
  )
}
