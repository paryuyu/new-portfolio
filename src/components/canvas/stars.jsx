import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const StarsBackground = () => {

  const starRef = useRef(null);

  //별 움직이게 만들기
  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.001; 
      starRef.current.rotation.x += 0.001;
    }
  })

  return <Stars radius={500} depth={10} count={500} factor={20} ref={starRef} />
};

export default StarsBackground;
