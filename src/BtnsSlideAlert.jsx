import { useRef, useEffect } from 'react';

export default function BtnsSlideAlert({
  imageNum,
  images,
  isCarouselActive,
  isPrevNextBtnClick,
  handlePrev,
  handleNext
}) {
  const prevSlideTextConst = 'Show previous slide';
  const nextSlideTextConst = 'Show next slide';
  const num = imageNum + 1;
  const imageAlt = images[imageNum]?.description
    ? `: ${images[imageNum].description} `
    : '';

  const slideShowingText = isCarouselActive
    ? `Slide ${num} showing${imageAlt}`
    : '';
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const prevSlideText =
    imageNum === images.length - 1 && isPrevNextBtnClick
      ? `${slideShowingText} — ${prevSlideTextConst}`
      : prevSlideTextConst;

  const nextSlideText =
    imageNum === 0 && isPrevNextBtnClick
      ? `${slideShowingText} — ${nextSlideTextConst}`
      : nextSlideTextConst;

  useEffect(() => {
    if (imageNum === images.length - 1 && isPrevNextBtnClick) {
      prevBtnRef.current?.focus();
    } else if (imageNum === 0 && isPrevNextBtnClick) {
      nextBtnRef.current?.focus();
    }
  }, [imageNum, isPrevNextBtnClick, images.length]);

  return (
    <>
      <div role="status" aria-live="polite" className="sr-only">
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
