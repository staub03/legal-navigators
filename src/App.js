import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingpage"
import AboutPage from "./pages/aboutus"
import FaqPage from "./pages/faq"
import Formpage from "./pages/formpage"
import Formpage2 from "./pages/formpage2"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/faq" element={ <FaqPage/> } />
        <Route path="/formpage" element={ <Formpage/> } />
        <Route path="/formpage2" element={ <Formpage2/> } />
      </Routes>
    </div>
  )
}

export default App