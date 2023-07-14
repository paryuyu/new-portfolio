
import { useState } from "react";
import CustomScrollBtn from "../components/scroll/CustomScrollBtn";
import HeadingTypo from "../components/aboutme/headingTypo";
import AboutMeContent from "../components/aboutme/AboutMeContent";
import { aboutMeContent } from "../libs/aboutme";
import { RxDoubleArrowDown } from "react-icons/rx";


const AboutPage = () => {

  const [selectedTab, setSelectedTab] = useState(null);

  const handleTab = (item) => {
    setSelectedTab(item)
  }

  const handleClick = () => {
    setSelectedTab(null)
  }


  return <section className="about_section" id="about-section">
    <div className="about_headtext">
      <HeadingTypo onSelect={handleClick}>A</HeadingTypo>
      <HeadingTypo onSelect={handleClick}>b</HeadingTypo>
      <HeadingTypo onSelect={handleClick}>o</HeadingTypo>
      <HeadingTypo onSelect={handleClick}>u</HeadingTypo>
      <HeadingTypo onSelect={handleClick}>t</HeadingTypo>
      <span style={{ width: '2rem' }}></span>
      <HeadingTypo onSelect={handleClick} colorSet={"pink"}>M</HeadingTypo>
      <HeadingTypo onSelect={handleClick}>e</HeadingTypo>
    </div>
    <div className="main_tab_screen">
      <nav>
        <ul>
          {aboutMeContent?.slice(0, aboutMeContent.length - 1).map((item, index) => {
            return <li key={index} onClick={() => handleTab(item)} className={selectedTab?.tab === item?.tab ? 'selected' : 'unSelected'}><span>{item?.tabIcon}</span><span>{item?.tab}</span></li>
          })}
        </ul>
      </nav>
      <AboutMeContent selectedTab={selectedTab} />
    </div>
    <CustomScrollBtn type="up" />
    <CustomScrollBtn type="down" />
    <a className="about_mobile_down" href="#skill-section">
      <RxDoubleArrowDown className="about_mobile_down" />
    </a>
  </section>;
};

export default AboutPage;
