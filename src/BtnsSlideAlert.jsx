import { useRef, useEffect, useState } from 'react';

export default function BtnsSlideAlert({
  imageNum,
  images,
  isCarouselActive,
  handlePrev,
  handleNext
}) {
  const prevSlideTextConst = 'Show previous slide';
  const nextSlideTextConst = 'Show next slide';
  const [prevSlideText, setPrevSlideText] = useState(prevSlideTextConst);
  const [nextSlideText, setNextSlideText] = useState(nextSlideTextConst);

  const num = imageNum + 1;
  const slideShowingText = isCarouselActive ? `Slide ${num} showing` : '';
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (imageNum === 0) {
      nextBtnRef.current?.focus();
      setNextSlideText(`${slideShowingText} — ${nextSlideTextConst}`);
    } else if (imageNum === images.length - 1) {
      prevBtnRef.current?.focus();
      setPrevSlideText(`${slideShowingText} — ${prevSlideTextConst}`);
    } else {
      setNextSlideText(nextSlideTextConst);
      setPrevSlideText(prevSlideTextConst);
    }
  }, [imageNum]);

  return (
    <>
      <div role="alert" aria-live="assertive" className="sr-only">
        {slideShowingText}
      </div>

      <div className="btns">
        {imageNum !== 0 && (
          <button
            className="prev"
            onClick={handlePrev}
            aria-label={prevSlideText}
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
            aria-label={nextSlideText}
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
