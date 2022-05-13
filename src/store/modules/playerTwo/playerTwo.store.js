import { createSlice } from "@reduxjs/toolkit";

const playerTwo = createSlice({
  name: "playerTwoSelections",
  initialState: {
    position: [],
    player: "Two"
  },
  reducers: {
    incrementPlayerTwo(state, action) {
      state.position.push(action.payload)
    },
  }
})

export const { incrementPlayerTwo } = playerTwo.actions

export default playerTwo.reducer

