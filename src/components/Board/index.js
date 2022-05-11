import { Square } from "../Square"
import "./styles.css"

export const Board = () => {

  const renderSquare = (position) => (
    <Square value="X"
      onClick={() => this.onClick(position)}
    />
  )

  return (
    <div className="board">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  )
}
