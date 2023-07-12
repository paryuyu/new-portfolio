import { Canvas } from "@react-three/fiber";
import StarsBackground from "./stars";
import IntroPage from "../pages/introPage";
import CustomScrollBtn from "./CustomScrollBtn";
const MainBackground = () => {


  return (
    <div className="wrap_div">
      <Canvas dpr={[100, 2]} linear shadows style={{ position: "absolute" }}>
        <StarsBackground />
      </Canvas>
      <IntroPage />
      <CustomScrollBtn>intro</CustomScrollBtn>
    </div>)
};

export default MainBackground;
