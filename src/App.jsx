import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"
import CommunityPage from "./Pages/CommunityPage"
import LandingPage from "./Pages/LandingPage"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import OurStoryPage from "./Pages/OurStoryPage"
import ProjectsPage from "./Pages/ProjectsPage"
import PreferencesPage from "./Pages/PreferencesPage"
import ProjectForm from "./Pages/ProjectForm"
import ProjectDescription from "./Pages/ProjectDescription"
import MyProjectsPage from "./Pages/MyProjectsPage"



const App = () => {
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element = {<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/ourstory" element={<OurStoryPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/projectpage" element={<ProjectsPage />} />
          <Route path="/projectform" element={<ProjectForm/>} />
          <Route path="/projectdescription" element={<ProjectDescription/>} />
          <Route path="/myprojects" element={<MyProjectsPage/>} />
        </Routes>
      </Router>
   
   </div>
  )
}

export default App