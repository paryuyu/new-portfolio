import React from "react";

const SkillItem = ({item}) => {
  const {title, level, description} = item;
  return <div className="skill_item_box">
  <h3 className="skill_item_title">{title}</h3>
  <p className="skill_item_description">{description}</p>
  <div className="level_box"><div className="level" style={{width:level}}></div></div>
  </div>;
};

export default SkillItem;
