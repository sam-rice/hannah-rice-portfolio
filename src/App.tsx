import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import Header from "./components/Header"
import PageLayout from "./components/PageLayout"
import AboutPage from "./components/pages/AboutPage"
import WorksPage from "./components/pages/WorksPage"
import PilatesPage from "./components/pages/PilatesPage"
import ContactPage from "./components/pages/ContactPage"

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-full max-w-screen-2xl py-5 px-11">
        <Header />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/pilates" element={<PilatesPage />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Route>
        </Routes>
        <footer className="text-right text-gray-500 -mb-4 mt-5">©2024 Hannah Rice</footer>
      </div>
    </div>
  )
}

export default App
