import { checkWinner } from "./winner.store"

export function asyncCheckWinner(position) {
  return async function (dispatch) {
    dispatch(checkWinner(position))
  }
}