import { createSlice } from "@reduxjs/toolkit";

const winner = createSlice({
  name: "winnerSelections",
  initialState: {
    winner: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  },

  reducers: {
    checkWinner(state, action) {
      console.log(state, action.payload)
    }
  }
})

export const { checkWinner } = winner.actions

export default winner.reducer
