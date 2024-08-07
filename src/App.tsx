import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import Header from "./components/Header"
import MainLayout from "./components/MainLayout"
import AboutPage from "./components/pages/AboutPage"
import WorksGalleryPage from "./components/pages/WorksGalleryPage"
import PilatesPage from "./components/pages/PilatesPage"
import WorkPage from "./components/pages/WorkPage"
// import ContactPage from "./components/pages/ContactPage"

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-full max-w-screen-2xl py-5 px-11">
        <Header />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" >
              <Route index element={<WorksGalleryPage />} />
              <Route
                path=":workName"
                element={<WorkPage />}
              />
            </Route>
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
