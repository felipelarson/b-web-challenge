import { configureStore } from "@reduxjs/toolkit";

import playerOneSelections from "./modules/playerOne/playerOne.store"

const store = configureStore({
  reducer: {
    playerOne: playerOneSelections
  }
})

export default store