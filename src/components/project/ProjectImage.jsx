import { Suspense, useEffect } from "react";
import { useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const ProjectImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images, 'images...')

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
    {images[currentIndex] ?
      <Suspense fallback={null}>
        <button onClick={goToPreviousImage} className="prev_btn img_btn"><RxDoubleArrowLeft />이전</button>
        <img src={images[currentIndex]} alt="project" className="img_rect" />
        <button onClick={goToNextImage} className="next_btn img_btn">다음<RxDoubleArrowRight /></button>
      </Suspense> :
      <p className="img_loading">loading...</p>}
  </div>
};

export default ProjectImage;
