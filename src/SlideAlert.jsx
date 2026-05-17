export default function SlideAlert({ imageNum, isCarouselActive }) {
  const num = imageNum + 1;
  const slideShowingText = isCarouselActive ? `Slide ${num} showing` : '';

  return (
    <div role="alert" aria-live="assertive" className="sr-only">
      {slideShowingText}
    </div>
  );
}
