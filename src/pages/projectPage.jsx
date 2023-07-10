import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
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
        <h3>{title}</h3>
        <p>{desc}</p>
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
        <p>아래에 게시된 프로젝트는 가장 최근에 작업한 작업물들로 이루어져있습니다.<br/>
         회사에 재직 시 작업했던 작업물은 보안상의 이유로 게시되지 않습니다.
        </p>
        <div className="cardcontainer">
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              onSelect={handleSelectItem}
              isSelected={selectedItem && selectedItem.id === item.id}
            />
          ))}
          <AnimatePresence>
            {selectedItem && (
              <>
                <div className="backdrop" onClick={handleCloseModal} />
                <motion.div
                  layoutId={selectedItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="modal"
                >
                  <button onClick={handleCloseModal}><AiOutlineCloseCircle /></button>
                  <h3>{selectedItem.title}</h3>
                  <p>{selectedItem.desc}</p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>


      </section>

    </>
  );
};

export default ProjectPage;

const defaultOptions = {
  reverse: false,
  max: 25,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const items = [
  {
    id: 1,
    title: "New Portfolio",
    desc: "threejs와 motion-framer를 활용하여 새롭게 만든 포트폴리오 사이트입니다.",
    webPage: "https://",
    period: ["2023-07-09", "2023-07-10"],
  },
  {
    id: 2,
    title: "00Blog",
    desc: "Nextjs를 활용하여 만든 블로그 사이트입니다.",
    webPage: "https://",
    period: ["2023-06-28", "2023-07-10"],
  },
  {
    id: 3,
    title: "promptopia clone",
    desc: "nextjs 13 버전의 문법을 익히기 위해 간단히 진행한 토이프로젝트입니다.",
    webPage: "https://",
    period: ["2023-06-28", "2023-07-10"],
  },
  {
    id: 4,
    title: "Portfolio",
    desc:
      "nextjs 이전 버전으로 작성했던 포트폴리오 사이트입니다. 이력서 및 예전 토이프로젝트들을 확인해보실 수 있습니다.",
    webPage: "https://",
    period: ["2023-06-28", "2023-07-10"],
  },
];