import { createSlice } from "@reduxjs/toolkit";

const player = createSlice({
  name: "playerTwoSelections",
  initialState: {
    player: []
  },
  reducers: {
    increment(state, action) {
      state.player += action.payload
    },
    decrement(state, action) {
      state.player -= action.payload
    }
  }
})

export const { decrement, increment } = player.actions

export default player.reducer

export function asyncIncrement(amount) {
  return async function (dispatch) {
    dispatch(increment(amount))
  }
}

export function asyncDecrement(amount) {
  return async function (dispatch) {
    dispatch(decrement(amount))
  }
}