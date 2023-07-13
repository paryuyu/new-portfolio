import { useState } from "react";
import ScrolliconGroup from "../components/scroll/ScrolliconGroup";
import SkillCanvas from "../components/skill/Skillcanvas";
import SkillDescription from "../components/skill/SkillDescription";
import { MdClose } from "react-icons/md"
const SkillPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(c => !c)
  }

  return <section className="skill_section" id="skill-section">
    <SkillCanvas onSkill={handleModal} />
    {modalOpen && <div className="skill_modal" >
      <div className="modal_head">
        <h1 onClick={handleModal}>Main Skills</h1>
        <button className="modal_close" onClick={handleModal}><MdClose /></button>
      </div>
      <SkillDescription />
    </div>}
    <ScrolliconGroup />
  </section>;
};




export default SkillPage;

