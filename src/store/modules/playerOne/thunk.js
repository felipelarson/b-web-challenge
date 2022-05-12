import { increment } from "./playerOne.store"

export function asyncIncrement(position) {
  return async function (dispatch) {
    dispatch(increment(position))
  }
}