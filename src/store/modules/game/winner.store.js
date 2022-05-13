import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  value: [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]
}

const winner = createSlice({
  name: "winnerSelections",
  initialState,
  reducers: {
    checkWinner(state, action) {
      const { position, player } = action.payload
      const buttons = document.querySelectorAll(".square")

      state.value.map(([a, b, c]) => {
        if (position.includes(a) && position.includes(b) && position.includes(c)) {
          [...buttons].map(btn => btn.disabled = true)

          return toast(`${player} é o vencedor!`)
        }
        if (position.length === 6) {
          return toast("Empate")
        }
        return false
      })
    }

  }
})

export const { checkWinner } = winner.actions

export default winner.reducer
