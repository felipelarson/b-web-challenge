import { createSlice } from "@reduxjs/toolkit";

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
      const playerOne = action.payload
      state.value.map(([a, b, c]) => {
        if (playerOne.includes(a) && playerOne.includes(b) && playerOne.includes(c)) {
          console.log("Ganhei Map")
        }
      })
    }

  }
})

export const { checkWinner } = winner.actions

export default winner.reducer
