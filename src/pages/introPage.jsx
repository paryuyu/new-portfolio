import NavBar from "../components/NavBar";
import PlanetCanvas from "../components/PlanetCanvas";
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
