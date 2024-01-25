import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"
import CommunityPage from "./Pages/CommunityPage"
import LandingPage from "./Pages/LandingPage"
import SignUp from "./components/SignUp"

const App = () => {
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          {/* <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </Router>
   
   </div>
  )
}

export default App