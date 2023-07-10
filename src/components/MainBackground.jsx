import { Canvas } from "@react-three/fiber";
import StarsBackground from "./stars";
import IntroPage from "../pages/introPage";
const MainBackground = () => {


  return (
    <div className="wrap_div">
      <Canvas dpr={[100, 2]} linear shadows style={{ position: "absolute" }}>
        <StarsBackground />
      </Canvas>
      <IntroPage />
  
    </div>)
};

export default MainBackground;
