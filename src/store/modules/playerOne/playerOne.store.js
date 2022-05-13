import { createSlice } from "@reduxjs/toolkit";

const playerOne = createSlice({
  name: "playerOneSelections",
  initialState: {
    position: [],
    player: "One"
  },
  reducers: {
    incrementPlayerOne(state, action) {
      state.position.push(action.payload)
    }
  }
})

export const { incrementPlayerOne } = playerOne.actions

export default playerOne.reducer
