import { OrbitControls, Preload, SpotLight, Text, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Suspense } from "react";
import CanvasLoader from "./Loader";

const Planet = () => {
  const [isMobile,setMobile] = useState(false); //모바일크기 => true
  const meshRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * delta
    }
  })

  useEffect(()=>{
    const isMediaQuery = window.matchMedia('(max-width:600px)'); 
    setMobile(isMediaQuery.matches);
  },[])
  
  

  return <mesh ref={meshRef}>
    <hemisphereLight intensity={0.15} groundColor="#333" />
    {!isMobile && <SpotLight
      position={[10, 10, 20]}
      angle={4}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={10} />}
    <pointLight intensity={100} />
    <primitive object={earth.scene} scale={isMobile ? 1:2} position={isMobile? [1,-0.8,1] : [5, -1, 1]}  />
  </mesh>;
};

const PlanetCanvas = () => {

  return (
    <Canvas
      style={{
        height: '90vh',
        position: 'absolute',
        top: 0,
        zIndex: 0
      }}
      frameloop='demand'
      shadows
      dpr={[1, 1]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} rotateSpeed={0.2} />
        <Planet />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default PlanetCanvas;