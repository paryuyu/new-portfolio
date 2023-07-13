
import MainBackground from "./components/main/MainBackground";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import ProjectPage from "./pages/projectPage";
import SkillPage from "./pages/skillPage";


const App = () => {

  return (
    <>
      <MainBackground />
      <div className="description_page">
      <AboutPage />
      <SkillPage />  
      <ProjectPage />
      <ContactPage />
      </div>
    </>
  )
};

export default App;
