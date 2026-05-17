import { useState } from 'react';
import images from './api/images.js';
import Slide from './Slide';
import BtnsSlideAlert from './BtnsSlideAlert';
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
      <BtnsSlideAlert
        imageNum={imageNum}
        images={images}
        isCarouselActive={isCarouselActive}
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
