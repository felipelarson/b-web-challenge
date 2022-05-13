import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncCheckWinner } from "../../store/modules/game/thunk"
import { asyncIncrementPlayerOne } from "../../store/modules/playerOne/thunk"
import { asyncIncrementPlayerTwo } from "../../store/modules/playerTwo/thunk"

import { Square } from "../Square"
import "./styles.css"

export const Board = ({ squarePositions }) => {

  const [isPlayerOne, setIsPlayerOne] = useState(true)

  const dispatch = useDispatch()
  const playerOne = useSelector((state) => state.playerOne)
  const playerTwo = useSelector((state) => state.playerTwo)
  const checkWinner = useSelector((state) => state.checkWinner)

  const handleClickChangePlayer = (index) => {
    if (isPlayerOne) {
      dispatch(asyncIncrementPlayerOne(index))
      squarePositions[index] = "X"
    } else {
      dispatch(asyncIncrementPlayerTwo(index))
      squarePositions[index] = "O"
    }
  }

  useEffect(() => {
    if (!isPlayerOne) {
      dispatch(asyncCheckWinner(playerOne))
    } else {
      dispatch(asyncCheckWinner(playerTwo))
    }
    setIsPlayerOne(!isPlayerOne)
    // eslint-disable-next-line
  }, [playerOne, playerTwo])

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
