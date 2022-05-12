import { createSlice } from "@reduxjs/toolkit";

const playerOne = createSlice({
  name: "playerOneSelections",
  initialState: {
    playerOne: []
  },
  reducers: {
    incrementPlayerOne(state, action) {
      state.playerOne.push(action.payload)
    }
  }
})

export const { incrementPlayerOne } = playerOne.actions

export default playerOne.reducer
