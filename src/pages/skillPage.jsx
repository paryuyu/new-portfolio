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
          <p>저의 메인 스킬들을 정리한 내용입니다.<br />
            해당 스킬들을 주로 사용하고 있으며, 이외에도 성장을 위해 열심히 학습하고 있습니다.<br />
            초록색바로 나타낸 것은 제가 다룰 수 있는 정도를 나타낸 레벨입니다.<br />참고해주세요.
          </p>
        </div>
        <SkillDescription />
      </div>}
    <ScrolliconGroup />
  </section>;
};




export default SkillPage;

