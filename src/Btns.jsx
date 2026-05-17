import { useRef, useEffect } from 'react';

export default function Btns({ imageNum, images, handlePrev, handleNext }) {
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (imageNum === 0) {
      nextBtnRef.current?.focus();
    }

    if (imageNum === images.length - 1) {
      prevBtnRef.current?.focus();
    }
  }, [imageNum]);

  return (
    <div className="btns">
      {imageNum !== 0 && (
        <button
          className="prev"
          onClick={handlePrev}
          aria-label="Show previous slide"
          ref={prevBtnRef}
          tabIndex={0}
        >
          Previous
        </button>
      )}
      {imageNum !== images.length - 1 && (
        <button
          className="next"
          onClick={handleNext}
          aria-label="Show next slide"
          ref={nextBtnRef}
          tabIndex={0}
        >
          Next
        </button>
      )}
    </div>
  );
}
