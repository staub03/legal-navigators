import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingpage"
import AboutPage from "./pages/aboutus"
import FaqPage from "./pages/faq"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/faq" element={ <FaqPage/> } />
      </Routes>
    </div>
  )
}

export default App