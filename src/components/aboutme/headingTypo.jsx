import { motion } from "framer-motion";

const HeadingTypo = ({ children, colorSet, onSelect }) => {
  console.log(colorSet)


  return <motion.h1
    onClick={onSelect}
    whileHover={{ scaleY: 1.1, color: colorSet ? '#ff738c' : '#ffafbd' }}
    whileTap={{ scale: 0.9 }}
    style={{ color: colorSet ? colorSet : '#ffffff' }}
  >
    {children}
  </motion.h1>;
};

export default HeadingTypo;
