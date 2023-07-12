import { useState } from "react";
import SkillCanvas from "../components/Skillcanvas";
import SkillDescription from "../components/SkillDescription";
import {BsChevronDoubleDown,BsChevronDoubleUp} from "react-icons/bs";
const SkillPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(c => !c)
  }

  return <section className="skill_section" id="skill-section">
    <SkillCanvas onSkill={handleModal} />
    {modalOpen && <div className="skill_modal" >
      <h1 onClick={handleModal}>Main Skills</h1>
      <SkillDescription/>
    </div>}
    <span className="icon_up_box">
      <p className="icon_text"> <a href="#about-section"><BsChevronDoubleUp className="scroll_down_icon"/></a><br/>어바웃섹션으로<br/>
      바로가기
     
      </p>
    </span>

    <span className="icon_box">
      <p className="icon_text">프로젝트섹션으로<br/>
      바로가기<br/>
      <a href="#project-section"><BsChevronDoubleDown className="scroll_down_icon"/></a>
      </p>
    </span>
    
  </section>;
};




export default SkillPage;

