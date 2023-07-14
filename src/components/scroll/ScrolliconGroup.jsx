import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const ScrolliconGroup = () => {
  return <> <span className="icon_up_box">
    <p className="icon_text"> <a href="#about-section"><BsChevronDoubleUp className="scroll_down_icon" /></a><br />어바웃섹션으로<br />
      바로가기
    </p>
  </span>

    <span className="icon_box">
      <p className="icon_text">프로젝트섹션으로<br />
        바로가기<br />
        <a href="#project-section"><BsChevronDoubleDown className="scroll_down_icon" /></a>
      </p>
    </span></>;
};

export default ScrolliconGroup;
