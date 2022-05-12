import { createSlice } from "@reduxjs/toolkit";

const player = createSlice({
  name: "playerOneSelections",
  initialState: {
    player: []
  },
  reducers: {
    increment(state, action) {
      state.player.push(action.payload)
    }
  }
})

export const { increment } = player.actions

export default player.reducer
