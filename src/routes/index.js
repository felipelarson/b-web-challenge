import { Route, Routes as ReactRoute } from "react-router-dom"
import { Home } from "../pages/home"
import { Main } from "../pages/main"

export const Routes = () => {
  return (
    <ReactRoute>
      <Route path="/" element={<Home />} />
      <Route path="game" element={<Main />} />
    </ReactRoute >
  )
}
