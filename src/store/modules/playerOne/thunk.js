import { incrementPlayerOne } from "./playerOne.store"

export function asyncIncrementPlayerOne(position) {
  return async function (dispatch) {
    dispatch(incrementPlayerOne(position))
  }
}