import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimateBox = () => {


  let meshRef = useRef(null)
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime()
    meshRef.current.rotation.y = clock.getElapsedTime()
  })


  return <mesh ref={meshRef}>
  <boxGeometry />
  <meshBasicMaterial color={'royalblue'} />
</mesh>
};

export default AnimateBox;


