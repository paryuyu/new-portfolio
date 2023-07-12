import { skills } from "../../libs/skills";
import SkillItem from "./skillItem";

const SkillDescription = () => {
  const categories = Array.from(new Set(skills.map(item => item.category)));

  // 카테고리별로 스킬 매핑
  const skillGroups = categories.map(category => {
    return {
      category: category,
      skills: skills.filter(item => item.category === category)
    };
  });


  return <div className="skill_description_outline">
    <div className="skill_description_box">
      {skillGroups.slice(0, 4).map(group => (
        <div className="skill_category_box" key={group.category}>
          <div className="category">
            <span className="category_span">Category</span>
            <h2>{group.category}</h2></div>
          {group.skills.map(item => (
            <SkillItem key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>


    <div className="skill_description_box">{skillGroups.slice(4, 9).map(group => (
      <div className="skill_category_box" key={group.category}>
        <div className="category">
          <span className="category_span">Category</span>
          <h2>{group.category}</h2></div>
        {group.skills.map(item => (
          <SkillItem key={item.id} item={item} />
        ))}
      </div>
    ))}</div>

  </div>;
};

export default SkillDescription;
