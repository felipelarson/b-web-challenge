import "./styles.css"

export const Square = ({ value, callback }) => (
  <button className="square" onClick={callback} disabled={value}>
    {value}
  </button>
)
