import { useState } from 'react';
import images from './api/images.js';
import Slide from './Slide';
import Btns from './Btns';
import './Carousel.css';
import Breadcrumbs from './Breadcrumbs.jsx';

export default function Carousel() {
  const [imageNum, setImageNum] = useState(0);

  const handlePrev = () => {
    setImageNum((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
    });
  };

  const handleNext = () => {
    setImageNum((prev) => {
      if (prev !== images.length - 1) {
        return prev + 1;
      }
    });
  };

  const handlePagination = (num) => {
    setImageNum(num - 1);
  };

  return (
    <div className="carousel">
      <Slide image={images[imageNum]} />
      <Btns
        imageNum={imageNum}
        images={images}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <Breadcrumbs
        images={images}
        imageNum={imageNum}
        handlePagination={handlePagination}
      />
    </div>
  );
}
