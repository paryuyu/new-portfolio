import NavBar from "../components/nav/Navbar";
import PlanetCanvas from "../components/canvas/PlanetCanvas";
const IntroPage = () => {


  return <section className="main_section">
    <NavBar />
    <h1>
      <span className="main_title white">Hi!</span>
      <span className="main_title white">I&apos;m yuyu.</span>
      <span className="sub_title ">Welcome to my portfolio site!</span>
    </h1>
    <PlanetCanvas />
  </section>
};

export default IntroPage;
