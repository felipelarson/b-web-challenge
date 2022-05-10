import { Square } from "../Square"

export const Board = (props) => {

  const renderSquare = (position) => (
    <Square value={props.squares[position]}
      onClick={() => props.onClick(position)}
    />
  )

  return (
    <div>
      <div className="border-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="border-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="border-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

    </div>
  )
}
