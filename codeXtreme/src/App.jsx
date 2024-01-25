import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"
import CommunityPage from "./Pages/CommunityPage"
import LandingPage from "./Pages/LandingPage"

const App = () => {
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Router>
   
   </div>
  )
}

export default App