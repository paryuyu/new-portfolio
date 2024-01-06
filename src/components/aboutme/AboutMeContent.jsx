
import { AnimatePresence, motion } from "framer-motion";
import { aboutMeContent } from "../../libs/aboutme";
const AboutMeContent = ({ selectedTab }) => {

  return <AnimatePresence>
    <motion.div
      className="content_box"
      key={selectedTab ? selectedTab?.tab : "empty"}
      initial={{ y: 0.5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {selectedTab ? <div dangerouslySetInnerHTML={{ __html: selectedTab?.tabContent }} /> :
      <div dangerouslySetInnerHTML={{ __html: aboutMeContent[aboutMeContent.length-1]?.tabContent }} /> }
    </motion.div>
  </AnimatePresence>;
};

export default AboutMeContent;
