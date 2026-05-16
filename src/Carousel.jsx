import { useState } from 'react';
import images from './api/images.js';
import Slide from './Slide';
import './Carousel.css';

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
      <div className="btns">
        {imageNum !== 0 && (
          <button className="prev" onClick={handlePrev}>
            Previous
          </button>
        )}
        {imageNum !== images.length - 1 && (
          <button className="next" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
      <ul className="breadcrumbs">
        {images.map((image, i) => {
          const num = i + 1;
          const activeClass = imageNum === i ? 'active' : '';

          return (
            <li key={image.src}>
              <button
                className={activeClass}
                onClick={() => handlePagination(num)}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
