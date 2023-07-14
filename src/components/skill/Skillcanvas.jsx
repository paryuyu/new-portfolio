import { Cloud, ContactShadows, OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useRef } from "react";
import CanvasLoader from "../canvas/Loader";

const SkillCanvas = ({onSkill}) => {


  return <Canvas camera={{ position: [5, 5, 5], fov: 25 }} style={{ height: '90vh', zIndex: 0 , position:'absolute', top:'2rem'}}>
    <Suspense fallback={<CanvasLoader/>}>
    <ambientLight />
    <directionalLight intensity={0.5} />
    <CubeObj onSkill={onSkill} />
    <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} />
    <OrbitControls minPolarAngle={1} maxPolarAngle={Math.PI / 1.1} />
    </Suspense>
  </Canvas>;
};

const CubeObj = ({ onSkill }) => {

  const [hovered, setHovered] = useState(false);
  const GroupRef = useRef();
  const TextRef = useRef();
  useFrame((state) => (TextRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));
  useFrame(() => {
    GroupRef.current.rotation.y += 0.005
  })
  return (
    <group >
      <Cloud speed={0.01} depth={5} opacity={0.5} />
      <mesh onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onClick={onSkill} position={[0, 0, 0]} ref={GroupRef}>
        <boxGeometry scale={0.5} />
        <meshStandardMaterial>
          <RenderTexture attach={'map'} anisotropy={16}>
            <PerspectiveCamera makeDefault manual aspect={2} position={[-1, 0, 5]} />
            <color attach="background" args={[hovered ? 'peru' : '#aaa']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 10, 2]} />
            <Text ref={TextRef} fontSize={4} color={hovered ? "#fff" : "#333"} font={"./fonts/RubikDirt.ttf"}>
              Skillbox
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    </group>
  )
}
export default SkillCanvas;
