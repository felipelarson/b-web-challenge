import { incrementPlayerTwo } from "./playerTwo.store"

export function asyncIncrementPlayerTwo(position) {
  return async function (dispatch) {
    dispatch(incrementPlayerTwo(position))
  }
}