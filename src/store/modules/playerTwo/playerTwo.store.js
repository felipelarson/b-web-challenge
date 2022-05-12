import { createSlice } from "@reduxjs/toolkit";

const playerTwo = createSlice({
  name: "playerTwoSelections",
  initialState: {
    playerTwo: []
  },
  reducers: {
    incrementPlayerTwo(state, action) {
      state.playerTwo.push(action.payload)
    },
  }
})

export const { incrementPlayerTwo } = playerTwo.actions

export default playerTwo.reducer

