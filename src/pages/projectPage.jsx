import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { defaultOptions, projectItem } from "../libs/projects";
import ProjectModal from "../components/project/ProjectModal";


const limitStringWithEllipsis = (str)=>{
  if(str.length <= 150){
    return str;
  }else{
    return str.slice(0,150)+"...";
  }
}


const Card = ({ item, onSelect, isSelected }) => {
  const { id, title, desc } = item;

  const handleClick = () => {
    onSelect(item);
  };


  return (
    <Tilt options={defaultOptions}>
      <motion.div
        className={`cardbox ${isSelected ? "selected" : ""}`}
        layoutId={id}
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="cardbox_title">{title}</h3>
        <p className="cardbox_desc">{limitStringWithEllipsis(desc)}</p>
      </motion.div>
    </Tilt>
  );
};

const ProjectPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section className="project_section" id="project-section">
        <h1>Project</h1>
        <p>아래에 게시된 프로젝트는 가장 최근 작업물인 4건의 작업물로 이루어져있습니다.<br/>
         회사에 재직 시 작업했던 작업물은 보안상의 이유로 게시되지 않습니다.
        </p>

        <div className="cardcontainer">
          {projectItem?.map((item) => (
            <Card
              key={item.id}
              item={item}
              onSelect={handleSelectItem}
              isSelected={selectedItem && selectedItem.id === item.id}
            />
          ))}
          <AnimatePresence>
            {selectedItem && (
             <ProjectModal selectedItem={selectedItem} onClose={handleCloseModal}/>
            )}
          </AnimatePresence>
        </div>


      </section>

    </>
  );
};

export default ProjectPage;

