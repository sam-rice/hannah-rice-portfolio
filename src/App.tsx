import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import Header from "./components/Header"
import PageLayout from "./components/PageLayout"
import StatementPage from "./components/StatementPage"
import PerformancePage from "./components/PerformancePage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/statement" element={<StatementPage />} />
          <Route path="/performance" element={<PerformancePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
