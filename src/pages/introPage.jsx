import NavBar from "../components/nav/Navbar";
import PlanetCanvas from "../components/canvas/PlanetCanvas";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const IntroPage = () => {
  const [isMobile, setMobile] = useState(false); // 모바일 => True
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:600px)');
    setMobile(mediaQuery.matches)

  }, [])

  return <section className="main_section">
    <NavBar />
    <h1 className="main_section_title">
      <span className="main_title white">Hi!</span>
      <span className="main_title white">I&apos;m yuyu.</span>
      {isMobile ? <span className="sub_title">Welcome <br />to <br />my portfolio site!</span> : <span className="sub_title ">Welcome to my portfolio site!</span>}
    </h1>
    <PlanetCanvas />
    <a href="#about-section" 
    className="intro_icons">
      <p className="small_text">
        다음페이지로<br />
        이동</p>
      <BsChevronDoubleDown className="intro_icon" />
    </a>
  </section>
};

export default IntroPage;
