import { useRef, useEffect } from 'react';

export default function BtnsSlideAlert({
  imageNum,
  images,
  isCarouselActive,
  handlePrev,
  handleNext
}) {
  const num = imageNum + 1;
  const slideShowingText = isCarouselActive ? `Slide ${num} showing` : '';

  const alertRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const delay = 3000;

  useEffect(() => {
    let focusId = null;

    if (imageNum === 0 && isCarouselActive) {
      alertRef.current?.focus();
      focusId = setTimeout(() => nextBtnRef.current?.focus(), delay);
    }

    if (imageNum === images.length - 1 && isCarouselActive) {
      alertRef.current?.focus();
      focusId = setTimeout(() => prevBtnRef.current?.focus(), delay);
    }

    return () => clearTimeout(focusId);
  }, [imageNum, isCarouselActive]);

  return (
    <>
      <div
        role="alert"
        aria-live="assertive"
        className="sr-only"
        tabIndex={-1}
        ref={alertRef}
      >
        {slideShowingText}
      </div>

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
    </>
  );
}
