import { Square } from "../Square"
import "./styles.css"

export const Board = () => {

  const squarePositions = [...Array(9).keys()]

  return (
    <div className="board">
      {squarePositions.map(index =>
      (
        <Square
          key={index}
          value=""
          onClick={() => console.log(index)}
        />
      )
      )}
    </div>
  )
}
