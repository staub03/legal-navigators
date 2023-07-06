import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingpage"
import AboutPage from "./pages/aboutus"
import FaqPage from "./pages/faq"
import Formpage from "./pages/formpage"
import Formpage2 from "./pages/formpage2"
import PostalCodePage from "./pages/postalCodePage"
import CourtRecommendation from "./pages/courtRecommendation"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/faq" element={ <FaqPage/> } />
        <Route path="/formpage" element={ <Formpage/> } />
        <Route path="/formpage2" element={ <Formpage2/> } />
        <Route path="/PostalCodePage" element={ <PostalCodePage/> } />
        <Route path="/CourtRecommendation" element={ <CourtRecommendation/> } />
      </Routes>
    </div>
  )
}

export default App