import { Suspense, useEffect } from "react";
import { useState } from "react";
import { RxDoubleArrowLeft , RxDoubleArrowRight} from "react-icons/rx";
const ProjectImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex < images?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  return <div className="img_box">
    <button onClick={goToPreviousImage} className="prev_btn img_btn"><RxDoubleArrowLeft/>이전</button>
    <Suspense fallback={<div className="img_rect">loading...</div>}>
    <img src={images[currentIndex]} alt="project" className="img_rect"/>
    </Suspense>
    <button onClick={goToNextImage} className="next_btn img_btn">다음<RxDoubleArrowRight/></button>
  </div>
};

export default ProjectImage;
