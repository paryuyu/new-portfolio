import { useState } from "react";
import SkillCanvas from "../components/Skillcanvas";
import SkillDescription from "../components/SkillDescription";

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
  </section>;
};




export default SkillPage;

