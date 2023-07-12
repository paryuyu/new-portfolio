import { motion } from "framer-motion";

const HeadingTypo = ({ children }) => {
  
  return <motion.h1
    whileHover={{ scaleY: 1.1, color: '#ffafbd' }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.h1>;
};

export default HeadingTypo;
