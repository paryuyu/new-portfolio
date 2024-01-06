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

    {modalOpen &&
      <div className="skill_modal" >
        <div className="modal_head">
        <button className="modal_close" onClick={handleModal}><MdClose /></button>
          <h1 onClick={handleModal}>Main Skills</h1>
          <p>
            현재 제가 다룰 수 있는 기술들을 정리한 것 입니다. 적용할 수 있는 범위의 기술의 설명과 함께 레벨을 함께 기재해보았습니다.
          </p>
        </div>
        <SkillDescription />
      </div>}
  </section>;
};




export default SkillPage;

