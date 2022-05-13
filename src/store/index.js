import { configureStore } from "@reduxjs/toolkit";

import playerOneSelections from "./modules/playerOne/playerOne.store"
import playerTwoSelections from "./modules/playerTwo/playerTwo.store"
import winnerSelections from "./modules/game/winner.store"

const store = configureStore({
  reducer: {
    playerOne: playerOneSelections,
    playerTwo: playerTwoSelections,
    checkWinner: winnerSelections,
  }
})

export default store