import { motion } from "framer-motion";
import { useEffect } from "react";
const SkillPage = () => {

  return <section className="skill_section" id="skill-section">
    <HeadingTypo>S</HeadingTypo>
    <HeadingTypo>k</HeadingTypo>
    <HeadingTypo>i</HeadingTypo>
    <HeadingTypo>l</HeadingTypo>
    <HeadingTypo>l</HeadingTypo>
    <HeadingTypo>s</HeadingTypo>
  </section>;
};


const HeadingTypo = ({children})=>{

  useEffect(()=>{
    //애니메이션 적용하기.
  },[])

return(
  <motion.h1
    whileHover={{scale:1.1, color:'#fff'}}>
    {children}
  </motion.h1>
)
}


export default SkillPage;

