export default function Btns({ imageNum, images, handlePrev, handleNext }) {
  return (
    <div className="btns">
      {imageNum !== 0 && (
        <button
          className="prev"
          onClick={handlePrev}
          aria-label="Show previous slide"
        >
          Previous
        </button>
      )}
      {imageNum !== images.length - 1 && (
        <button
          className="next"
          onClick={handleNext}
          aria-label="Show next slide"
        >
          Next
        </button>
      )}
    </div>
  );
}
