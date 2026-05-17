import { useState } from 'react';
import images from './api/images.js';
import Slide from './Slide';
import SlideAlert from './SlideAlert';
import Btns from './Btns';
import Breadcrumbs from './Breadcrumbs';
import './Carousel.css';

export default function Carousel() {
  const [imageNum, setImageNum] = useState(0);
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  const handlePrev = () => {
    setImageNum((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
    });
    setIsCarouselActive(true);
  };

  const handleNext = () => {
    setImageNum((prev) => {
      if (prev !== images.length - 1) {
        return prev + 1;
      }
    });
    setIsCarouselActive(true);
  };

  const handlePagination = (num) => {
    setImageNum(num - 1);
    setIsCarouselActive(true);
  };

  return (
    <div className="carousel">
      <Slide image={images[imageNum]} />
      <SlideAlert imageNum={imageNum} isCarouselActive={isCarouselActive} />
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
