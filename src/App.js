import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingpage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
      </Routes>
    </div>
  )
}

export default App