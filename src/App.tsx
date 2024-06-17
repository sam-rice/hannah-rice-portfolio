import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"

function App() {
  return (
    <>
      <header>Hannah Rice</header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
