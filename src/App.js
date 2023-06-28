import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingpage"
import AboutPage from "./pages/aboutus"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
      </Routes>
    </div>
  )
}

export default App