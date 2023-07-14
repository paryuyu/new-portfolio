import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImEarth } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import ProjectImage from "./ProjectImage";

const dateFormat = (date) => {
  let day = new Date(date);
  let formmatter = new Intl.DateTimeFormat('ko', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
  return formmatter.format(day);
}

const ProjectModal = ({ selectedItem, onClose }) => {
  const { id, title, desc, webPage, github, period, images, skills } = selectedItem;

  const handlePopup = (type) => {
    switch (type) {
      case "git":
        window.open(github)
        break;
      case "web":
        window.open(webPage)
        break;
      default:
        break;
    }
  }

  return <>
    <div className="backdrop" />
    <motion.div
      layoutId={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="project_modal"
    >
      <div className="project_modal_btn_head">
        <div className="project_modal_head">
          <h1>{title}</h1>
          <BsGithub onClick={() => handlePopup("git")}
            className="project_icon" />
          <ImEarth onClick={() => handlePopup("web")}
            className="project_icon" />
        </div>
        <button onClick={onClose}><AiOutlineCloseCircle /></button>
      </div>
      <div className="project_mobile_btnbox">
        <button className="project_mobile_btn" onClick={() => handlePopup("git")}><BsGithub/> 깃허브 바로가기</button>
        <button className="project_mobile_btn" onClick={() => handlePopup("web")}><ImEarth/> 사이트 바로가기</button>
      </div>
      <div className="project_modal_big_section">
        <div className="project_desc_section">
          <p className="project_desc">{desc}</p>
          <div className="project_datebox">
            <h4>진행기간</h4>
            <span>시작 | {dateFormat(period[0])}</span>
            <span>완료 | {dateFormat(period[1])}</span>
          </div>
          <div className="project_skill_box">
            <h4>skill stack |</h4>
            {skills?.map(item => <span className="project_skill_item" key={item}>{item}</span>)}
          </div>
        </div>


        <div className="project_img_section">
          <ProjectImage images={images}/>
        </div>  
      </div>
    </motion.div>
  </>;
};

export default ProjectModal;
