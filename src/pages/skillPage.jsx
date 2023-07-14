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
          <p>현재 제가 다룰 수 있는 기술들을 정리한 것 입니다. 참고용으로 봐주세요. 레벨도 함께 기술해놓았습니다. 꾸준히 학습하고 노력하고 있다는 점을 고려하여 봐주시길 바랍니다.
          </p>
        </div>
        <SkillDescription />
      </div>}
    <ScrolliconGroup />
  </section>;
};




export default SkillPage;

