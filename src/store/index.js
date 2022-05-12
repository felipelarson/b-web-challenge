import { configureStore } from "@reduxjs/toolkit";

import playerOneSelections from "./modules/playerOne/playerOne.store"
import playerTwoSelections from "./modules/playerTwo/playerTwo.store"

const store = configureStore({
  reducer: {
    playerOne: playerOneSelections,
    playerTwo: playerTwoSelections,
  }
})

export default store