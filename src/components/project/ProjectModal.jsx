import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ProjectModal = ({selectedItem, onClose}) => {
  const {id, title, desc, image} = selectedItem;

  return  <>
  <div className="backdrop"  />
  <motion.div
    layoutId={id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="modal"
  >
    <button onClick={onClose}><AiOutlineCloseCircle /></button>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
</>;
};

export default ProjectModal;
