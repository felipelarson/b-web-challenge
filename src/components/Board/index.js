import { useDispatch, useSelector } from "react-redux"
import { asyncIncrement } from "../../store/modules/playerOne/thunk"

import { Square } from "../Square"
import "./styles.css"

export const Board = () => {

  const dispatch = useDispatch()
  const position = useSelector((state) => state.playerOne)

  const squarePositions = [...Array(9).keys()]

  return (
    <div className="board">
      {position.player}
      {squarePositions.map(index =>
      (
        <Square
          key={index}
          value=""
          onClick={() => dispatch(asyncIncrement(index))}
        />
      )
      )}
    </div>
  )
}
