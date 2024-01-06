
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBackground from "./components/main/MainBackground";
import NavBar from "./components/nav/Navbar";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import ProjectPage from "./pages/projectPage";
import SkillPage from "./pages/skillPage";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/new-portfolio" element={<NavBar />}>
            <Route path="/new-portfolio" element={<MainBackground />} />
            <Route path="/new-portfolio/about-me" element={<AboutPage />} />
            <Route path="/new-portfolio/skill" element={<SkillPage />} />
            <Route path="/new-portfolio/project" element={<ProjectPage />} />
            <Route path="/new-portfolio/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
